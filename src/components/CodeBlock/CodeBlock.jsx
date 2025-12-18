import styles from "./CodeBlock.module.css";

function CodeBlock({html}) {
  return (
    <pre className={styles.pre}>
      <code className={styles.code}>{html}</code>
    </pre>
  );
}

export default CodeBlock;
