import CodeBlock from "../components/CodeBlock/CodeBlock";

const ToDoPage = () => {
  return (
    <>
      <div style={{outline: "1px solid gray", padding: "6px"}}>
        Назва блоку: <CodeBlock code={`<div>Hello</div>`} />
      </div>
      <CodeBlock code={`<div>Hello</div>`} />
    </>
  );
};

export default ToDoPage;
