import React from 'react';
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {

                let state = store.getState();

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                let onPostChange = (post) => {
                    let action = onPostChangeActionCreator(post);
                    store.dispatch(action);
                }
                return <MyPosts onPostChange={onPostChange}
                                addPost={addPost}
                                posts={state.profilePage.posts}
                                newPostBody={state.profilePage.newPostBody}/>
                }
            }
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;