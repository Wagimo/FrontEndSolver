import { useEffect } from "react";
import { useThemeContext } from "@/context/themeContext/ThemeProvider";
import NavButton from "./NavButton";

import { AiOutlineMenu } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";

import Notification from "./Notification";
import UserProfile from "./UserProfile";
import Chat from "./Chat";
import avatar from "../data/avatar.jpg";

type Props = {};

const Navbar = (props: Props) => {
  const {
    currentColor,
    activeMenu,
    setActiveMenu,
    handleClick,
    setScreenSize,
    setThemeSettings,
    screenSize,
    themeState,
  } = useThemeContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="flex justify-between p-2 relative border-b-0">
      <NavButton
        title="Menu"
        color={currentColor}
        icon={<AiOutlineMenu />}
        customFunc={handleActiveMenu}
      />
      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => setThemeSettings(true)}
          color={currentColor}
          icon={<FiSettings />}
        />
        <NavButton
          title="Chat"
          dotColor="#03C9D7"
          customFunc={() => handleClick("chat", true)}
          color={currentColor}
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notification"
          dotColor="rgb(254, 201, 15)"
          customFunc={() => handleClick("notification", true)}
          color={currentColor}
          icon={<RiNotification3Line />}
        />

        <div
          className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
          onClick={() => handleClick("userProfile", true)}
        >
          <img
            className="rounded-full w-8 h-8"
            src={avatar}
            alt="user-profile"
          />
          <p>
            <span className="text-gray-400 text-14">Hi,</span>{" "}
            <span className="text-gray-400 font-bold ml-1 text-14">
              Michael
            </span>
          </p>
          <MdKeyboardArrowDown className="text-gray-400 text-14" />
        </div>
        {themeState.notification && <Notification />}
        {themeState.userProfile && <UserProfile />}
        {themeState.chat && <Chat />}
      </div>
    </div>
  );
};

export default Navbar;
