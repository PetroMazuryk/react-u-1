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
    title: "Базовий ",
    requirements: ["Створення "],
    starterCode: ``,
    solution: ``,
    description: ``,
  },
  {
    id: 11,
    link: "",
    title: "Базовий ",
    requirements: ["Створення "],
    starterCode: ``,
    solution: ``,
    description: ``,
  },
];
