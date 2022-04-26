// https://futuramaapi.herokuapp.com/api/quotes/1

/**
 * TODO: Exercise 1: use `fetch` & async/await to get data from an API
 */
export async function asyncGetQuotes() {
  console.log('1. Before async fetch');
  const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
  console.log('2. Async fetch complete');

  const result = await res.json();
  console.log('3. After async fetch');

  return { quote: result[0], totalResults: result.length };
}

/**
 * TODO: Exercise 2: use `fetch` & `.then` syntax to get the same data from the first exercise.
 */
export function dotThenGetQuotes() {
  console.log('1. Before .then fetch starts')
  const result = fetch('https://futuramaapi.herokuapp.com/api/quotes/1')
    .then((res) => res.json())
    .then((result) => ({ quote: result[0], totalResults: result.length }))
    .then(() => console.log('2. .then fetch complete'));

  console.log('3. After');
  return result;
}

/**
 * TODO: Exercise 3: use `fetch`, async/await, and a try/catch statement to get data from an API and handle errors
 */
export async function asyncTryGetQuotes() {
  try {
    console.log('1. Before async fetch');
    const res = await fetch('https://futuramaapii.herokuapp.com/api/quotes/1'); // <-- extra i in api
    console.log('2. Async fetch complete');

    const result = await res.json();
    console.log('3. After async fetch');

    return { quote: result[0], totalResults: result.length };
  } catch (error) {
    console.error('Oops!!! An error occurred and it was HANDLED');
  }
}

/**
 * TODO: Exercise 4: use `fetch`, `.then`, and `.catch` to get the same data from exercise 3 while handling errors
 */
 export function catchDotThenGetQuotes() {
  console.log('1. Before .then fetch starts')
  const result = fetch('https://futuramaapii.herokuapp.com/api/quotes/1')
    .then((res) => res.json())
    .then((result) => ({ quote: result[0], totalResults: result.length }))
    .then(() => console.log('2. .then fetch complete'))
    .catch((error) => console.error('Oops!!! An error occurred and it was HANDLED'));

  console.log('3. After');
  return result;
}


/**
 * TODO: Exercise 5: use `fetch`, async/await, and a try/catch/finally statement to get data from an API, handle errors, then console.log('All done!') upon completion
 */
 export async function asyncFinallyGetQuotes() {
  try {
    console.log('1. Before async fetch');
    const res = await fetch('https://futuramaapii.herokuapp.com/api/quotes/1'); // <-- extra i in api
    console.log('2. Async fetch complete');

    const result = await res.json();
    console.log('3. After async fetch');

    return { quote: result[0], totalResults: result.length };
  } catch (error) {
    console.error('Oops!!! An error occurred and it was HANDLED');
  } finally {
    console.log('All done!')
  }
}


/**
 * TODO: Exercise 6: use `fetch`, `.then`, `.catch`. and `.finally` to get the same data from exercise 5 while handling errors and calling console.log('All done!') upon completion
 */
 export function finallyDotThenGetQuotes() {
  console.log('1. Before .then fetch starts')
  const result = fetch('https://futuramaapii.herokuapp.com/api/quotes/1')
    .then((res) => res.json())
    .then((result) => ({ quote: result[0], totalResults: result.length }))
    .then(() => console.log('2. .then fetch complete'))
    .catch((error) => console.error('Oops!!! An error occurred and it was HANDLED'))
    .finally(() => console.log('All done!'));

  console.log('3. After');
  return result;
}

/**
 * TODO: Exercise 7: Call your function from exercise 5 using .then
 */
export async function thenAsyncGetQuotes() {
  return asyncFinallyGetQuotes().then((result) => {
    console.log('Reached the .then part')
  });
}

/**
 * TODO: Exercise 8: Call your function from exercise 6 using async/await
 */
export async function asyncFinallyDotThenGetQuotes() {
  const results = await finallyDotThenGetQuotes();
  return results;
}


