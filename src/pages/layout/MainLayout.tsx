import { useContext, useEffect } from "react";
import { ThemeContext } from "@/context/themeContext/ThemeContext";
import Sidebar from "@/components/Sidebar";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeSettings from "@/components/ThemeSettings";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const MainLayout = ({ children }: Props) => {
  const { setCurrentMode, setCurrentColor, activeMenu, themeSettings } =
    useContext(ThemeContext);

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className="flex relative dark:bg-main-dark-bg">
      {activeMenu ? (
        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white z-40 shadow">
          <Sidebar />
        </div>
      ) : (
        <div className="w-0 dark:bg-secondary-dark-bg  z-50">
          <Sidebar />
        </div>
      )}
      <div
        className={
          activeMenu
            ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
            : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
        }
      >
        <div
          className={
            activeMenu
              ? "fixed md:fixed md:w-11/12 bg-white dark:bg-main-dark-bg navbar w-full z-10 md:pr-32"
              : "fixed md:fixed md:w-screen bg-white dark:bg-main-dark-bg navbar w-full z-10 "
          }
        >
          <NavBar />
        </div>
        <div className="  overflow-auto">
          {themeSettings && <ThemeSettings />}
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
