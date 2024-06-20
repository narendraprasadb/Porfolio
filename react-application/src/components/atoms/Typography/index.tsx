import React from 'react'
import {Typography,TypographyProps} from '@mui/material';
const TypographyComponent: React.FC<TypographyProps>= (props) => {
  return (
      <Typography {...props}/>
  )
}

export default TypographyComponent;
