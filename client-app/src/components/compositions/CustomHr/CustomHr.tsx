import React from "react";
import styles from "./customHr.module.css";

type Prop = {
  text?: string;
};

const CustomHr = ({ text }: Prop) => {
  return (
    <div className={styles.container}>
      <span className={styles.badge}>{text}</span>
      <div className={styles.hr}></div>
    </div>
  );
};

export default CustomHr;
