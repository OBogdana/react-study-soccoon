import React from 'react';
import cs from './Post.module.css';

const Post = (props) => {
    return (
        <div className={cs.item}>
            <img src={props.ava} />
            {props.message}
            <div>
                LIKE:
                {props.like}
            </div>
        </div>
    );
};

export default Post;