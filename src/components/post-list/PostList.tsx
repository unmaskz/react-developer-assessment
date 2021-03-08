import React, { useState, useEffect } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Options from 'components/options/Options';
import PostsPagination from 'components/pagination/Pagination';
import Post from 'components/post/Post';
import Spinner from 'components/spinner/Spinner';
import { getPosts, getPostsByCategory } from 'services';
import { Post as Props } from 'types';
import { pageSize } from 'config'; // Ideally pageSize would be an option that could be set e.g. 5, 10, 50 etc.
import s from './PostList.module.scss';

const PostList = (): JSX.Element => {
    const [page, setPage] = useState<number>(1);
    const [categoryFilter, setCategoryFilter] = useState<string>('All');
    const [loaded, setLoaded] = useState<boolean>(false);
    const [totalPosts, setTotalPosts] = useState<number>(0);
    const [posts, setPosts] = useState<Array<Props>>([]);
    const sortedPosts = posts.sort((a, b) => a.publishDate > b.publishDate ? -1 : 1);

    const changeCategoryFilter = (category: string) => {
        setLoaded(false);
        setCategoryFilter(category);
        setTimeout(() => setLoaded(true), 1000);
    }

    const changePage = (page: number) => {
        setLoaded(false);
        setPage(page);
        setTimeout(() => setLoaded(true), 1000);
    };

    useEffect(() => {
        setLoaded(false);
        const fetchPosts = async () => {
            const results = categoryFilter === 'All' ? await getPosts() : await getPostsByCategory(categoryFilter);
            const { posts, total } = results;
            const start = (page - 1) * pageSize;
            const end = start + pageSize;
            setTotalPosts(total);
            setPosts(posts.slice(start, end));
            setTimeout(() => setLoaded(true), 1000);
        }
        fetchPosts();
    }, [categoryFilter, page]);

    return (
        <section className={s.posts}>
            <Grid>
                <Row>
                    <Col xs={12}>
                        <Options
                            filter={categoryFilter}
                            changeCategoryFilter={(category) => changeCategoryFilter(category)}
                        />
                        <div className={s.posts__header}>
                            <h1 className={s.posts__title}>Posts</h1>
                            <div className={s.posts__total}>{totalPosts}</div>
                        </div>
                        {!loaded ? (
                            <Spinner />
                        ) : (
                            <div className={s.posts__items}>
                                {sortedPosts.map(post => <Post key={post.id} {...post} />)}
                            </div>
                        )}
                        <PostsPagination
                            page={page}
                            total={totalPosts}
                            pageSize={pageSize}
                            onChange={(pageNumber) => changePage(pageNumber)}
                        />
                    </Col>
                </Row>
            </Grid>
        </section>
    );
}

export default PostList;