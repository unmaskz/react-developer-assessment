import React from 'react';

import s from './Spinner.module.scss';

const Spinner = (): JSX.Element => (
    <div className={s.spinner}>
        <span className={s.spinner__segment}></span>
        <span className={s.spinner__segment}></span>
        <span className={s.spinner__segment}></span>
    </div>
);

export default Spinner;