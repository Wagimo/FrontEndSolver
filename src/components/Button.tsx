import { useThemeContext } from "../context/themeContext/ThemeProvider";

type Props = {
  icon?: React.ReactElement;
  bgColor?: string;
  color?: string;
  bgHoverColor?: string;
  size?: string;
  text?: string;
  borderRadius?: string;
  width?: string;
  iconClicked: string;
  marginlr?: string;
  isOpen: boolean;
};

const Button = ({
  icon,
  bgColor,
  color,
  bgHoverColor,
  size,
  text,
  borderRadius,
  width,
  iconClicked,
  marginlr,
  isOpen,
}: Props) => {
  const { handleClick } = useThemeContext();

  return (
    <button
      type="button"
      onClick={() => handleClick(iconClicked, isOpen)}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`${marginlr} text-${size} p-3  ${width} hover:drop-shadow-xl hover:${bgHoverColor} flex items-center justify-evenly`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
