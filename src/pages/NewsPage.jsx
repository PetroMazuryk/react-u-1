// const NewsPage = () => {
//   return (
//     <>
//       <div>NewsPage</div>
//     </>
//   );
// };

// export default NewsPage;
// import React, { useCallback, useMemo } from 'react';

// interface CompProps {
//   title: string;
// }

// interface ChildProps {
//   onClick: () => void;
//   value: { num: string };
// }

// const Child: React.FC<ChildProps> = React.memo(({ onClick, value }) => {
//   console.log('Child render');
//   return (
//     <div>
//       <button onClick={onClick}>{value.num}</button>
//     </div>
//   );
// });
// import React, {useState} from "react";

// const initList = () => {
//   return Array.from({length: 200}, (_el, index) => ({
//     value: Math.random(),
//     label: `row ${index + 1}`,
//   }));
// };
// export function NewsPage() {
//   const [list] = useState(initList);

//   const handleUpdate = () => {
//     list[0].value = Math.random();
//   };

//   return (
//     <>
//       <h1>List News Page</h1>
//       <Button onClick={handleUpdate}>Update " row 1 "</Button>
//       {list.map(({label, value}) => (
//         <Row label={value} value={value} />
//       ))}
//     </>
//   );
// }

// function Button(props) {
//   const {children, onClick} = props;
//   return <button onClick={onClick}>{children}</button>;
// }

// function Row(props) {
//   const {label, value} = props;
//   return (
//     <div style={{marginTop: 8}}>
//       <span style={{marginRight: 20}}>{label}</span>
//       <span>{value}</span>
//     </div>
//   );
// }

// export default NewsPage;
import {useState, memo} from "react";

const initList = () =>
  Array.from({length: 10}, (_el, index) => ({
    value: Math.random(),
    label: "row " + (index + 1),
  }));

export function NewsPage() {
  const [list, setList] = useState(initList);

  const handleUpdate = () => {
    setList((prev) =>
      prev.map((item, index) =>
        index === 0 ? {...item, value: Math.random()} : item,
      ),
    );
  };

  return (
    <>
      <h1>List News Page</h1>
      <Button onClick={handleUpdate}>Update "row 1"</Button>

      {list.map(({label, value}) => (
        <Row key={label} label={label} value={value} />
      ))}
    </>
  );
}

function Button(props) {
  const {children, onClick} = props;
  return <button onClick={onClick}>{children}</button>;
}

function Row(props) {
  const {label, value} = props;
  return (
    <div style={{marginTop: 8}}>
      <span style={{marginRight: 20}}>{label}</span>
      <span>{value}</span>
    </div>
  );
}

// const Row = memo(function (props) {
//   const {label, value} = props;
//   return (
//     <div style={{marginTop: 8}}>
//       <span style={{marginRight: 20}}>{label}</span>
//       <span>{value}</span>
//     </div>
//   );
// });

export default NewsPage;
