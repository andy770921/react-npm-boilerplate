import React, { FC, MouseEventHandler } from 'react';

const Button: FC<{ onClick?: MouseEventHandler<HTMLButtonElement> }> = ({ children, onClick }) => (
    <button type="button" onClick={onClick}>
        {children}
    </button>
);

export default Button;
