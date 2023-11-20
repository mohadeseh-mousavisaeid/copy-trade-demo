import styles from "./panel.module.css";
import { Outlet } from "react-router-dom";

const Panel = () => {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  );
};

export default Panel;
