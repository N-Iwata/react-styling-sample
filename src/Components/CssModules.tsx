import React from "react";
import styles from "./CssModules.module.scss";

const CssModules: React.VFC = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>CSS Modules</p>
      <button className={styles.button}>PUSH!!</button>
    </div>
  );
};

export default CssModules;
