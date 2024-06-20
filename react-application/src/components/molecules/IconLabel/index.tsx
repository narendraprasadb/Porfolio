import React from 'react';
import { Box } from '@mui/material';
import IconComponent from '../../atoms/Icon';
import TypographyComponent from '../../atoms/Typography';
import './index.css';  
const icons = [
  { id: 'bike-icon', src: '.././assets/icons/bike.svg', alt: 'Bike Image' },
  { id: 'car-icon', src: '.././assets/icons/car.svg', alt: 'Car Image' },
  { id: 'bus-icon', src: '.././assets/icons/bus.svg', alt: 'Bus Image' },
  { id: 'train-icon', src: '.././assets/icons/train.svg', alt: 'Train Image' },
];
const IconLabel: React.FC = () => {
  return (
    <Box className="icon-label-container">
      <TypographyComponent variant='body2' className="icon-label-text">
        Commute routes available:
      </TypographyComponent>
      <Box className="icon-row">
        <Box className="icon-group">
            {icons.map((icon) => (
            <IconComponent
              key={icon.id}
              src={icon.src}
              alt={icon.alt}
              id={icon.id}
              className="icon"
            />
          ))}
        </Box>
        <TypographyComponent variant='body2'>
          1hr 36mins ago
        </TypographyComponent>
      </Box>
    </Box>
  );
};

export default IconLabel;
