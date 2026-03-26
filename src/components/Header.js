import React from "react";
import styles from "./Header.module.css";
import Toggle from "./Toggle";
import logo from "./logo.svg";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="GitSearch logo" className={styles.logo} />
        <h1>GitSearch</h1>
      </div>
      <Toggle />
    </header>
  );
};

export default Header;
