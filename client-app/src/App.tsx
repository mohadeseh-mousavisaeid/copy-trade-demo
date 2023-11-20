import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout/Layout";
import MainContent from "./layout/MainContent/MainContent";
import Login from "./pages/Login/Login";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";
import ProtectedRoutes from "./components/compositions/ProtectedRoutes/ProtectedRoutes";
import Register from "./pages/Register/Register";
import Panel from "../src/pages/Panel/Panel";
import AuthenticatedUserGate from "./components/compositions/AuthenticatedUserGate/AuthenticatedUserGate";
import MyAssets from "./components/compositions/Dashboard/Assets/MyAssets/MyAssets";
import Assets from "./components/compositions/Dashboard/Assets/Assets";
import Account from "./components/compositions/Dashboard/Account/Account";
import AccountSecurity from "./components/compositions/Dashboard/Account/AccountSecurity/AccountSecurity";
import Preferences from "./components/compositions/Dashboard/Account/Preferences/Preferences";
import NotFound from "./pages/NotFound/NotFound";
import CopyTrading from "./pages/CopyTrading/CopyTrading";
import TraderProfile from "./pages/TraderProfile/TraderProfile";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const client = new QueryClient();
function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={client}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<MainContent />}>
              <Route index element={<CopyTrading />} />
              <Route
                path="/trader-profile/:traderID"
                element={<TraderProfile />}
              />
              <Route
                path="panel"
                element={
                  <ProtectedRoutes>
                    <Panel />
                  </ProtectedRoutes>
                }
              >
                <Route path="assets" element={<Assets />}>
                  <Route index element={<MyAssets />} />
                  <Route path="pref" element={<Preferences />} />
                </Route>

                <Route path="account" element={<Account />}>
                  <Route path="security/" element={<AccountSecurity />} />
                </Route>

                <Route index element={<NotFound />} />
                <Route path="*" element={<NotFound />} />
              </Route>
              <Route
                path="login"
                element={
                  <AuthenticatedUserGate>
                    <Login />
                  </AuthenticatedUserGate>
                }
              />
              <Route
                path="register"
                element={
                  <AuthenticatedUserGate>
                    <Register />
                  </AuthenticatedUserGate>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Route>

          {/* <Route path="/market" element={} /> */}
        </Routes>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
