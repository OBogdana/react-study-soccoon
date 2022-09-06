import React from 'react';
import cs from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.posts
        .map(post =>
            <Post ava={post.ava} message={post.message} like={post.likeCount}/>
        );

    let newPostElement = React.createRef();

    let addPost = () => {
        let post = newPostElement.current.value;
        props.addPost(post);
    }

    return (
        <div className={cs.postsBox}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Click for add</button>
                </div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;