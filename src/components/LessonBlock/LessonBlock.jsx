import CodeBlock from "../CodeBlock/CodeBlock";
import styles from "./LessonBlock.module.css";

const LessonBlock = ({title, description, code}) => {
  return (
    <section className={styles.block}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <CodeBlock code={code} />
    </section>
  );
};

export default LessonBlock;
