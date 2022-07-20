import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRouteGuard from "@/guards/PrivateRouteGuard";
import DashBoardRouter from "./DashBoardRouter";
import LoaderComponent from "@/components/LoaderComponent";
import VoucherRouter from "./VoucherRouter";

const UnAuthorized = lazy(() => import("@/pages/authorize/UnAuthorized"));
const NotFound = lazy(() => import("@/pages/notFound/NotFound"));

const AppRouter = () => {
  return (
    <Suspense fallback={<LoaderComponent />}>
      <Routes>
        <Route path="/" element={<Navigate to="dashboard" />} />
        <Route path="*" element={<NotFound />} />
        <Route path="unautorized" element={<UnAuthorized />} />
        <Route element={<PrivateRouteGuard />}>
          <Route path="dashboard/*" element={<DashBoardRouter />} />
          <Route path="voucher/*" element={<VoucherRouter />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
