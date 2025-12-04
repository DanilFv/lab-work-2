import * as React from 'react';

interface Props extends React.PropsWithChildren{
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<Props> = ({ type='button', className, onClick, children }) => {
    return (
        <button className={className} type={type} onClick={onClick}>
          {children}
        </button>
    );
};

export default Button;
