export const tasksJS = [
  {
    id: 1,
    link: "https://www.youtube.com/watch?v=OZPOO79Y4jk&t=4503s",
    title: "Реалізуй функцію 'resolve' [ 55:20 ]",
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
    id: 2,
    link: "https://www.youtube.com/watch?v=OZPOO79Y4jk&t=4503s",
    title: "Реалізуй функцію 'resolve': Варіант 2 ",
    requirements: [
      "Сучасний і компактний варіант цієї функції через async/await.",
      "Він робить те ж саме, але код читати легше:",
    ],

    solution: `async function resolve(promises) {
  if (promises.length === 0) {
    return Promise.reject([]); // порожній масив
  }
  const results = await Promise.allSettled(promises);

  // шукаємо перший успішний проміс
  const fulfilled = results.find(r => r.status === 'fulfilled');
  if (fulfilled) {
    return fulfilled.value;
    }
    
  // якщо всі проміси відхилилися
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
    id: 3,
    link: "https://www.youtube.com/watch?v=OZPOO79Y4jk&t=4503s",
    title: "Дано масив цілих натуральних чисел [ 1:07:00 ]",
    requirements: [
      "Потрібно згрупувати між собою числа ,",
      "які можна отримати шляхом перестановки їхніх цифр.",
      "Тобто всі числа в числі одиникові просто переставлені по різному.",
    ],
    starterCode: `function digitPermutation(arr) {
  // your code here
}
console.clear();
console.log('start test');
console.log(
  digitPermutation([1230, 199, 2301, 1230, 110001, 3021, 101010, 991, 9]);
  // Очікувано: [[9],[199,991],[1230,2301,1230,3021],[110001,101010]]
);
console.log(digitPermutation([11], [22])); // [[11],[22]]
console.log(digitPermutation([11, 11, 11])); // [[11,11,11]]
console.log(digitPermutation([111111111112], [122222222222])); //[[1222222222],[111111111112]]
console.log('end test');`,
    solution: `function digitPermutation(arr) {
  const map = new Map();

  arr.forEach(num => {
    // Перетворюємо число на рядок, сортуємо цифри та отримуємо ключ
    const key = String(num).split('').sort().join('');
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(num);
  });

  // Збираємо результат: лише групи з більше ніж одного числа
  const result = [];
  for (const group of map.values()) {
    if (group.length > 1) {
      result.push(group);
    }
  }

  return result;
}

// Приклади
console.clear();
console.log('start test');
console.log(digitPermutation([1230, 199, 2301, 1230, 110001, 3021, 101010, 991, 9]));
// Очікувано: [[1230, 2301, 1230], [199, 991], [110001, 101010], [9]]
console.log(digitPermutation([11, 22])); // [[11],[22]]
console.log(digitPermutation([11, 11, 11]));// [[11, 11, 11]]
console.log(digitPermutation([111111111112, 1222222222])); // [[111111111112], [1222222222]]
console.log('end test');
`,
    description: `Для кожного числа створюється ключ із відсортованих цифр.
Map зберігає всі числа з однаковим ключем в масиві.
Всі масиви (групи) повертаються як результат.
✅ Таким чином, навіть одиничні числа (що не мають перестановок) потрапляють
у групу по одному.`,
  },
  {
    id: 4,
    link: "",
    title: "Дано масив цілих натуральних чисел ",
    requirements: [
      "Версія функції, де повертаються тільки групи з більше ніж одного числа –",
      "тобто справжні перестановки цифр.",
    ],
    starterCode: `console.log(digitPermutation([1230, 199, 2301, 1230, 110001, 3021, 101010, 991, 9]));
// Очікувано: [[1230, 2301, 1230], [199, 991], [110001, 101010]]
console.log(digitPermutation([11, 22])); // []
console.log(digitPermutation([11, 11, 11])); // [[11, 11, 11]]
console.log(digitPermutation([111111111112, 1222222222])); // []`,
    solution: `function digitPermutation(arr) {
  const map = new Map();

  arr.forEach(num => {
    const key = String(num).split('').sort().join('');
    if (!map.has(key)) { // Якщо такого ключа ще немає — створити його
      map.set(key, []); // створює новий запис у Map: ключ: key  - значення: порожній масив
    }
    map.get(key).push(num); // Кладемо число num у відповідну групу
  });

  // Повертаємо тільки групи, де більше одного числа
  const result = Array.from(map.values()).filter(group => group.length > 1);
  return result;
}

// Тести
console.clear();
console.log('start test');
console.log(digitPermutation([1230, 199, 2301, 1230, 110001, 3021, 101010, 991, 9]));
// Очікувано: [[1230, 2301, 1230], [199, 991], [110001, 101010]]
console.log(digitPermutation([11, 22])); // []
console.log(digitPermutation([11, 11, 11])); // [[11, 11, 11]]
console.log(digitPermutation([111111111112, 1222222222])); // []
console.log('end test');

`,
    description: `Тепер одиничні числа та унікальні перестановки не включаються,
     а залишаються лише справжні групи. map — це Map, структура даних для зберігання пар
ключ → значення`,
  },
  {
    id: 5,
    link: "",
    title: "Дано масив цілих натуральних чисел ",
    requirements: [
      "Варіант з об’єктом {}",
      "Тобто всі числа в числі одиникові просто переставлені по різному.",
    ],
    starterCode: `function digitPermutation(arr) {
     // your code here  }
    console.log(digitPermutation([1230, 199, 2301, 1230, 110001, 3021, 101010, 991, 9]);
    // Очікувано: [[9],[199,991],[1230,2301,1230,3021],[110001,101010]]);
    console.log(digitPermutation([11], [22])); // [[11],[22]]
    console.log(digitPermutation([11, 11, 11])); // [[11,11,11]]
    console.log(digitPermutation([111111111112], [122222222222])); //[[1222222222],[111111111112]]`,
    solution: `function digitPermutation(arr) {
  const obj = {};

  for (const num of arr) {
    const key = String(num).split('').sort().join('');

    if (!obj[key]) {
      obj[key] = [];
    }

    obj[key].push(num);
  }

  return Object.values(obj);
}

console.log(digitPermutation([1230, 199, 2301, 1230, 110001, 3021, 101010, 991, 9]));
// Очікувано: [[1230, 2301, 1230], [199, 991], [110001, 101010], [9]]
console.log(digitPermutation([11, 22])); // [[11],[22]]
console.log(digitPermutation([11, 11, 11]));// [[11, 11, 11]]
console.log(digitPermutation([111111111112, 1222222222])); // [[111111111112], [1222222222]]
`,
    description: `Важлива відмінність Map vs Object
  Map: Будь-які ключі- has()	- Кращий для великих даних  ///              
	 Object:  Ключі → рядки - if (!obj[key]) - Простий і швидкий. Чому я бачу:
   (4) [Array(3), Array(2), Array(2), Array(1)] замість [[1230, 2301, 1230], [199, 991], [110001, 101010], [9]]
   Це одне й те саме. DevTools просто згортає вкладені масиви, щоб не захаращувати консоль.
   Примусово вивести «як у прикладі».  Варіант 1 — через JSON.stringify:
   console.log(JSON.stringify(digitPermutation([
  1230, 199, 2301, 1230, 110001, 3021, 101010, 991, 9
])));`,
  },
  {
    id: 6,
    link: "https://www.youtube.com/watch?v=OZPOO79Y4jk&t=4503s",
    title: "useCollback , useMemo  [ 32:24 ]",
    requirements: [
      "Зробити так, щоб при рендері батька не ререндирився Child,",
      "якщо не помінявся velue або onClick",
    ],
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
    solution: `import React, { useCallback, useMemo } from 'react';

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

export function Comp({ title }: CompProps) {
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

export default Comp;
`,
    description: ` useCallback фіксує функцію між ререндерингами. 
    [] → функція створюється один раз. Посилання на onClick не змінюєтьсяю
Child не рендериться повторно без потреби.
useMemo фіксує об’єкт value, щоб він не створювався заново.
React.memo запам’ятовує результат рендеру компонента і НЕ перерендерює його, якщо props
 не змінилися (порівняння за ===). Тобто Child перерендериться лише тоді, коли:
 зміниться onClick або зміниться value.
memo - використовуєжться для компонентіа, відбувається поверхневе порівняння пропсів,
і компонент буде бачити , що посилання на value не помінялося, onClick не помінявся.
 а useMemo використовується для даних. Висновок:
memo – оптимізація для компонентів (поверхневе порівняння пропсів).
useMemo – оптимізація для даних.  useCallback – оптимізація для функцій.`,
  },
  {
    id: 7,
    link: "https://www.youtube.com/watch?v=hkrmyIecHR0&ab_channel=UlbiTV",
    title: "Реалізація debounce [ 24:32 ]",
    requirements: [
      "Написати функцію debounce(callback, delay), яка повертає нову функцію.",
      "Якщо викликають новий раз раніше, ніж пройшов delay, попередній таймер скасовується.",
      "Після затримки викликається callback з останніми аргументами.",
      "5 раз визивається fetching() з різними аргументами а ми вивели лише fetching 5",
    ],
    starterCode: `const fetchUrl = url => {
  console.log(\`fetching \${url}...\`);
};
function debounce(callback, delay) {
}
const fetching = debounce(fetchUrl, 300);

fetching(1);
fetching(2);
fetching(3);
fetching(4);
fetching(5);`,
    solution: `const fetchUrl = url => {
  console.log(\`fetching \${url}...\`); // повертає: fetching 5...
};

function debounce(callback, delay) {
  let timer = null;
  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

const fetching = debounce(fetchUrl, 300);

fetching(1);
fetching(2);
fetching(3);
fetching(4);
fetching(5);`,
    description: ` debounce - для того, щоб приривати попередні дії і відкладено виконувати останні.
    Кожен виклик скасовує попередній таймер. Після останнього виклику fetching(5) таймер
     відраховує 300 мс, і тільки тоді викликається fetchUrl(5). debounce дуже популярний у
     фронтенд-розробці, особливо при роботі з подіями, які можуть спрацьовувати дуже часто.
      Його головна мета — зменшити кількість викликів функції, що зберігає ресурси та покращує
       продуктивність. У даному випадку обмежити виклики функції, щоб уникнути перевантаження
       системи або сервера.`,
  },
  {
    id: 8,
    link: "https://www.youtube.com/watch?v=hkrmyIecHR0&ab_channel=UlbiTV",
    title: "Реалізація debounce [ 26:25 ]",
    requirements: ["Щоб крім пятірки, ще появлявся Bob "],
    starterCode: `const fetchUrl = url => {
  console.log(\`fetching \${url}...\`, this.firstName);
};
const user = {
    firstName: 'Bob',
};

function debounce(callback, delay) {
  let timer = null;
  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

const fetching = debounce(fetchUrl, 300);

fetching(1);
fetching(2);
fetching(3);
fetching(4);
fetching(5);`,
    solution: `const fetchUrl2 = function (url) {
  console.log(\`fetching \${url}...\`, this.firstName); //  fetching 5... Bob
};

const user = {
  firstName: 'Bob',
};

function debounce(callback, delay) {
  let timer = null;
  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}
const fetching2 = debounce(fetchUrl2.bind(user), 300);

fetching2(1);
fetching2(2);
fetching2(3);
fetching2(4);`,
    description: `Щоб ще виводився Bob (поміняв стрілку на function + bind(user)). 
    Стрілочна функція не має власного this. Вона лексично захоплює this з зовнішнього скоупу
(у браузері це window, у strict — undefined).
Якщо додати ще один bind, тобто const fetching2 = debounce(fetchUrl2.bind(user).bind({}), 300).
То все одно виведе fetching 5... Bob, тому що другий bind не змінює this,
оскільки this вже зафіксований першим bind. ( Запамятовує перший контекст.)`,
  },
  {
    id: 9,
    link: "https://www.youtube.com/watch?v=hkrmyIecHR0&ab_channel=UlbiTV",
    title: "Деревовидна структура [ 28:38 ]",
    requirements: [
      "Пройтися по всій структурі та зібрати values в масив.",
      "Використати ітеративний підхід (через стек)",
    ],
    starterCode: `const tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [{ value: 3 }],
    },
    {
      value: 4,
      children: [{ value: 5 }, { value: 6 }],
    },
  ],
};
function getTreeValues(tree) {
  // your code here
}
console.log(getTreeValues(tree)); // [1,4,6,5,2,3]`,
    solution: `const tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [{ value: 3 }],
    },
    {
      value: 4,
      children: [{ value: 5 }, { value: 6 }],
    },
  ],
};
function getTreeValues(tree) {
  const stack = [tree];

  const result = [];

  while (stack.length > 0) {
    const node = stack.pop();
    if (node.value !== undefined) {
      result.push(node.value);
    }
    if (node.children?.length) {
      stack.push(...node.children);
    }
    // if (node.children) {
    //   // додаємо у зворотному порядку, щоб порядок DFS зберігся
    //   // DFS (Depth-First Search) — це пошук у глибину, один із базових алгоритмів обходу графів та дерев.
    //  // Графи — це структури даних, які описують зв’язки між об’єктами.
    //   for (let i = node.children.length - 1; i >= 0; i--) {
    //     stack.push(node.children[i]);
    //   }
    // }
  }
  return result;
}
console.log(getTreeValues(tree)); // [1,4,6,5,2,3]`,
    description: `Якщо велика вкладеність, то краще через стек, щоб уникнути помилки
     переповнення.`,
  },
  {
    id: 10,
    link: "",
    title: "Деревовидна структура: Варіант 2",
    requirements: [
      "Пройтися по всій структурі та зібрати values в масив.",
      "Використати рекурсивний підхід",
    ],
    starterCode: `const tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [{ value: 3 }],
    },
    {
      value: 4,
      children: [{ value: 5 }, { value: 6 }],
    },
  ],
};
function getTreeValues(tree) {
  // your code here
}
console.log(getTreeValues(tree)); // [1,4,6,5,2,3]`,
    solution: `const tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [{ value: 3 }],
    },
    {
      value: 4,
      children: [{ value: 5 }, { value: 6 }],
    },
  ],
};

function getTreeValuesRecursive(node) {
   const values = [node.value];  // починаємо з поточного вузла
  if (node.children) {
    for (const child of node.children) {
      values.push(...getTreeValuesRecursive(child)); // рекурсивно додаємо значення дітей
    }
  }
  return values;
}
const values = getTreeValuesRecursive(tree);
console.log(values); // [1,2,3,4,5,6]

// 2  знайти суму всіх значень value
const sum = values.reduce((acc, val) => acc + val, 0);
console.log(sum); // 21

// 3  знайти суму всіх значень value за допомогою ф-ції getTreeSum
function getTreeSum(node) {
  let sum = node.value || 0;
  if (node.children) {
    for (const child of node.children) {
      sum += getTreeSum(child);
    }
  }
  return sum;
}
console.log(getTreeSum(tree)); // 21
`,
    description: `Створюємо масив values із поточним вузлом
Якщо є children, то для кожного викликаємо функцію рекурсивно
Через ... додаємо всі значення дочірніх вузлів в масив
Повертаємо масив. Рекурсія в JS обмежена ~10000 викликів.
 Для невеликої глибини проблем не буде. Якщо потрібно швидко отримати
 масив значень або обробити вузли — рекурсія економить час. Якщо дерево дуже глибоке (1000+ рівнів) →
 рекурсія може викликати RangeError: Maximum call stack size exceeded`,
  },
  {
    id: 11,
    link: "https://www.youtube.com/watch?v=hkrmyIecHR0&ab_channel=UlbiTV",
    title: "Рефокторинг коду: React. [32:30]",
    requirements: ["Зробити ревю та виправити помилки в коді нижче."],
    starterCode: `
    import React, {useState} from "react";

const initList = () => {
  return Array.from({ length: 200 }, (_el, index) => ({
    value: Math.random(),
    label: "row " + (index + 1),
  }));
};
export function NewsPage() {
  const [list] = useState(initList);

  const handleUpdate = () => {
    list[0].value = Math.random();
  };

  return (
    <>
      <h1>List News Page</h1>
      <Button onClick={handleUpdate}>Update  " row 1 "</Button>
      {list.map(({label, value}) => (
        <Row label={value} value={value} />
      ))}
    </>
  );
}

function Button(props) {
  const {children, onClick} = props;
  return <button onClick={onClick}>{children}</button>;
}

function Row(props) {
  const { label, value } = props
  return (
    <div style={{marginTop: 8}}>
      <span style={{ marginRight: 20 }}>{label}</span>
      <span>{value}</span>
    </div>
  );
}

export default NewsPage;
`,
    solution: `import  {useState, memo} from "react";
    
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

    // const Row = memo(function(props) {
    //   const {label, value} = props;
    //   return (
    //     <div style={{marginTop: 8}}>
    //       <span style={{marginRight: 20}}>{label}</span>
    //       <span>{value}</span>
    //     </div>
    //   );
    // })
    
    export default NewsPage;`,
    description: `Якщо ми натиснемо кнопку "Update row 1", 
    то крім першої строки будуть перерендуватися всі інші.
    Щоб цьому запобігти, потрібно: обернути компонент Row в memo.
   `,
  },
  {
    id: 12,
    link: "https://www.youtube.com/watch?v=hkrmyIecHR0&ab_channel=UlbiTV",
    title: "Відмінність any від unknown [38:21]",
    requirements: [
      "any і unknown обидва означають “невідомий тип”, але поводяться принципово по-різному ",
    ],
    starterCode: `const user = await fetch().json();  // any
function someFn(str: string) {
}
someFn(user) // якщо ми в цю ф-цію передамо масив юзерів то TypeScript не видасть помилку
// Якщо user насправді масив або об’єкт — помилка з’явиться лише в runtime

const user = await fetch().json();  // unknown
function someFn(str: string) {
}
someFn(user) // ПОМИЛКА TS: Argument of type 'unknown' is not assignable to parameter of type 'string'.`,
    solution: `
any — вимикає TypeScript. ✅ TypeScript дозволяє все. ❌ Помилки з’являться тільки під час виконання.
з unknown TypeScript забороняє будь-які дії, поки ти не перевіриш тип. unknown = “я не знаю тип, доведи мені”.

if (typeof value === "string") {
  value.toUpperCase(); // ✅
}
Присвоєння типів
let a: any = 5;
let b: number = a; // ✅

let u: unknown = 5;
let c: number = u; // ❌

Правильно з unknown:
if (typeof u === "number") {
  c = u; // ✅
}

Реальний приклад (API / JSON)
function parse(data: unknown) {
  if (typeof data === "object" && data !== null && "name" in data) {
    return (data as { name: string }).name;
  }
}
Не використовуй any:
у Redux
у React props
у відповідях API

✅ Використовуй unknown:
при роботі з JSON.parse
з API
у catch (error: unknown)
коли тип реально невідомий

Реальний приклад використання
const response: unknown = await fetch().json();

const name = parse(response);

if (name) {
  console.log(name.toUpperCase());
}

Коротко запамʼятати:
unknown → перевіряй перед використанням
typeof data === "object" → відсіює примітиви
data !== null → обовʼязково! , бо typeof null === "object"
"name" in data → перевірка поля
as → пояснює тип TS, не перевіряє його
`,
    description: ``,
  },
  {
    id: 13,
    link: "https://www.youtube.com/watch?v=nqwJDi-z738",
    title: "На синхронність JavaScript  [ 41:00 ]",
    requirements: ["В якій послідовності виведуться console.log"],
    starterCode: `console.log('0');

setTimeout(function timeuot() {
  console.log('1');
}, 100);

let p = new Promise(function (resolve, reject) {
  console.log('2');
  resolve();
});

p.then(function () {
  console.log('3');
});

setTimeout(function timeout() {
  console.log('5');
}, 0);
console.log('6');`,
    solution: `
     // 0 2 6 3 5 1 ) Створення нового  промісу це синхронний код
    `,
    description: ``,
  },
  {
    id: 14,
    link: "https://www.youtube.com/watch?v=nqwJDi-z738",
    title: "Розкласти масив на рядок з діапазонами [42:57]",
    requirements: [
      "Вхід масив чисел. Вихід рядок з діапазоном.",
      " Необхідно перетворити отриманний на вхід масив в рядок",
      " згортаючи сусідні по числовому ряду числа в діапвзон",
    ],
    starterCode: `range([1, 4, 5, 2, 3, 9, 8, 11, 0]);
range([1, 4, 3, 2]);

function range(arr) {
  // your code here
  }`,
    solution: `
function range(arr) {
  const sortArr = [...arr].sort((a, b) => a - b);
  if (!sortArr.length) {
    return '';
  }

  const result = [String(sortArr[0])];
  let isInterval = false;
  for (let i = 1; i <= sortArr.length; i++) {
    const prev = sortArr[i - 1];
    const current = sortArr[i];

    if (current - prev === 1) {
      isInterval = true;
      continue;
    }
    if (isInterval) {
      result[result.length - 1] +=  \`-\${prev}\`;
      isInterval = false;
    }
    if (current !== undefined) {
      result.push(String(current));
    }
  }
  return result.join();
}
 console.log(range([1, 4, 5, 2, 3, 9, 8, 11, 0])); // 0-5,8-9,11
 console.log(range([1, 4, 3, 2])); // 1-4`,
    description: ``,
  },
  {
    id: 15,
    link: "https://www.youtube.com/watch?v=nqwJDi-z738",
    title: "Розкласти масив на рядок з діапазонами [42:57]",
    requirements: ["Варіант 2"],
    starterCode: `range([1, 4, 5, 2, 3, 9, 8, 11, 0]);
range([1, 4, 3, 2]);

function range(arr) {
  // your code here
  }`,
    solution: `function range(arr) {
  if (!arr.length) return '';

  const sorted = [...arr].sort((a, b) => a - b);
  const result = [];
  let start = sorted[0];
  for (let i = 1; i <= sorted.length; i++) {
    // якщо кінець послідовності
    if (sorted[i] !== sorted[i - 1] + 1) {
      const end = sorted[i - 1];
     result.push(start === end ? String(start) : start + '-' + end);
      start = sorted[i];
    }
  }
  // додати останній діапазон якщо for (let i = 1; i < sorted.length; i++)
  // const end = sorted[sorted.length - 1];
  // result.push(start === end ? String(start) : start + '-' + end);
  return result.join(', ');
}

console.log(range([1, 4, 5, 2, 3, 9, 8, 11, 0])); // 0-5, 8-9, 11
console.log(range([1, 4, 3, 2])); // 1-4
console.log(range([7, 10, 11, 12, 20])); // 7, 10-12, 20`,
    description: ``,
  },
  {
    id: 16,
    link: "",
    title: "типову , ",
    requirements: ["Створення "],
    starterCode: ``,
    solution: ``,
    description: ``,
  },
];
