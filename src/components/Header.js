import React from "react";
import styles from "./Header.module.css";
import Toggle from "./Toggle";

const Header = () => {
  return (
    <header className={styles.header}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img src={logo192} alt="logo" style={{ width: "40px", height: "40px" }} />
        <h1>GitSearch</h1>
      </div>
      <Toggle />
    </header>
  );
};

export default Header;
