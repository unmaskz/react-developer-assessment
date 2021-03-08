import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PostList from 'components/post-list/PostList';
import PostDetails from 'components/post-details/PostDetails';
import Error from 'components/error/Error';

import s from './App.module.scss';

const App = (): JSX.Element => (
    <div className={s.app}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <PostList />
                </Route>
                <Route path={`/post/:id`} children={<PostDetails />} />
                <Route path="/404" children={<Error />} />
            </Switch>
        </BrowserRouter>
    </div>
);

export default App;
