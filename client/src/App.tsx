import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard.tsx";
import HomePage from "./pages/HomePage.tsx";
import PermissionsPage from "./pages/PermissionPage.tsx";
import RolesPage from "./pages/RolesPage.tsx";
import UserPage from "./pages/UserPage.tsx";
import SignInForm from "./pages/signIn.tsx";
export interface CustomAuth {
  auth: {
    user: {
      name: string;
      email: string;
      password: string;
      role: string;
    };
  };
}

function App() {
  const nav = useNavigate();

  const user = useSelector((state: CustomAuth) => state.auth.user);
  // console.log(user);
  useEffect(() => {
    const navigate = () => {
      if (user) {
        nav("/dashboard");
      }
    };
    navigate();
  });
  return (
    <>
      <Routes>
        {!user ? (
          <Route path="/" element={<SignInForm />} />
        ) : (
          <Route
            path="/dashboard"
            element={user?.role === "ADMIN" ? <Dashboard /> : <HomePage />}
          />
        )}
        <Route path="/dashboard/permissions" element={<PermissionsPage />} />
        <Route path="/dashboard/roles" element={<RolesPage />} />
        <Route path="/dashboard/users" element={<UserPage />} />
      </Routes>
    </>
  );
}
export default App;
