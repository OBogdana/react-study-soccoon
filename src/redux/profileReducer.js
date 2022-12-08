const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    posts: [
        {
            id: 1,
            ava: "https://cdn.meta.ua/meta_news/fa/01000ydd-fa29_1280x720.jpeg",
            message: "AAAAAAAAAAAAAAAAAA-post",
            likeCount: 9,
        },

        {
            id: 2,
            ava: "https://knowhow.pp.ua/wp-content/uploads/2020/05/unnamed-2.jpg",
            message: "BBBBBBBBBBBBBBBBBB-post",
            likeCount: 3,
        },
    ],
    newPostBody: 'What do you say?',
    profile: {},
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                ava: "https://emojigraph.org/media/mozilla/question-mark_2753.png",
                message: state.newPostBody,
                likeCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost,],
                newPostBody: '',
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostBody: action.newText,
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };

        default:
            return state;

    }
}

export const addPostActionCreator = () => ({type: ADD_POST,});
export const onPostChangeActionCreator = (post) => ({type: UPDATE_NEW_POST_TEXT, newText: post,});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export default profileReducer;