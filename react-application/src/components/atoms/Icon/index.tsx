import React from 'react';
interface IconComponentProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
}

const IconComponent: React.FC<IconComponentProps> = ({ src, alt, width , height }) => (
  <img src={src} alt={alt} width={width} height={height}/>
);

export default IconComponent;
