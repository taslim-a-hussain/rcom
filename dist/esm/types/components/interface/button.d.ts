import React from 'react';
export interface Props {
    variant: 'Primary' | 'Secondary' | 'Error';
    children: React.ReactNode;
    onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
}
