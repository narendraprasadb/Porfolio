import React from 'react';
import { Box } from '@mui/material';
import IconComponent from '../../atoms/Icon';
import './index.css';

const IconHeader: React.FC = () => {
  return (
    <Box className="icon-header">
     <IconComponent src='./icons-library/hp.svg' alt='Bike Image' width='63px' height='63px'></IconComponent>
     <IconComponent src='./icons-library/more.svg' alt='Bike Image' width='24px' height='24px'></IconComponent>
    </Box>
  );
}

export default IconHeader;
