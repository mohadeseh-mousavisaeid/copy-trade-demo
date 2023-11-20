import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "../../components/compositions/ResponsiveAppBar/ResponsiveAppBar";
import styles from "./layout.module.css";

type Props = {
  mode: "panel" | "default";
};

const Layout = () => {
  return (
    <div className={styles.container}>
      <ResponsiveAppBar />
      <div className={styles.innerContainer}>
        {/* {mode === "panel" && <Dashboard />} */}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
