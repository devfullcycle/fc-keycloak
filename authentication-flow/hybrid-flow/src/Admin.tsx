import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

export function Admin() {
  const { auth } = useContext(AuthContext);

  return (
    <div>
      <h1>Admin</h1>
      <pre>{JSON.stringify(auth)}</pre>
    </div>
  );
}
