import CodeBlock from "../CodeBlock/CodeBlock";
import InlineCode from "../InlineCode/InlineCode";

import styles from "./LessonBlock.module.css";

const LessonBlock = ({task}) => {
  const {
    id,
    title,
    link,
    requirements,
    description,
    inlineCode,
    starterCode,
    solution,
    language = "javascript",
  } = task;

  return (
    <section className={styles.block}>
      <h3 className={styles.title}>
        <span className={styles.number}>{id}</span> {title}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            ▶ Відео YouTube
          </a>
        )}
      </h3>

      {requirements && (
        <ul className={styles.requirements}>
          {requirements.map((req) => (
            <li key={req}>{req}</li>
          ))}
        </ul>
      )}

      {inlineCode && (
        <p className={styles.inline}>
          <InlineCode>{inlineCode}</InlineCode>
        </p>
      )}

      {starterCode && <CodeBlock code={starterCode} language={language} />}

      {solution && (
        <details className={styles.solution}>
          <summary className={styles.summary}>Показати рішення</summary>
          <CodeBlock code={solution} language={language} />
          {description && <p className={styles.description}>{description}</p>}
        </details>
      )}
    </section>
  );
};

export default LessonBlock;
