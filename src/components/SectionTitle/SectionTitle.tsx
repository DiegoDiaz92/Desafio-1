import "./SectionTitle.css";

interface SectionTitleProps {
  subtitle: string;
  title: string;
  align?: "left" | "center";
}

function SectionTitle({
  subtitle,
  title,
  align = "left",
}: SectionTitleProps) {
  return (
    <div className={`section-title section-title--${align}`}>
      <span>{subtitle}</span>

      <h2>{title}</h2>
    </div>
  );
}

export default SectionTitle;