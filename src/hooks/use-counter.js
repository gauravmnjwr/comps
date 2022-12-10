import { useState, useEffect } from "react";

function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    console.log(count);
  }, [count]);

  return {
    count: count,
    increment: increment,
  };
}

export default useCounter;
