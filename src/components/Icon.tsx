import {
  IoArrowForward,
  IoChevronDown,
  IoChevronForward,
  IoClose,
  IoMenu,
} from "react-icons/io5";

type IconName =
  | "menu"
  | "close"
  | "arrow-right"
  | "chevron-right"
  | "chevron-down"
  | "arrows-down";

const iconMap = {
  menu: IoMenu,
  close: IoClose,
  "arrow-right": IoArrowForward,
  "chevron-right": IoChevronForward,
  "chevron-down": IoChevronDown,
  "arrows-down": ArrowsDown,
};

interface IconProps {
  name: IconName;
  size?: number | string;
  className?: string;
}

function Icon({ name, size = 21, className = "flex items-center" }: IconProps) {
  const IconComponent = iconMap[name];

  return <IconComponent size={size} className={className} />;
}

export default Icon;

function ArrowsDown() {
  return (
    <svg
      className="h-10 w-auto"
      viewBox="0 0 20 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="scroll-icon__part"
        d="M17.6626 53L9.56124 60.8313L1.99997 53"
        stroke="#CCE561"
        strokeWidth="4"
      ></path>
      <path
        className="scroll-icon__part"
        d="M17.6626 36L9.56124 43.8313L1.99997 36"
        stroke="#CCE561"
        strokeWidth="4"
      ></path>
      <path
        className="scroll-icon__part"
        d="M17.6626 19.1687L9.56124 27L1.99997 19.1687"
        stroke="#CCE561"
        strokeWidth="4"
      ></path>
      <path
        className="scroll-icon__part"
        d="M17.6626 1.99999L9.56124 9.8313L1.99997 1.99998"
        stroke="#CCE561"
        strokeWidth="4"
      ></path>
    </svg>
  );
}
