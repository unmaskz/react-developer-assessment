import React from 'react';

import { Props } from './Categories.interface';

import s from './Categories.module.scss';

const Categories = ({ categories }: Props): JSX.Element => {
    return (
        <div className={s.categories}>
            {categories.map(category => (
                <div key={category.id} className={s.categories__category}>
                    {category.name}
                </div>
            ))}
        </div>
    );
}

export default Categories;