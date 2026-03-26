import search from "../images/icon-search.svg";
import React, { useRef } from "react";
import styles from "./Input.module.css";

const Input = (props) => {
  const choice = useRef("");

  const searchUserHandler = (e) => {
    e.preventDefault();
    props.changeUser(choice.current.value);
    choice.current.value = "";
  };

  return (
    <form className={styles.form} onSubmit={searchUserHandler}>

      <div className={styles.inputWrapper}>
        <img src={search} alt="search icon" className={styles.icon} />

        <input
          type="text"
          ref={choice}
          placeholder="Search GitHub username..."
          className={styles.input}
        />

        <button type="submit" className={styles.button}>
          Search
        </button>
      </div>

      {props.error && <p className={styles.error}>{props.error}</p>}

    </form>
  );
};

export default Input;