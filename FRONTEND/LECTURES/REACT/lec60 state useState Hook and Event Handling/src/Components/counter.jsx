
export const Counter = ({ count, setCount }) => {
  function increment() {
    // setCount(count++)
    // setCount(count++)
    // setCount(count++)

    // setCount(++count)
    // setCount(++count)
    // setCount(++count)

    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)

    setCount((prev) => prev + 1);
    // setValue((prev)=>prev+1)
    // setValue((prev)=>prev+1)
  }
  function decrement() {
    setCount((prev) => prev - 1);
  }
  return (
    <>
      <button onClick={increment}>+</button>
      <div>{count}</div>
      <button onClick={decrement}>-</button>
    </>
  );
};
