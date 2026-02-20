import { parseStyle, StyleNotFoundError } from './parser.mjs';

// ─── Public API ─────────────────────────────────────────────

/**
 * Convert parseStyle() output to W3C DTCG format (2025.10 spec).
 * @param {object} parsed - Output from parseStyle()
 * @returns {object} DTCG JSON object
 */
export function generateDtcg(parsed) {
  const dtcg = {};

  // Colors
  const colorTokens = buildColorGroup(parsed.colors);
  if (colorTokens) dtcg.color = colorTokens;

  // Dark mode colors (only if real keyed entries, not _extracted fallback)
  if (Object.keys(parsed.darkColors).length > 0 && !parsed.darkColors._extracted) {
    const darkTokens = buildColorGroup(parsed.darkColors);
    if (darkTokens) dtcg.colorDark = darkTokens;
  }

  // Fonts
  const fontTokens = buildFontGroup(parsed.fonts);
  if (fontTokens) dtcg.font = fontTokens;

  // Border radius
  const radiusTokens = buildRadiusGroup(parsed.radii);
  if (radiusTokens) dtcg.borderRadius = radiusTokens;

  // Shadows
  const shadowTokens = buildShadowGroup(parsed.shadows);
  if (shadowTokens) dtcg.shadow = shadowTokens;

  // Transition durations
  const durationTokens = buildDurationGroup(parsed.transitions);
  if (durationTokens) dtcg.duration = durationTokens;

  return dtcg;
}

// ─── Group Builders ─────────────────────────────────────────

function buildColorGroup(colors) {
  const entries = Object.entries(colors).filter(([k]) => !k.startsWith('_'));
  if (entries.length === 0) return null;

  const group = { $type: 'color' };
  for (const [role, value] of entries) {
    group[role] = { $value: value };
  }
  return group;
}

function buildFontGroup(fonts) {
  const entries = Object.entries(fonts);
  if (entries.length === 0) return null;

  const group = {};
  for (const [role, stack] of entries) {
    group[role] = { $type: 'fontFamily', $value: stack };
  }
  return group;
}

function buildRadiusGroup(radii) {
  if (radii.length === 0) return null;

  const group = { $type: 'dimension' };
  if (radii.length === 1) {
    group.DEFAULT = { $value: radii[0] };
  } else {
    group.sm = { $value: radii[0] };
    group.DEFAULT = { $value: radii[Math.floor(radii.length / 2)] };
    group.lg = { $value: radii[radii.length - 1] };
  }
  return group;
}

function buildShadowGroup(shadows) {
  if (shadows.length === 0) return null;

  const group = {};
  let hasEntries = false;

  shadows.forEach((s, i) => {
    const parsed = parseShadowString(s);
    if (!parsed) return;
    const key = i === 0 ? 'DEFAULT' : 'lg';
    group[key] = {
      $type: 'shadow',
      $value: parsed,
    };
    hasEntries = true;
  });

  return hasEntries ? group : null;
}

function buildDurationGroup(transitions) {
  if (transitions.durations.length === 0) return null;

  const group = { $type: 'duration' };
  group.DEFAULT = { $value: transitions.durations[0] };

  if (transitions.easings.length > 0) {
    // Easings aren't a standard DTCG type, but useful to include
    group.easing = { $value: transitions.easings[0] };
  }

  return group;
}

// ─── Shadow Parser ──────────────────────────────────────────

/**
 * Parse a CSS box-shadow string into DTCG shadow value(s).
 * @param {string} shadowStr - e.g. "0 8px 32px rgba(0, 0, 0, 0.15)"
 * @returns {object|object[]|null} DTCG shadow value(s)
 */
export function parseShadowString(shadowStr) {
  if (!shadowStr || shadowStr === 'none') return null;

  const parts = splitShadowParts(shadowStr);
  const results = parts.map(p => parseSingleShadow(p.trim())).filter(Boolean);

  if (results.length === 0) return null;
  if (results.length === 1) return results[0];
  return results;
}

/**
 * Split composite shadows on commas NOT inside parentheses.
 */
function splitShadowParts(str) {
  const parts = [];
  let current = '';
  let depth = 0;

  for (const ch of str) {
    if (ch === '(') depth++;
    else if (ch === ')') depth--;
    else if (ch === ',' && depth === 0) {
      parts.push(current);
      current = '';
      continue;
    }
    current += ch;
  }
  if (current.trim()) parts.push(current);
  return parts;
}

/**
 * Parse a single shadow layer.
 * CSS grammar: [inset?] <offset-x> <offset-y> [<blur>] [<spread>] <color>
 */
function parseSingleShadow(str) {
  let s = str.trim();
  if (!s) return null;

  // Check for inset
  let inset = false;
  if (s.startsWith('inset ')) {
    inset = true;
    s = s.slice(6).trim();
  } else if (s.endsWith(' inset')) {
    inset = true;
    s = s.slice(0, -6).trim();
  }

  // Extract color (rgba/rgb function or hex)
  let color = '#000000';
  const rgbaMatch = s.match(/rgba?\([^)]+\)/);
  if (rgbaMatch) {
    color = rgbaMatch[0];
    s = s.replace(rgbaMatch[0], '').trim();
  } else {
    const hexMatch = s.match(/#[0-9A-Fa-f]{3,8}/);
    if (hexMatch) {
      color = hexMatch[0];
      s = s.replace(hexMatch[0], '').trim();
    }
  }

  // Skip shadows with var() references — can't resolve to concrete values
  if (s.includes('var(')) return null;

  // Remaining tokens are numeric lengths
  const tokens = s.split(/\s+/).filter(Boolean);
  if (tokens.length < 2) return null;

  const ensureUnit = (v) => v === '0' ? '0px' : v;

  const value = {
    offsetX: ensureUnit(tokens[0]),
    offsetY: ensureUnit(tokens[1]),
    blur: ensureUnit(tokens[2] || '0'),
    spread: ensureUnit(tokens[3] || '0'),
    color,
  };

  if (inset) {
    value.inset = true;
  }

  return value;
}
