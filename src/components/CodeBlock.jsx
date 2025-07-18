import React, { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({ className, children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const checkDarkClass = () => {
      setIsDarkMode(html.classList.contains("dark"));
    };

    checkDarkClass();

    // Optional: observe DOM class changes for dynamic theme switching
    const observer = new MutationObserver(checkDarkClass);
    observer.observe(html, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  const language = className?.replace("language-", "") || "javascript" || "sql";

  return (
    <div
      className="my-6 text-sm rounded-[10px] overflow-hidden border"
      style={{ borderColor: "var(--color-divider)" }}
    >
      {language && (
        <div
          style={{
            background: isDarkMode ? "#1e1e1e" : "#f4f4f4",
            color: "[var(--color-tertiary-txt)]",
            padding: "0.5rem 1rem",
            fontSize: "0.85rem",
            borderBottom: "1px solid var(--color-divider)",
          }}
        >
          {language}
        </div>
      )}
      <SyntaxHighlighter
        language={language}
        style={isDarkMode ? vscDarkPlus : prism}
        wrapLongLines
        customStyle={{
          margin: 0,
          border: "none",
          borderRadius: 0,
          padding: "1rem",
        }}
        codeTagProps={{
          style: { fontSize: "0.9rem", lineHeight: "1.6rem" },
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
