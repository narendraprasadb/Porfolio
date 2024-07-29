import React from 'react'
import useCounter from '../SetHook';
import { Box } from '@mui/material';
import NAMES from '../../../utils/Constants';

const CustomHook = () => {
  const {count,increment,decrement,reset}=useCounter(0);

  return (
    <Box>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>{NAMES.increment}</button>
      <button onClick={decrement}>{NAMES.decrement}</button>
      <button onClick={reset}>{NAMES.reset}</button>
    </Box>
  )
}

export default CustomHook
