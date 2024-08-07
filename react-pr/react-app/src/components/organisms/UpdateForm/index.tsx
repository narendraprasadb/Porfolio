import React, { useState } from 'react';
import { Box, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import { UPDATE_USER } from '../../../services/api';
import NAMES from '../../../utils/Constants';

const UpdateForm = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async () => {
        if (email.trim() === '' || password.trim() === '') {
            setError('Email and Password cannot be empty');
            return;
        }

        try {
            const response = await UPDATE_USER(email, password);
            if (response.status === 200) {
                setError('');
                handleClose();
            } else {
                setError('Failed to update user');
            }
        } catch (error) {
            setError('An error occurred while updating');
        }
    };

    return (
        <Box>
            <Typography>{NAMES.update}</Typography>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>
               {NAMES.up}
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{NAMES.user}</DialogTitle>
                <DialogContent>
                    <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    {error}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">{NAMES.cancel}</Button>
                    <Button onClick={handleSubmit} color="primary"> {NAMES.up}</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default UpdateForm;
