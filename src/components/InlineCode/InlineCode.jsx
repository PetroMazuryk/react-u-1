import styles from "./InlineCode.module.css";

function InlineCode({children}) {
  return <span className={styles.code}>{children}</span>;
}

export default InlineCode;
