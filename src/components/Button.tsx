import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  isPrimary?: boolean;
  href?: string;
  onClick?: () => void;
  className?: string;
};

function Button({
  children,
  isPrimary,
  href,
  onClick,
  className,
}: ButtonProps) {
  const baseStyles =
    "group flex items-center gap-xs text-content-dark rounded-md cursor-pointer";
  const primaryButtonStyles =
    "relative w-fit p-xs font-extrabold text-xlarge bg-accent-secondary hover:bg-accent-primary transition-colors duration-slower";

  const handleButtonClick = () => {
    onClick?.();
  };

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseStyles} ${
          isPrimary && primaryButtonStyles
        } ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick ? () => handleButtonClick() : undefined}
      className={`${baseStyles} ${
        isPrimary ? primaryButtonStyles : className
      } `}
    >
      {children}
    </button>
  );
}

export default Button;
