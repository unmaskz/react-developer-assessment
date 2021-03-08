import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';

import s from './Navigation.module.scss';

const Navigation = (): JSX.Element => (
    <section className={s.navigation}>
        <Grid>
            <Row>
                <Col xs={12}>
                    <ul className={s.navigation__links}>
                        <li className={s.navigation__link}>
                            <Link to="/">View all posts</Link>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Grid>
    </section>
);

export default Navigation;