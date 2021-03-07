import React, { useState, useEffect } from 'react';
import ScrollToTop from 'react-scroll-to-top';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

import PostsPagination from 'components/pagination/Pagination';
import Options from 'components/options/Options';
import Posts from 'components/posts/Posts';
import Spinner from 'components/spinner/Spinner';
import { getCategories, getPosts } from 'services';
import { Post } from 'types';
import { pageSize } from 'config';

import s from './App.module.scss';

const App = (): JSX.Element => {
    const [page, setPage] = useState<number>(1);
    const [categoryFilter, setCategoryFilter] = useState<string>('All');
    const [loaded, setLoaded] = useState<boolean>(false);
    const [totalPosts, setTotalPosts] = useState<number>(0);
    const [posts, setPosts] = useState<Array<Post>>([]);
    const [categories, setCategories] = useState<Array<string>>([]);

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
        const fetchPosts = async() => {
            const { posts, total } = await getPosts();
            console.log(posts, total);
            const start = (page - 1) * pageSize;
            const end = start + pageSize;
            setTotalPosts(total);
            setPosts(posts.slice(start, end));
            setTimeout(() => setLoaded(true), 1000);
        }
        fetchPosts();
    }, [page]);

    useEffect(() => {
        const fetchCategories = async () => {
            const categories = await getCategories();
            setCategories(categories);
        }
        fetchCategories();
    }, []);

    return (
        <div className={s.app}>
            <Options
                categories={categories}
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
            <ScrollToTop smooth component={<FontAwesomeIcon icon={faCaretUp} />} />
        </div>
    );
}

export default App;
