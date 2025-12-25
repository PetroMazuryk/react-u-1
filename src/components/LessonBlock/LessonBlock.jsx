import CodeBlock from "../CodeBlock/CodeBlock";
import InlineCode from "../InlineCode/InlineCode";

import styles from "./LessonBlock.module.css";

const LessonBlock = ({id, title, description, code, inlineCode, language}) => {
  return (
    <section className={styles.block}>
      <h3 className={styles.title}>
        <span className={styles.number}>{id}</span>
        {title}
      </h3>
      <p className={styles.description}>
        {description}{" "}
        {inlineCode && (
          <>
            <InlineCode>{inlineCode}</InlineCode>
          </>
        )}
      </p>
      <CodeBlock code={code} language={language} />
    </section>
  );
};

export default LessonBlock;
