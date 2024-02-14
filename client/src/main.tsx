import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard.tsx";
import SignInForm from "./pages/signIn.tsx";
import PermissionsPage from "./pages/PermissionPage.tsx";
import RolesPage from "./pages/RolesPage.tsx";
import UserPage from "./pages/UserPage.tsx";
import store from "./Store/store.ts";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/permissions" element={<PermissionsPage />} />
          <Route path="/dashboard/roles" element={<RolesPage />} />
          <Route path="/dashboard/users" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
