import React from 'react';
import cs from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/state";


const MyPosts = (props) => {

    let postsElements =
        props.posts.posts.map(post =>
            <Post ava={post.ava} message={post.message} like={post.likeCount}/>
        );

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let post = newPostElement.current.value;
        let action = onPostChangeActionCreator(post);
        props.dispatch(action);
    }

    return (
        <div className={cs.postsBox}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea className={cs.textarea} onChange={onPostChange} ref={newPostElement} value={props.newPostBody}/>
                </div>
                <div>
                    <button className={cs.button} onClick={addPost}>ADD</button>
                </div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;