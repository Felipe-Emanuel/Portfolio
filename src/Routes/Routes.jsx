import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { useContext } from "react";

import { Page } from "../page";

import { AuthProvider, AuthContext } from "../contexts/Auth";

import { Login } from "../templates/Login/Login";
import { CreateAccount } from "../templates/Login/CreateAccount";
import { PageNotFound } from "../templates/PageNotFound/PageNotFound";
import { ArchitecturePage } from "../page/ArchitecturePage";

export function AllRoutes() {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
        return <div>Carregando...</div>
    }

    if (!authenticated) {
        return <Navigate to='/login' />
    }
    return children
  };

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route
            path="/architecturepage"
            element={
              <Private>
                <ArchitecturePage />
              </Private>
            }
          />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
