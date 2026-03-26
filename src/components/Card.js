import React from "react";
import styles from "./Card.module.css";

const Card = ({ user }) => {
  const date = new Date(user.created_at);

  const checkInfo = (value, fallback = "Not Available") => {
    return value ? (
      <span className={styles.available}>{value}</span>
    ) : (
      <span className={styles.notAvailable}>{fallback}</span>
    );
  };

  return (
    <div className={styles.card}>

      {/* 🖼️ AVATAR */}
      <div className={styles.avatarWrapper}>
        <img
          src={user.avatar_url}
          className={styles.avatar}
          alt="avatar"
        />
      </div>

      {/* 👤 NAME UNDER AVATAR */}
      <div className={styles.name}>
        <h2>{user.name || user.login}</h2>
        <p className={styles.username}>@{user.login}</p>

        <p className={styles.joined}>
          Joined{" "}
          {`${date.getDate()} ${date.toLocaleString("en-us", {
            month: "short",
          })} ${date.getFullYear()}`}
        </p>

        <a
          href={`https://github.com/${user.login}`}
          target="_blank"
          rel="noreferrer"
          className={styles.githubBtn}
        >
          View Profile
        </a>
      </div>

      {/* 📝 BIO */}
      <p className={styles.bio}>
        {user.bio || "This profile has no bio"}
      </p>

      {/* 📊 STATS */}
      <div className={styles.stats}>
        <div>
          <span>Repos</span>
          <h3>{user.public_repos}</h3>
        </div>
        <div>
          <span>Followers</span>
          <h3>{user.followers}</h3>
        </div>
        <div>
          <span>Following</span>
          <h3>{user.following}</h3>
        </div>
      </div>

      {/* 📍 CONTACT */}
      <div className={styles.contact}>
        <p>📍 {checkInfo(user.location)}</p>

        <p>
          🔗{" "}
          {user.blog ? (
            <a href={user.blog} target="_blank" rel="noreferrer">
              {user.blog}
            </a>
          ) : (
            checkInfo(null)
          )}
        </p>

        <p>🐦 {checkInfo(user.twitter_username)}</p>
        <p>🏢 {checkInfo(user.company)}</p>
      </div>

    </div>
  );
};

export default Card;