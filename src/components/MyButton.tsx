import React, { FC, MouseEventHandler } from 'react';

const MyButton: FC<{ onClick?: MouseEventHandler<HTMLButtonElement> }> = ({ children, onClick }) => (
    <button type="button" onClick={onClick}>
        {children}
    </button>
);

export default MyButton;
