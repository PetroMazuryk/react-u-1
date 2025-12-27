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
    code,
    solution,
    language,
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
            ▶ Відео Youtube
          </a>
        )}
      </h3>

      {requirements && (
        <ul className={styles.requirements}>
          {requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      )}

      {description && <p className={styles.description}>{description}</p>}

      {inlineCode && (
        <p className={styles.inline}>
          Використовуй <InlineCode>{inlineCode}</InlineCode>
        </p>
      )}

      {code && <CodeBlock code={code} language={language} />}

      {solution && (
        <details className={styles.solution}>
          <summary>Показати рішення</summary>
          <CodeBlock code={solution} language={language} />
        </details>
      )}
    </section>
  );
};

export default LessonBlock;
