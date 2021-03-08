import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Categories from 'components/categories/Categories';
import TimeAgo from 'components/time-ago/TimeAgo';
import { Props } from './Posts.interface';
import s from './Posts.module.scss';

const Posts = ({ posts }: Props): JSX.Element => {
    /* Sorting posts by publishDate in ascending order */
    const sortedPosts = posts.sort((a, b) => a.publishDate > b.publishDate ? -1 : 1);
    return (
        <section className={s.posts}>
            <Grid>
                <Row>
                    <Col xs={12}>
                        <div className={s.posts__items}>
                            {sortedPosts.map(post => {
                                const { id, title, summary, categories, author, publishDate } = post;
                                
                                return (
                                    <div key={id} className={s.post}>
                                        <div className={s.post__header}>
                                            <Categories categories={categories} />
                                            <TimeAgo date={publishDate} />
                                        </div>
                                        <div className={s.post__details}>
                                            <h3 className={s.post__title}>{title}</h3>
                                            <p className={s.post__summary}>{summary}</p>
                                            <div className={s.post__author}>
                                                <span className={s.post__authorAvatar}>
                                                    <img src={author.avatar} alt={`Avatar for ${author.name}.`} />
                                                </span>
                                                <span className={s.post__authorName}>by {author.name}</span>
                                            </div>
                                        </div>
                                        <div className={s.post__footer}>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </Col>
                </Row>
            </Grid>
        </section>
    );
}

export default Posts;