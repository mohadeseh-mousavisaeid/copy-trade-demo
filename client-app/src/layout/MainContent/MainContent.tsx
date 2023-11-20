import { Outlet } from "react-router-dom";
import styles from "./mainContent.module.css";

const MainContent = () => {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  );
};

export default MainContent;
