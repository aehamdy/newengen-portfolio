type ButtonProps = {
  children: React.ReactNode;
  isPrimary: boolean;
  onClick?: () => void;
  className?: string;
};

function Button({ children, isPrimary, onClick, className }: ButtonProps) {
  const primaryButtonStyles =
    "relative w-fit p-xs font-bold text-large bg-accent-secondary hover:bg-accent-primary transition-colors duration-normal";

  const handleButtonClick = () => {
    onClick?.();
  };

  return (
    <button
      type="button"
      onClick={onClick ? () => handleButtonClick() : undefined}
      className={`${
        isPrimary ? primaryButtonStyles : className
      } text-content-dark rounded-sm cursor-pointer`}
    >
      {children}
    </button>
  );
}

export default Button;
