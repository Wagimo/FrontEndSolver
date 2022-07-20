import { lazy, useEffect } from "react";
import { Route } from "react-router-dom";

import RoutesWithNotFound from "./RoutesWithNotFound";

import MainLayout from "@/pages/layout/MainLayout";
import { useThemeContext } from "@/context/themeContext/ThemeProvider";
import { linksDashBoard } from "@/data/dummy";

// const Users = lazy(() => import("@/pages/users/Users"));
// const Invoice = lazy(() => import("@/pages/vouchers/Invoice"));
const DashBoard = lazy(() => import("@/pages/dashboard/DashBoard"));

const DashBoardRouter = () => {
  const { setMenuOptions } = useThemeContext();

  useEffect(() => {
    setMenuOptions(linksDashBoard);
  }, []);

  return (
    <MainLayout>
      <RoutesWithNotFound>
        <Route path="/" element={<DashBoard />} />
        {/* <Route path="/invoices" element={<Invoice />} />
        <Route path="/users" element={<Users />} /> */}
      </RoutesWithNotFound>
    </MainLayout>
  );
};

export default DashBoardRouter;
