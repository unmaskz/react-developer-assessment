import React, { useState, useEffect } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { useParams, useHistory } from 'react-router-dom';

import Spinner from 'components/spinner/Spinner';
import { Params } from 'types';
import { getPostById } from 'services';

import s from 'components/post/Post.module.scss';

const PostDetails = (): JSX.Element => {
    const { id } = useParams<Params>();
    const [post, setPost] = useState<any>();
    const [loaded, setLoaded] = useState<boolean>(false);
    const history = useHistory();

    useEffect(() => {
        const fetchPost = async () => {
            setLoaded(false);
            const data = await getPostById(id);
            if (data) {
                setPost(data);
            } else {
                history.push('/404');
            }
            setTimeout(() => setLoaded(true), 1000);
        }
        fetchPost();
    }, [id, history]);

    return (
        <section>
            <Grid>
                <Row>
                    <Col xs={12}>
                        { !loaded ? (
                            <Spinner />
                        ) : (
                            <div className={s.post}>
                                <div className={s.post__header}>
                                    <h1 className={s.postDetails__title}>{post.title}</h1>
                                </div>
                                <div className={s.post__details}>
                                    <p className={s.post__summary}>{post.summary}</p>
                                    <div className={s.post__author}>
                                        <span className={s.post__authorAvatar}>
                                            <img src={post.author.avatar} alt={`Avatar for ${post.author.name}.`} />
                                        </span>
                                        <span className={s.post__authorName}>by {post.author.name}</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Col>
                </Row>
            </Grid>
        </section>
    );
}

export default PostDetails;