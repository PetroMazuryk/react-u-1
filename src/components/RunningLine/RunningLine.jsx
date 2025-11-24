import styles from "./RunningLine.module.css";

export const RunningLine = () => {
  return (
    <div className={styles.marquee}>
      <div className={styles.track}>
        <span>
          🚀 Вивчай React • 📚 Навчайся щодня • 💻 Розвивайся як розробник
          •{" "}
        </span>
        <span>
          🚀 Learn React • 📚 Learn every day • 💻 Grow as a developer
        </span>
        <span>
          🚀 Вивчай React • 📚 Навчайся щодня • 💻 Розвивайся як розробник
          •{" "}
        </span>
        <span>
          🚀 Learn React • 📚 Learn every day • 💻 Grow as a developer
        </span>
      </div>
    </div>
  );
};
