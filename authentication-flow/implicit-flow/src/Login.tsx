import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { makeLoginUrl } from "./utils";
import { AuthContext } from "./AuthProvider";

export function Login() {
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    if (!auth) {
      window.location.href = makeLoginUrl();
    }
  }, [auth]);

  return auth ? <Navigate to="/admin" /> : <div>Loading...</div>;
}
