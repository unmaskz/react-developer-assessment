import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import Pagination from 'react-js-pagination';
import { Grid, Row, Col } from 'react-flexbox-grid';

import { Props } from './Pagination.interface';

import s from './Pagination.module.scss';

const PostsPagination = (props: Props): JSX.Element => {
    const { pageSize, total, page, onChange} = props;

    return (
        <section className={s.pagination}>
            <Grid>
                <Row>
                    <Col xs={12}>
                        <Pagination
                            activePage={page}
                            itemsCountPerPage={pageSize}
                            totalItemsCount={total}
                            pageRangeDisplayed={5}
                            onChange={(pageNumber: number) => onChange(pageNumber)}
                            firstPageText={<FontAwesomeIcon icon={faCaretLeft} />}
                            lastPageText={<FontAwesomeIcon icon={faCaretRight} />}
                            prevPageText="Previous"
                            nextPageText="Next"
                        />
                    </Col>
                </Row>
            </Grid>
        </section>
    );
}

export default PostsPagination;