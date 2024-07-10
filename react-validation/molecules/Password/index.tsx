import React from 'react'
import Button from '../../atoms/Button'
import TextField from '../../atoms/TextField'
import { useState } from 'react'
import { Box,styled, Typography } from '@mui/material'

const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
    padding: '32px',
    border: `1px solid`,
}));

const TypographyBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
  }));

const typographyValues = [
    'Narendra',
    'Manoj',
    'Ramu',
    'Naveen',
  ];
  
const PasswordValidation = () => {
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const validatePassword = (password: string): boolean => {
        const passwordPattern = /^[A-Z][a-zA-Z]*[!@#$%^&*][0-9]{1,4}$/;
        return passwordPattern.test(password) && password.length === 8;
};
  
const handleSubmit = (): void => {
    if (validatePassword(password)) {
        setError('');
        alert('Password is valid');
    } else {
        setError('Password is not valid');
        alert('Password is not valid');
    }
};
  
    return (
      <StyledBox>
        <TextField value={password} placeholder='Enter the password' onChange={(e) => setPassword(e.target.value)} error={!!error}  />
        <Button variant='contained' onClick={handleSubmit}> Submit</Button>
        <TypographyBox>
        {typographyValues.map((value, index) => (
          <Typography key={index} variant='body1'>
            {value}
          </Typography>
        ))}
      </TypographyBox>
      </StyledBox>
      
    );
  };

export default PasswordValidation;
