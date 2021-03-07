import React, { useState, useEffect } from 'react';

import PostsPagination from 'components/pagination/Pagination';
import Options from 'components/options/Options';
import Posts from 'components/posts/Posts';
import Spinner from 'components/spinner/Spinner';
import { getPosts, getPostsByCategory } from 'services';
import { Post } from 'types';
import { pageSize } from 'config';

import s from './App.module.scss';

const App = (): JSX.Element => {
    const [page, setPage] = useState<number>(1);
    const [categoryFilter, setCategoryFilter] = useState<string>('All');
    const [loaded, setLoaded] = useState<boolean>(false);
    const [totalPosts, setTotalPosts] = useState<number>(0);
    const [posts, setPosts] = useState<Array<Post>>([]);

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
            const { posts, total } = categoryFilter === 'All'? await getPosts() : await getPostsByCategory(categoryFilter); 
            const start = (page - 1) * pageSize;
            const end = start + pageSize;
            setTotalPosts(total);
            setPosts(posts.slice(start, end));
            setTimeout(() => setLoaded(true), 1000);
        }
        fetchPosts();
    }, [categoryFilter, page]);

    return (
        <div className={s.app}>
            <Options
                filter={categoryFilter}
                changeCategoryFilter={(category) => changeCategoryFilter(category)}
            />
            { !loaded ? (
                <Spinner />
            ) : (
                <Posts posts={posts} />
            )}
            <PostsPagination
                page={page}
                total={totalPosts}
                pageSize={pageSize}
                onChange={(pageNumber) => changePage(pageNumber)}
            />
        </div>
    );
}

export default App;
