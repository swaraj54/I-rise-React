// Let's create an example custom React hook called useCounter, which will provide a counter value and functions to increment and decrement the counter.

import { useState } from 'react';
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return [count, increment, decrement];
}

export default useCounter;