import CodeBlock from "../components/CodeBlock/CodeBlock";
import LessonBlock from "../components/LessonBlock/LessonBlock";
import {guideContent} from "../data/guideContent";

const ToDoPage = () => {
  return (
    <>
      <div style={{outline: "1px solid gray", padding: "6px"}}>
        Назва блоку: <CodeBlock code={`<div>Hello</div>`} />
      </div>
      <div style={{outline: "1px solid gray", padding: "6px"}}>
        Назва блоку: <CodeBlock code={`<div>Good day</div>`} />
      </div>
      <h2 style={{margin: 2}}>Посібник з HTML</h2>

      {guideContent.map((lesson) => (
        <LessonBlock
          key={lesson.id}
          title={lesson.title}
          description={lesson.description}
          code={lesson.code}
        />
      ))}
    </>
  );
};

export default ToDoPage;
