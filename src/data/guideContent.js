export const guideContent = [
  {
    id: 1,
    title: "Базовий HTML",
    requirements: ["Створення простого HTML-елемента"],
    starterCode: `<div>Hello</div>`,
  },
  {
    id: 2,
    title: "Текстовий контент",
    requirements: ["Робота з текстом усередині div: "],
    inlineCode: `Використовуй <div>Hello</div> для побічних ефектів`,
    starterCode: `<div>Good day</div>`,
  },
  {
    id: 3,
    title: "Code",
    requirements: ["Робота з текстом усередині div"],
    starterCode: `async function resolve(promises) {
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
}`,
  },
  {
    id: 4,
    title: "Базовий HTML",
    requirements: ["Створення простого HTML-елемента"],
    starterCode: `<div>Hello</div>`,
  },
];
