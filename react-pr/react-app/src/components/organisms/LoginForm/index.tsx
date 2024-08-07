import React, { useState } from 'react';
import { Box, styled, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TextField from '../../atoms/TextField';
import Button from '../../atoms/Button';
import Typography from '../../atoms/Typography';
import { CHECK_EMAIL_AND_PASSWORD } from '../../../services/api';
import NAMES from '../../../utils/Constants';

const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.primary.main,
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
}));

const LoginForm = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const validateEmail = (email: string) => {
        const validateEmail = /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;
        return validateEmail.test(email) && email.length > 6;
    };

    const validatePassword = (password: string) => {
        return password.length > 6;
    };

    const handlesubmit = async () => {
        if (!validateEmail(email) || !validatePassword(password)) {
            setError('Email and Password are not valid');
            return;
        }

        try {
            const users = await CHECK_EMAIL_AND_PASSWORD(email, password);
            const user = users.find((user: any) => user.email === email && user.password === password);
            if (user) {
                setError('');
                navigate('/home-page');
            } else {
                setError('Invalid email or password.');
            }
        } catch (error) {
            console.log('An error occurred while trying to log in. Please try again.');
        }
    };

    const handleasignup = () => {
        navigate('/signup');
    };

    return (
        <StyledBox>
            <Typography variant="h5">{NAMES.login}</Typography>
            <TextField label="Email:" placeholder='Enter the email' onChange={(e) => setEmail(e.target.value)} />
            <TextField label="Password:" placeholder='Enter the password' type='password' onChange={(e) => setPassword(e.target.value)} />
            {error}
            <Button type='submit' onClick={handlesubmit} variant="contained" color="primary">
               {NAMES.sub}
            </Button>
            <Button onClick={handleasignup} variant="outlined" color="secondary">
                {NAMES.sign}
            </Button>
        </StyledBox>
    );
};

export default LoginForm;
