import React from 'react';
import { Box } from '@mui/material';
import IconComponent from '../../atoms/Icon';
import './index.css';
const icons = [
  { id: 'hp-icon', src: '.././assets/icons/hp.svg', alt: 'HP Image' },
  { id: 'more-icon', src: '.././assets/icons/more.svg', alt: 'More Image' },
];

const IconHeader: React.FC = () => {
  return (
    <Box className="icon-header">
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
  );
}

export default IconHeader;
