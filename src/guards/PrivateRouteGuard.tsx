import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { AppStore } from "@/redux/store";

const PrivateRouteGuard = (): JSX.Element => {
  const userState = useSelector((state: AppStore) => state.user);
  const { token } = userState;

  return !token ? <Outlet /> : <Navigate replace to={"/unautorized"} />;
};

export default PrivateRouteGuard;
