import React from 'react';
import { Link } from 'react-router-dom';

import Categories from 'components/categories/Categories';
import TimeAgo from 'components/time-ago/TimeAgo';
import { Post as Props } from 'types';

import s from './Post.module.scss';

const Post = ({ id, title, summary, categories, author, publishDate }: Props): JSX.Element => {
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
                <Link to={`/post/${id}`}>Read more</Link>
            </div>
        </div>
    );
}

export default Post;