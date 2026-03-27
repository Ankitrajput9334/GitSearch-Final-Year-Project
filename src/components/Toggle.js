import React, { useState, useEffect } from "react";
import styles from "./Toggle.module.css";

const Toggle = () => {
  const [theme, setTheme] = useState("light"); // start with dark

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  const change = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className={styles.toggle}>
      <p className={styles[theme]}>{theme.toUpperCase()}</p>

      <input
        type="checkbox"
        id="toggle"
        onChange={change}
        checked={theme === "light"}
      />

      <label htmlFor="toggle"></label>
    </div>
  );
};

export default Toggle;