import React from 'react';
import katex from 'katex';

interface MathViewProps {
  tex: string;
  display?: boolean;
  className?: string;
}

export const MathView: React.FC<MathViewProps> = ({ tex, display = false, className = '' }) => {
  try {
    const html = katex.renderToString(tex, {
      displayMode: display,
      throwOnError: false,
    });
    return (
      <span
        className={`math-content ${display ? 'block my-2 overflow-x-auto py-1' : 'inline-block px-0.5'} ${className}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  } catch {
    return <span className="font-mono text-xs text-rose-500">{tex}</span>;
  }
};

/**
 * Renders inline text with support for **bold** markup and newlines.
 */
const renderRichText = (text: string) => {
  const boldRegex = /(\*\*[\s\S]*?\*\*)/g;
  const parts = text.split(boldRegex);

  return parts.map((part, idx) => {
    if (part.startsWith('**') && part.endsWith('**') && part.length >= 4) {
      return (
        <strong key={idx} className="font-bold text-slate-900 dark:text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    const lines = part.split('\n');
    return (
      <React.Fragment key={idx}>
        {lines.map((line, lIdx) => (
          <React.Fragment key={lIdx}>
            {line}
            {lIdx < lines.length - 1 && <br />}
          </React.Fragment>
        ))}
      </React.Fragment>
    );
  });
};

/**
 * Parses a string containing LaTeX markers ($...$ for inline, $$...$$ for block)
 * and renders formatted text with KaTeX components.
 */
export const FormattedMathText: React.FC<{ text: string; className?: string }> = ({
  text,
  className = '',
}) => {
  if (!text) return null;

  // Split by $$...$$ or $...$
  const regex = /(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$)/g;
  const parts = text.split(regex);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        if (!part) return null;

        if (part.startsWith('$$') && part.endsWith('$$')) {
          const formula = part.slice(2, -2).trim();
          return <MathView key={index} tex={formula} display={true} />;
        } else if (part.startsWith('$') && part.endsWith('$')) {
          const formula = part.slice(1, -1).trim();
          return <MathView key={index} tex={formula} display={false} />;
        } else {
          return <React.Fragment key={index}>{renderRichText(part)}</React.Fragment>;
        }
      })}
    </span>
  );
};
