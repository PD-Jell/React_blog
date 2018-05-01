import * as React from 'react';
import { Link, Route } from 'react-router-dom';
import Post from './Post';

const select = (): JSX.Element => {
    return (
        <h3>Please select any post</h3>
    );
};

const Posts = ({ match }: any): JSX.Element => {
    return (
        <div>
            <h2>Post List</h2>
            <ul>
                <li><Link to={`${match.url}/1`}>Post #1</Link></li>
                <li><Link to={`${match.url}/2`}>Post #2</Link></li>
                <li><Link to={`${match.url}/3`}>Post #3</Link></li>
                <li><Link to={`${match.url}/4`}>Post #4</Link></li>
            </ul>
            <Route exact={true} path={match.url} render={select} />
            <Route path={`${match.url}/:id`} component={Post} />
        </div>
    );
};

export default Posts;