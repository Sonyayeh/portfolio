// Minimal dependency-free syntax highlighter.
// Good enough for showcasing code snippets — not a full parser.
// Supports: jsx/js/ts and css. Extend TOKEN_RULES if you need more languages.

const RULES = {
  jsx: [
    { type: 'comment', regex: /\/\/.*|\/\*[\s\S]*?\*\// },
    { type: 'string', regex: /`(?:\\.|[^`\\])*`|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/ },
    { type: 'tag', regex: /<\/?[A-Za-z][A-Za-z0-9.]*/ },
    { type: 'tag', regex: /\/?>/ },
    { type: 'attr', regex: /(?<=[a-zA-Z0-9])(?=[a-zA-Z-]+=)[a-zA-Z-]+(?=(=))/ },
    { type: 'keyword', regex: /\b(const|let|var|function|return|import|export|default|from|if|else|for|while|new|class|extends|this|null|true|false|async|await|of|in|typeof|as)\b/ },
    { type: 'number', regex: /\b\d+(\.\d+)?\b/ },
    { type: 'punct', regex: /[{}()[\];,.:]/ },
    { type: 'func', regex: /\b[a-zA-Z_$][\w$]*(?=\()/ },
  ],
  css: [
    { type: 'comment', regex: /\/\*[\s\S]*?\*\// },
    { type: 'string', regex: /"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/ },
    { type: 'selector', regex: /^[.#]?[\w-]+(?=\s*\{)/m },
    { type: 'property', regex: /[\w-]+(?=\s*:)/ },
    { type: 'number', regex: /-?\d+(\.\d+)?(px|rem|em|%|vh|vw|s|ms)?/ },
    { type: 'punct', regex: /[{}();:,]/ },
  ],
};

// Merge all rules for a language into one alternation regex, tagged by group name.
function buildMatcher(lang) {
  const rules = RULES[lang] || RULES.jsx;
  const parts = rules.map((r, i) => `(?<g${i}>${r.regex.source})`);
  return { regex: new RegExp(parts.join('|'), 'gm'), rules };
}

export function tokenize(code, lang = 'jsx') {
  const { regex, rules } = buildMatcher(lang);
  const tokens = [];
  let lastIndex = 0;
  let match;

  regex.lastIndex = 0;
  while ((match = regex.exec(code)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({ type: 'plain', text: code.slice(lastIndex, match.index) });
    }
    const groupIndex = Object.keys(match.groups).findIndex((k) => match.groups[k] !== undefined);
    tokens.push({ type: rules[groupIndex].type, text: match[0] });
    lastIndex = match.index + match[0].length;
    if (match[0].length === 0) regex.lastIndex++; // avoid infinite loop on zero-length matches
  }
  if (lastIndex < code.length) {
    tokens.push({ type: 'plain', text: code.slice(lastIndex) });
  }
  return tokens;
}