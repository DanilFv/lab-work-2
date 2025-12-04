import Label from '../Label/Label.tsx';
import * as React from 'react';

interface Props extends React.PropsWithChildren {
    text: string;
    className?: string;
}

const Burger: React.FC<Props> = ({text, children}) => {
  return (
       <div className="Burger">
         <div className="BreadTop">
           <div className="Seeds1"></div>
           <div className="Seeds2"></div>
         </div>
         {children}
         <div className="BreadBottom"></div>
         <Label
             className='label-price'
             text={text}
         />
       </div>
  );
};

// <div className="Salad"></div>
//          <div className="Cheese"></div>
//          <div className="Meat"></div>

export default Burger;