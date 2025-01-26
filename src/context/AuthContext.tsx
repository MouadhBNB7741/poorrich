import { ReactNode } from "react";
import { authContext } from "./context";

const AuthContext = ({ children }: { children: ReactNode }) => {
  return <authContext.Provider value={{}}>{children}</authContext.Provider>;
};

export default AuthContext;
