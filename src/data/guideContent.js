export const guideContent = [
  {
    id: 1,
    title: "Базовий HTML",
    requirements: ["Створення простого HTML-елемента"],
    code: `<div>Hello</div>`,
  },
  {
    id: 2,
    title: "Текстовий контент",
    requirements: ["Робота з текстом усередині div: "],
    inlineCode: `Використовуй <div>Hello</div> для побічних ефектів`,
    code: `<div>Good day</div>`,
  },
  {
    id: 3,
    title: "Code",
    requirements: ["Робота з текстом усередині div"],
    code: `async function resolve(promises) {
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
];
