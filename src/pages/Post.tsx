import * as React from 'react';

const Post = ({ match }: any): JSX.Element => {
    return (
        <div>
            포스트 {match.params.id}
        </div>
    );
};

export default Post;