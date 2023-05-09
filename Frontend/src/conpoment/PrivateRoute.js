import { Route, Navigate } from "react-router-dom";

export default function PrivateRoute({ element, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      element={authenticated ? element : <Navigate to="/login" />}
    />
  );
}
