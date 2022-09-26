import React from 'react';
import cs from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postsElements =
        props.posts.map(post =>
            <Post ava={post.ava} message={post.message} like={post.likeCount}/>
        );

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let post = newPostElement.current.value;
        props.onPostChange(post);
    }

    return (
        <div className={cs.postsBox}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea className={cs.textarea} onChange={onPostChange} ref={newPostElement}
                              value={props.newPostBody}/>
                </div>
                <div>
                    <button className={cs.button} onClick={onAddPost}>ADD</button>
                </div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;