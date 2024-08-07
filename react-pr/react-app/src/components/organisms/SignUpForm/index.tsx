import React, { useState } from 'react';
import { Box, styled, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TextField from '../../atoms/TextField';
import Button from '../../atoms/Button';
import Typography from '../../atoms/Typography';
import { CREATE_USER } from '../../../services/api';
import NAMES from '../../../utils/Constants';

const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',    
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.primary.main,
    padding: theme.spacing(6),
    backgroundColor: theme.palette.background.default,
}));

const SignUpForm = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const validateEmail = (email: string) => {
        return email.length > 6;
    };

    const validatePassword = (password: string) => {
        const emailvalidation = /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;
        return emailvalidation.test(email) && password.length > 6;
    };

    const handlesubmit = async () => {
        if (!validateEmail(email) || !validatePassword(password)) {
            setError('Email and Password are not valid');
            return;
        }

        try {
            await CREATE_USER(email, password);
            setError('');
            navigate('/');
        } catch (error) {
            console.log('Sign-up failed. Please try again.');
        }
    };

    return (
        <StyledBox>
            <Typography variant="h5">{NAMES.sign}</Typography>
            <TextField label="Email:" placeholder='Enter the email' onChange={(e) => setEmail(e.target.value)} />
            <TextField label="Password:" placeholder='Enter the password' type='password' onChange={(e) => setPassword(e.target.value)} />
            {error}
            <Button type='submit' onClick={handlesubmit} variant="contained" color="primary">
                {NAMES.sub}
            </Button>
        </StyledBox>
    );
};

export default SignUpForm;
