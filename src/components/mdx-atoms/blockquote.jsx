const Blockquote = ({ children }) => {
  return (
    <blockquote
      className="border border-dashed 
                 border-[var(--color-border-blockquote)] 
                 rounded-lg p-4 my-6 ]
                 bg-[var(--color-blockquote)]"
    >
      {children}
    </blockquote>
  );
};

export default Blockquote;
