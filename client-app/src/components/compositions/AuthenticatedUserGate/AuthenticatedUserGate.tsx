import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RootState } from "store/store";

type Props = {
  children: ReactNode;
};

const AuthenticatedUserGate = ({ children }: Props) => {
  const isAuth = useSelector((state: RootState) => state.user.isAuth);
  const location = useLocation();

  if (isAuth) {
    return <Navigate to={"/"} state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default AuthenticatedUserGate;
