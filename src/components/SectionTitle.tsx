type SectionTitleProps = {
  title: string;
  color: string;
  align: string;
};

function SectionTitle({ title, color, align }: SectionTitleProps) {
  return (
    <h2
      className={`h-fit ${
        color === "light" ? "text-content-light" : "text-content-dark"
      } ${
        align === "center" ? "text-center" : "text-start"
      } text-medium font-black uppercase tracking-widest`}
    >
      {title}
    </h2>
  );
}

export default SectionTitle;
