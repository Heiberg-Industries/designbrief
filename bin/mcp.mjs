#!/usr/bin/env node

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import { readFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { handleGetPalette } from '../lib/palette.mjs';
import { handleCheckContrast } from '../lib/contrast.mjs';
import { handleGetTokens } from '../lib/tokens.mjs';
import { handleGetTailwindConfig } from '../lib/tailwind.mjs';
import { trackEvent } from '../lib/telemetry.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkg = JSON.parse(await readFile(join(__dirname, '..', 'package.json'), 'utf-8'));

const server = new McpServer({
  name: 'designbrief',
  version: pkg.version,
});

// ─── Telemetry ───────────────────────────────────────────────

function withTelemetry(toolName, handler) {
  return async (args, extra) => {
    const result = await handler(args, extra);
    trackEvent('mcp-tool-call', { tool: toolName, style: args.style || '' });
    return result;
  };
}

// ─── Tools ──────────────────────────────────────────────────

server.tool(
  'get-palette',
  'Extract the color palette from a designbrief style. Returns hex colors grouped by role (primary, background, text, accent, etc.).',
  {
    style: z.string().describe('Style name, e.g. "corporate-modern", "glassmorphism", "neubrutalism"'),
    mode: z.enum(['light', 'dark', 'both']).optional().default('both')
      .describe('Which mode palette to return'),
  },
  withTelemetry('get-palette', handleGetPalette)
);

server.tool(
  'check-contrast',
  'Calculate WCAG 2.1 contrast ratio between two colors. Returns pass/fail for AA and AAA levels.',
  {
    foreground: z.string().regex(/^#[0-9A-Fa-f]{3,8}$/)
      .describe('Foreground color as hex, e.g. "#FFFFFF"'),
    background: z.string().regex(/^#[0-9A-Fa-f]{3,8}$/)
      .describe('Background color as hex, e.g. "#1A1A1A"'),
    fontSize: z.number().optional().default(16)
      .describe('Font size in px (affects large text threshold)'),
    fontWeight: z.number().optional().default(400)
      .describe('Font weight (bold >= 700 counts as large text at smaller sizes)'),
  },
  withTelemetry('check-contrast', handleCheckContrast)
);

server.tool(
  'get-tokens',
  'Export all design tokens from a designbrief style as structured JSON. Includes colors, fonts, border-radius, shadows, and transitions.',
  {
    style: z.string().describe('Style name, e.g. "bauhaus", "dark-mode-premium"'),
    format: z.enum(['flat', 'nested']).optional().default('nested')
      .describe('"flat" returns CSS custom property pairs, "nested" groups by category'),
  },
  withTelemetry('get-tokens', handleGetTokens)
);

server.tool(
  'get-tailwind-config',
  'Generate a Tailwind CSS theme configuration from a designbrief style. Ready to paste into tailwind.config.ts.',
  {
    style: z.string().describe('Style name, e.g. "japandi", "aurora"'),
    mode: z.enum(['light', 'dark', 'both']).optional().default('both')
      .describe('Generate config for light, dark, or both modes'),
  },
  withTelemetry('get-tailwind-config', handleGetTailwindConfig)
);

server.tool(
  'submit-feedback',
  'Submit feedback, suggestions, or bug reports about designbrief styles or tools. Your message will be sent to the maintainer.',
  {
    message: z.string().min(3).max(2000)
      .describe('Feedback message — what would you improve, what is missing, or what is broken?'),
    style: z.string().optional()
      .describe('Related style name, if applicable (e.g. "glassmorphism")'),
    category: z.enum(['suggestion', 'bug', 'style-request', 'other']).optional().default('suggestion')
      .describe('Type of feedback'),
  },
  async ({ message, style, category }) => {
    trackEvent('feedback', { message, ...(style && { style }), category });
    return {
      content: [{
        type: 'text',
        text: 'Thank you! Your feedback has been recorded and will be reviewed by the designbrief maintainer.',
      }],
    };
  }
);

// ─── Start ──────────────────────────────────────────────────

const transport = new StdioServerTransport();
await server.connect(transport);
console.error(`designbrief MCP server v${pkg.version} running on stdio`);
