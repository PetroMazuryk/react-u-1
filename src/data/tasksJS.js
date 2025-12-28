export const tasksJS = [
  {
    id: 1,
    link: "https://www.youtube.com/watch?v=OZPOO79Y4jk&t=4503s",
    title: "Реалізуй функцію 'resolve' ",
    requirements: [
      "На вхід функції передається масив промісів, а на виході вона повертає новий проміс.",
      "Новий проміс працює за такими правилами:",
      "1) Якщо в масиві є хоча б один успішний проміс — повернути результат цього промісу.",
      "2) Якщо всі проміси завершуються з reject — повернути reject з масивом усіх помилок.",
    ],
    inlineCode: `Вихід: Кейс 1 — Promise => 5 ; Кейс 2 — Promise => Error(errors) ;`,
    starterCode: `function resolve(promises) {}
[(Promise.resolve(1), Promise.resolve(2)];
[(Promise.reject(3), Promise.resolve(4)];
[(Promise.reject(5), Promise.reject(6)];`,

    solution: `function resolve(promises) {
  return new Promise((resolve, reject) => {
    const errors = [];
    let rejectedCount = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(result => {
          resolve(result); // перший успішний — готово
        })
        .catch(error => {
          errors[index] = error;
          rejectedCount++;

          if (rejectedCount === promises.length) {
            reject(errors); // всі впали
          }
        });
    });
  });
}
resolve([Promise.resolve(1), Promise.resolve(2)]).then(console.log); // 1
resolve([Promise.reject(3), Promise.resolve(4)]).then(console.log); // 4
resolve([Promise.reject(5), Promise.reject(6)]).catch(console.log); // [5, 6]`,
    description: `Відразу викликає resolve при першому успішному промісі, навіть якщо інші
     проміси можуть виконатися пізніше. Це стандартна поведінка промісів, але треба пам’ятати.
    Масив errors зберігає помилки по індексу, що добре для порядку, але не обов’язково потрібно,
    можна просто робити errors.push(error).`,
  },
  {
    id: 3,
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
];
