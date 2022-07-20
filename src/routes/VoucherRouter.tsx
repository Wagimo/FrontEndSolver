import { lazy, useEffect } from "react";
import RoutesWithNotFound from "./RoutesWithNotFound";
import { Route, useLocation } from "react-router-dom";
import { linksVoucher } from "@/data/dummy";
import { useThemeContext } from "@/context/themeContext/ThemeProvider";
import MainLayout from "@/pages/layout/MainLayout";

const Voucher = lazy(() => import("@/pages/vouchers/Voucher"));
const VoucherEdit = lazy(() => import("@/pages/vouchers/VoucherEdit"));
const VoucherPreview = lazy(() => import("@/pages/vouchers/VoucherPreview"));

const VoucherRouter = () => {
  const { setMenuOptions } = useThemeContext();

  const { pathname } = useLocation();

  useEffect(() => {
    const menuOptions = linksVoucher.map((item) => {
      return {
        title: item.title,
        links: item.links.map((link) => {
          let op;
          if (link.url == "dashboard") {
            op = link.url;
          } else if (link.url == "main") {
            op = pathname.slice(1);
          } else {
            op = `${pathname.slice(1)}/${link.url}`;
          }
          return {
            name: link.name,
            url: op,
            icon: link.icon,
          };
        }),
      };
    });
    setMenuOptions(menuOptions);
  }, []);

  return (
    <MainLayout>
      <RoutesWithNotFound>
        <Route path=":id" element={<Voucher />}>
          <Route index element={<VoucherEdit />} />
          <Route path="preview" element={<VoucherPreview />} />
        </Route>
      </RoutesWithNotFound>
    </MainLayout>
  );
};

export default VoucherRouter;
