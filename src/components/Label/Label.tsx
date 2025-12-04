import * as React from 'react';

interface Props {
  className?: string;
  text: string;
}


const Label: React.FC<Props> = ({className, text}) => {
  return (
      <span className={className}>{text}</span>
  );
};

export default Label;