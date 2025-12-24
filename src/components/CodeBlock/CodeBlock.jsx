import {useEffect, useRef} from "react";
import Prism from "prismjs";
import styles from "./CodeBlock.module.css";

function CodeBlock({code, language = "javascript"}) {
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code]);

  return (
    <pre className={styles.pre}>
      <code ref={codeRef} className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
}

export default CodeBlock;
