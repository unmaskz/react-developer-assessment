import React from 'react';
import Moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

import { Props } from './TimeAgo.interface';

import s from './TimeAgo.module.scss';

const TimeAgo = ({ date }: Props): JSX.Element => (
    <div className={s.timeAgo}>
        <FontAwesomeIcon className={s.timeAgo__icon} icon={faClock} />
        <Moment className={s.timeAgo__time} fromNow>{date}</Moment>
    </div>
);

export default TimeAgo;