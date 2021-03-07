import React, { ChangeEvent } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import { Props } from './Options.interface';

import s from './Options.module.scss';

const Options = (props: Props): JSX.Element => {
    const { categories, filter, changeCategoryFilter } = props;

    return (
        <section className={s.options}>
            <Grid>
                <Row>
                    <Col xs={12}>
                        <div className={s.options__options}>
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
                    </Col>
                </Row>
            </Grid>
        </section>
    );
}

export default Options;
