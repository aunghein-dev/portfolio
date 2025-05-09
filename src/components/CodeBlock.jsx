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
    <div className="my-6 text-sm rounded overflow-hidden">
      <SyntaxHighlighter
        language={language}
        style={isDarkMode ? vscDarkPlus : prism}
        wrapLongLines
        customStyle={{
          borderRadius: "0.5rem",
          border: "1px solid var(--color-divider)",
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
