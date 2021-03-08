import React from 'react';

import { Props } from './Alert.interface';

import s from './Alert.module.scss';

const Alert = ({ type, children }: Props): JSX.Element => (
    <div className={`${s.alert} ${s[`alert___${type}`]}`}>
        {children}
    </div>
);

export default Alert;