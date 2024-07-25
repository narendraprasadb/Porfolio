import React from 'react'
import { useState } from 'react';
const useHook=(p0: number)=>{
    const [count,setCount]=useState<number>(0);
    const increment=()=>setCount((prevCount)=>(prevCount+1));
    const decrement=()=>setCount((prevCount)=>(prevCount-1));
    const reset=()=>setCount(0);
    return {count,increment,decrement,reset}
}
export default useHook;
