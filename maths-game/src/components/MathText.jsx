import { useMemo } from 'react';
import katex from 'katex';

function renderFormula(formula, displayMode = false) {
  try {
    return katex.renderToString(formula, { displayMode, throwOnError: false });
  } catch {
    return null;
  }
}

/**
 * MathText renders text with mathematical expressions.
 * It parses inline math delimited by $...$ or blocks $$...$$.
 */
export default function MathText({ text, className = '' }) {
  const renderedContent = useMemo(() => {
    if (text === null || text === undefined) return '';
    const str = String(text);

    // If string has $...$ or $$...$$ delimiters
    if (str.includes('$')) {
      const parts = str.split(/(\$\$[\s\S]+?\$\$|\$[\s\S]+?\$)/g);
      return parts.map((part, index) => {
        if (part.startsWith('$$') && part.endsWith('$$')) {
          const formula = part.slice(2, -2).trim();
          const html = renderFormula(formula, true);
          if (html) {
            return <span key={index} dangerouslySetInnerHTML={{ __html: html }} />;
          }
          return <span key={index}>{part}</span>;
        } else if (part.startsWith('$') && part.endsWith('$')) {
          const formula = part.slice(1, -1).trim();
          const html = renderFormula(formula, false);
          if (html) {
            return <span key={index} dangerouslySetInnerHTML={{ __html: html }} />;
          }
          return <span key={index}>{part}</span>;
        }
        return <span key={index}>{part}</span>;
      });
    }

    // Explicit LaTeX commands like \frac without $
    if (str.includes('\\')) {
      const html = renderFormula(str, false);
      if (html) {
        return <span dangerouslySetInnerHTML={{ __html: html }} />;
      }
      return <span>{str}</span>;
    }

    return <span>{str}</span>;
  }, [text]);

  return <span className={`math-text ${className}`}>{renderedContent}</span>;
}
