import React from 'react';
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (post) => {
        let action = onPostChangeActionCreator(post);
        props.store.dispatch(action);
    }

    return (
        <MyPosts onPostChange={onPostChange} addPost={addPost} posts={state.profilePage.posts}
                 newPostBody={state.profilePage.newPostBody}/>
    );
}

export default MyPostsContainer;