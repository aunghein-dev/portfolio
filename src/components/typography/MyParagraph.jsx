const MyParagraph = ({ children }) => {
  return (
    <div
      className="text-[var(--color-paragraph)]
              text-[0.95rem] leading-[1.7rem]
              font-[300]"
    >
      {children}
    </div>
  );
};

export default MyParagraph;
