const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                ava: "https://emojigraph.org/media/mozilla/question-mark_2753.png",
                message: state.newPostBody,
                likeCount: 0,
            };
            state.posts.push(newPost);
            state.newPostBody = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostBody = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST,});
export const onPostChangeActionCreator = (post) => ({type: UPDATE_NEW_POST_TEXT, newText: post,});

export default profileReducer;