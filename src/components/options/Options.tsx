import React, { useState, useEffect, ChangeEvent } from 'react';

import { getCategories } from 'services';
import { Props } from './Options.interface';

import s from './Options.module.scss';

const Options = (props: Props): JSX.Element => {
    const { filter, changeCategoryFilter } = props;
    const [categories, setCategories] = useState<Array<string>>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const categories = await getCategories();
            setCategories(categories);
        }
        fetchCategories();
    }, []);

    return (
        <div className={s.options}>
            <div className={s.options__option}>
                <label htmlFor="filter-category">Filter by Category:</label>
                <select
                    name="filter-category"
                    value={filter}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => changeCategoryFilter(e.target.value)}
                >
                    <option value="All">Select Category</option>
                    {categories.map((category, i) => (
                        <option key={`category-${i}`} value={category}>{category}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default Options;
