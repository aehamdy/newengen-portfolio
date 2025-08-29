type ButtonProps = {
  children: React.ReactNode;
  isPrimary?: boolean;
  onClick?: () => void;
  className?: string;
};

function Button({ children, isPrimary, onClick, className }: ButtonProps) {
  const primaryButtonStyles =
    "relative w-fit p-xs font-extrabold text-xlarge bg-accent-secondary hover:bg-accent-primary transition-colors duration-slower";

  const handleButtonClick = () => {
    onClick?.();
  };

  return (
    <button
      type="button"
      onClick={onClick ? () => handleButtonClick() : undefined}
      className={`group flex items-center gap-xs ${
        isPrimary ? primaryButtonStyles : className
      } text-content-dark rounded-md cursor-pointer`}
    >
      {children}
    </button>
  );
}

export default Button;
