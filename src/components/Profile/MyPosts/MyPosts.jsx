import React from 'react';
import cs from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
// debugger;
    let postsElements = props.posts.posts
        .map(post =>
            <Post ava={post.ava} message={post.message} like={post.likeCount}/>
        );

    return (
        <div className={cs.postsBox}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Click for add</button>
                </div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;