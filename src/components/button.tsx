import React, { FC } from 'react';
import {Props} from './interface/button';
import './css/button.css';


export const Button: FC<Props> = ({children, variant, onClickHandler}) => {
    return (
        <button type="button" className={`btn btn${variant}`} onClick={onClickHandler}>
            {children}
        </button>
    )
};
