import { useThemeContext } from "../context/themeContext/ThemeProvider";

type Props = {
  icon?: React.ReactElement;
  color?: string;
  size?: string;
  text?: string;
  width?: string;
  iconClicked: string;
  marginlr?: string;
  isOpen: boolean;
};

const LinkComponent = ({
  icon,
  color,
  size,
  text,
  width,
  iconClicked,
  marginlr,
  isOpen,
}: Props) => {
  const { handleClick } = useThemeContext();

  return (
    <a
      href="#"
      style={{ color, fontSize: size }}
      onClick={() => handleClick(iconClicked, isOpen)}
      className={`${marginlr}  ${width} hover:drop-shadow-xl hover:font-bold flex items-center justify-evenly`}
    >
      {icon} {text}
    </a>
  );
};

export default LinkComponent;
