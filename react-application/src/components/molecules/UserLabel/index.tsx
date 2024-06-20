import React from 'react';
import TypographyComponent from '../../atoms/Typography';
import { Box } from '@mui/material';
import './index.css';  

const UserLabel: React.FC = () => {
  return (
    <Box className="user-label-container">
      <TypographyComponent variant='h6' className="user-label-title">
        User Experience Designer
      </TypographyComponent>
      <TypographyComponent variant='subtitle2' className="user-label-subtitle">
        HP
      </TypographyComponent>
      <TypographyComponent variant='subtitle1'>
        Hyderabad, Telangana, India
      </TypographyComponent>
    </Box>
  );
};

export default UserLabel;
