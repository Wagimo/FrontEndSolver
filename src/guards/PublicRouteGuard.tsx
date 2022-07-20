import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { AppStore } from "@/redux/store";
import { PublicRoutes } from "@/models";

export const PublicRouteGuard = (): JSX.Element => {
  //const userState = useSelector((state: AppStore) => state.user);
  return false ? <Outlet /> : <Navigate replace to={"/home"} />;
};

export default PublicRouteGuard;
