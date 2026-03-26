import React from "react";
import styles from "./Header.module.css";
import Toggle from "./Toggle";
import logo from "./logo.svg";
const Header = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <img src={logo} alt="logo" style={{ width: "35px", height: "35px" }} />
      <h1 style={{ margin: 0 }}>GitSearch</h1>
    </div>
  );
};

export default Header;
