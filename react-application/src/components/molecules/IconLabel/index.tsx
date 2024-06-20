import React from 'react';
import { Box } from '@mui/material';
import IconComponent from '../../atoms/Icon';
import TypographyComponent from '../../atoms/Typography';
import './index.css';  

const IconLabel: React.FC = () => {
  return (
    <Box className="icon-label-container">
      <TypographyComponent variant='body1' className="icon-label-text">
        Commute routes available:
      </TypographyComponent>
      <Box className="icon-row">
        <Box className="icon-group">
          <IconComponent src='./icons-library/bike.svg' alt='Bike Image' width='20px' height='20px' />
          <IconComponent src='./icons-library/car.svg' alt='Car Image' width='20px' height='20px' />
          <IconComponent src='./icons-library/bus.svg' alt='Bus Image' width='20px' height='20px' />
          <IconComponent src='./icons-library/train.svg' alt='Train Image' width='20px' height='20px' />
        </Box>
        <TypographyComponent variant='body2'>
          1hr 36mins ago
        </TypographyComponent>
      </Box>
    </Box>
  );
};

export default IconLabel;
