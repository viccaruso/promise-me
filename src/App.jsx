import { asyncFinallyDotThenGetQuotes, asyncFinallyGetQuotes, asyncGetQuotes, asyncTryGetQuotes, catchDotThenGetQuotes, dotThenGetQuotes, finallyDotThenGetQuotes, thenAsyncGetQuotes } from './services/promise-me';

export default function App() {
  const handleClick = (callback) => {
    const result = callback();
    console.log(result);
  };

  return (
    <>
    <button onClick={() => handleClick(asyncGetQuotes)}>Async Get Quotes</button>
    <button onClick={() => handleClick(dotThenGetQuotes)}>.then() Get Quotes</button>
    <button onClick={() => handleClick(asyncTryGetQuotes)}>Async Try Get Quotes (w/error handling)</button>
    <button onClick={() => handleClick(catchDotThenGetQuotes)}>.then() Get Quotes (w/error handling)</button>
    <button onClick={() => handleClick(asyncFinallyGetQuotes)}>Async Finally Get Quotes</button>
    <button onClick={() => handleClick(finallyDotThenGetQuotes)}>.then() Finally Get Quotes</button>
    <button onClick={() => handleClick(thenAsyncGetQuotes)}>.then() Async Get Quotes</button>
    <button onClick={() => handleClick(asyncFinallyDotThenGetQuotes)}>Async Finally Get Quotes w/ error</button>
    </>
  );
}
