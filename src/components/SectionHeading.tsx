type SectionHeadingProps = {
  children: React.ReactNode;
  color: "light" | "dark";
  align: "start" | "center" | "end";
  className?: string;
};

function SectionHeading({
  children,
  color,
  align,
  className,
}: SectionHeadingProps) {
  const textColor =
    color === "light"
      ? "text-content-light"
      : color === "dark" && "text-content-dark";
  const textAlign =
    align === "center"
      ? "text-center"
      : align === "start"
      ? "text-start"
      : align === "end" && "text-end";

  return (
    <div
      className={`${className} ${textColor} ${textAlign} font-extrabold text-7xlarge`}
    >
      {children}
    </div>
  );
}

export default SectionHeading;
