export const tasksJS = [
  {
    id: 1,
    link: "https://www.youtube.com/watch?v=OZPOO79Y4jk&t=4503s",
    title: "Реалізуй функцію resolve(promises).",
    requirements: [
      " Функція приймає масив промісів. Повертає новий Promise",
      " - Якщо хоча б один проміс виконався успішно — повернути його результат",
      "-  Якщо всі проміси завершились з reject — повернути reject з масивом усіх помилок",
    ],
    inlineCode: `<div>Hello Good day nommorow</div>
`,
    starterCode: `function resolve(promises) {}
console.log(Promise.resolve(1), Promise.resolve(2));
console.log(Promise.reject(3), Promise.resolve(4));
console.log(Promise.reject(5), Promise.reject(6));`,

    solution: `async function resolve(promises) {
  const results = await Promise.allSettled(promises);

  const fulfilled = results.find(r => r.status === 'fulfilled');
  if (fulfilled) {
    return fulfilled.value;
  }
  const errors = results
    .filter(r => r.status === 'rejected')
    .map(r => r.reason);

  // return Promise.reject(errors);
  throw errors;
  // throw results.filter(r => r.status === 'rejected').map(r => r.reason);
}
resolve([Promise.resolve(1), Promise.resolve(2)]).then(console.log); // 1
resolve([Promise.reject(3), Promise.resolve(4)]).then(console.log); // 4
resolve([Promise.reject(5), Promise.reject(6)]).catch(console.log); // [5, 6]`,
  },
  {
    id: 2,
    title: "https://www.youtube.com/watch?v=OZPOO79Y4jk&t=4503s",
    description: "Зробити щоб при рендері батька не ререндирився Child",
    starterCode: `interface CompProps{ }

function Child(onClick, value) { }

export function Comp(props: CompProps) {
    const onClick = () => { }
    const value = {
        num:'123'
    }
    return (
        <div>
    <Child value={value} onClick={onClick}/>
        </div>
    )
}`,
  },
];
