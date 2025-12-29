// const NewsPage = () => {
//   return (
//     <>
//       <div>NewsPage</div>
//     </>
//   );
// };

// export default NewsPage;
import React, { useCallback, useMemo } from 'react';

interface CompProps {
  title: string;
}


interface ChildProps {
  onClick: () => void;
  value: { num: string };
}

const Child: React.FC<ChildProps> = React.memo(({ onClick, value }) => {
  console.log('Child render');
  return (
    <div>
      <button onClick={onClick}>{value.num}</button>
    </div>
  );
});

export function NewsPage({ title }: CompProps) {
 const [count, setCount] = React.useState(0);
 
  const onClick = useCallback(() => {
    console.log('Clicked in Child');
  }, []);

  const value = useMemo(() => ({ num: '123' }), []);
  console.log('Parent render');

  return (
    <>
        <h1>{title}</h1>
      <button onClick={() => setCount(c => c + 1)}>
        Parent + {count}
      </button>

      <Child value={value} onClick={onClick} />
    </>
  );
}

export default NewsPage;