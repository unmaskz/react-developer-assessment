import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Alert from 'components/alert/Alert';

import s from './Error.module.scss';

const Error = (): JSX.Element => (
    <div className={s.error}>
        <Grid>
            <Row>
                <Col xs={12}>
                    <div className={s.error__message}>
                        <h1>Error</h1>
                        <Alert type="danger">Sorry, post does not exist.</Alert>
                    </div>
                </Col>
            </Row>
        </Grid>
    </div>
);

export default Error;