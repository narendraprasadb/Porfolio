import React from 'react'
import useHook from '../SetHook';
const CustomHook = () => {
  const {count,increment,decrement,reset}=useHook(0);
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CustomHook
