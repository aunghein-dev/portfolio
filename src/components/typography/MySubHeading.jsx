const MySubHeading = ({ children, color = "", className = "" }) => {
  return (
    <h2
      style={{ color }}
      className={`text-[1.4rem] 
                  leading-[1.7rem] 
                  saturate-200 brightness-110
                  font-[500] ${className}`}
    >
      {children}
    </h2>
  );
};

export default MySubHeading;
