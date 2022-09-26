import React from 'react';
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

//
// const MyPostsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//
//                 let state = store.getState();
//
//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator());
//                 }
//
//                 let onPostChange = (post) => {
//                     let action = onPostChangeActionCreator(post);
//                     store.dispatch(action);
//                 }
//                 return <MyPosts onPostChange={onPostChange}
//                                 addPost={addPost}
//                                 posts={state.profilePage.posts}
//                                 newPostBody={state.profilePage.newPostBody}/>
//                 }
//             }
//         </StoreContext.Consumer>
//     );
// }
const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostBody: state.profilePage.newPostBody,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onPostChange: (post) => {
            let action = onPostChangeActionCreator(post);
            dispatch(action);
        },
        addPost: () => dispatch(addPostActionCreator()),
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;