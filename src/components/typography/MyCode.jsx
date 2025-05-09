const Code = ({ noBackticks = "", children }) => {
  const haveBackTicks = (children) =>
    noBackticks === "" ? `\`${children}\`` : `${children}`;
  return (
    <code className="inline-block px-1 py-0.5 bg-[var(--color-blockquote)] rounded-md text-sm font-mono text-[var(--color-paragraph)]">
      {haveBackTicks(children)}
    </code>
  );
};

export default Code;
