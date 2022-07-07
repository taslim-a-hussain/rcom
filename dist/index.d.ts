import React, { FC } from 'react';

interface Props {
    variant: 'Primary' | 'Secondary' | 'Error';
    children: React.ReactNode;
    onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
}

declare const Button: FC<Props>;

export { Button };
