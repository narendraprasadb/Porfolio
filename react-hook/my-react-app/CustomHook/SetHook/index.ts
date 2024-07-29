import {useState} from 'react';

const useCounter = (initialState=0) => {
    const [count, setCount] = useState<number>(initialState);

    const increment = () => setCount((prevCount) => (prevCount + 1));
    const decrement = () => setCount((prevCount) => (prevCount - 1));
    const reset = () => setCount(0);

    return { count, increment, decrement, reset };
}

export default useCounter;
