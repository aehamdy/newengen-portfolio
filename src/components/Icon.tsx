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
  | "arrowRight"
  | "chevronRight"
  | "chevronDown";

const iconMap = {
  menu: IoMenu,
  close: IoClose,
  arrowRight: IoArrowForward,
  chevronRight: IoChevronForward,
  chevronDown: IoChevronDown,
};

interface IconProps {
  name: IconName;
  size?: number | string;
  className?: string;
}

function Icon({ name, size = 21, className = "" }: IconProps) {
  const IconComponent = iconMap[name];

  return <IconComponent size={size} className={className} />;
}

export default Icon;
