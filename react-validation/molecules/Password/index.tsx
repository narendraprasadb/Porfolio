import React, { useState, ChangeEvent } from 'react';
import Button from '../../atoms/Button';
import TextField from '../../atoms/TextField';
import { Box, styled, Typography } from '@mui/material';
import { names } from '../../../utils/constants';

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(4), 
  border: `1px solid`,
}));

const TypographyBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1), 
}));

const PasswordValidation: React.FC = () => {
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);

  const validatePassword = (password: string): boolean => {
    const passwordPattern = /^[A-Z][a-zA-Z]*[!@#$%^&*][0-9]{1,4}$/;
    return passwordPattern.test(password) && password.length === 8;
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  const handleSubmit = (): void => {
    if (validatePassword(password)) {
      setError('');
      setIsValid(true); 
    } else {
      setError('Password is invalid');
      setIsValid(false);
    }
  };

  return (
    <StyledBox>
      <TextField value={password}  onChange={handlePasswordChange}  placeholder="Enter the password" error={!!error} helperText={error || (isValid ? 'Password is valid' : '')} sx={{
          '& .MuiInputBase-root': {
            borderColor: isValid ? 'green' : (error ? 'red' : undefined),
          },
          '& .MuiFormHelperText-root': {
            color: isValid ? 'green' : undefined,
          },
        }} />
      <Button variant="contained" onClick={handleSubmit}>Submit</Button>
      <TypographyBox>
        {names.map((name, index) => (
          <Typography key={index} variant="body1">
            {name}
          </Typography>
        ))}
      </TypographyBox>
    </StyledBox>
  );
};

export default PasswordValidation;
