import React from 'react';

interface IconComponentProps {
  src: string;
  alt: string;
  id?: string;
  className?: string;
}

const IconComponent: React.FC<IconComponentProps> = ({ src, alt, id, className }) => (
  <img src={src} alt={alt} id={id} className={className} />
);

export default IconComponent;
