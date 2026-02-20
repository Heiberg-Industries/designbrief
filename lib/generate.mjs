import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { parseStyle, StyleNotFoundError } from './parser.mjs';
import { generateDtcg } from './dtcg.mjs';
import { generateCss } from './css.mjs';
import { handleGetTailwindConfig } from './tailwind.mjs';

/**
 * Generate token files and write them to disk.
 * @param {object} opts
 * @param {string} opts.style - Style name
 * @param {string} opts.format - 'dtcg' | 'css' | 'tailwind' | 'all'
 * @param {string} opts.outDir - Output directory
 * @returns {Promise<{files: Array<{file: string, label: string}>}>}
 */
export async function handleGenerate({ style, format, outDir }) {
  const parsed = await parseStyle(style);

  if (parsed.isFreeform) {
    return { freeform: true, files: [] };
  }

  mkdirSync(outDir, { recursive: true });

  const formats = format === 'all' ? ['dtcg', 'css', 'tailwind'] : [format];
  const files = [];

  for (const fmt of formats) {
    switch (fmt) {
      case 'dtcg': {
        const dtcg = generateDtcg(parsed);
        const file = `${style}.tokens.json`;
        writeFileSync(join(outDir, file), JSON.stringify(dtcg, null, 2) + '\n');
        files.push({ file, label: 'W3C DTCG' });
        break;
      }
      case 'css': {
        const css = generateCss(parsed);
        const file = `${style}.css`;
        writeFileSync(join(outDir, file), css);
        files.push({ file, label: 'CSS Custom Properties' });
        break;
      }
      case 'tailwind': {
        const result = await handleGetTailwindConfig({ style, mode: 'both' });
        const text = result.content[0].text;
        const file = `${style}.tailwind.config.ts`;
        writeFileSync(join(outDir, file), text + '\n');
        files.push({ file, label: 'Tailwind Config' });
        break;
      }
    }
  }

  return { freeform: false, files };
}
