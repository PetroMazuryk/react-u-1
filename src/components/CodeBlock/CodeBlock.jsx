import styles from "./CodeBlock.module.css";

function CodeBlock({code}) {
  return (
    <pre className={styles.pre}>
      <code className={styles.code}>{code}</code>
    </pre>
  );
}

export default CodeBlock;
