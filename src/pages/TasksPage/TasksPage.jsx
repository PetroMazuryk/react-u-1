import LessonBlock from "../../components/LessonBlock/LessonBlock";
import {tasksJS} from "../../data/tasksJS";

import styles from "./TasksPage.module.css";

const TasksPage = () => {
  return (
    <main style={{padding: "16px"}}>
      <h2 className={styles.title}>Задачі JS</h2>

      {tasksJS.map(({id, title, description, code, inlineCode, language}) => (
        <LessonBlock
          key={id}
          title={title}
          description={description}
          code={code}
          inlineCode={inlineCode}
          language={language}
        />
      ))}
    </main>
  );
};

export default TasksPage;
