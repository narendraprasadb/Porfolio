import React from 'react';
import {Button as MuiButton} from '@mui/material';
import { ButtonProps } from '@mui/material/Button';


const Button: React.FC<ButtonProps> = (props) => {
  return (
    <MuiButton {...props}/>
  );
};

export default Button;
