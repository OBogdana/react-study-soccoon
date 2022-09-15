const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


let store = {
    _state: {
        profilePage: {
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
        },
        messagesPage: {
            dialogs: [
                {id: 10, user: 'FOX', ava: "https://cdn.meta.ua/meta_news/fa/01000ydd-fa29_1280x720.jpeg",},
                {
                    id: 11,
                    user: 'WOLF',
                    ava: "https://mybookshelf.com.ua/assets/images/products/14904/small/6e592111895fa9756622abb46819334e.webp",
                },
                {id: 12, user: 'OWL', ava: "https://knowhow.pp.ua/wp-content/uploads/2020/05/unnamed-2.jpg",},
                {id: 13, user: 'COW', ava: "https://static.gazeta.ua/img/cache/preview/436/436531_w_300.jpg?v=0",},
                {
                    id: 14,
                    user: 'KAT',
                    ava: "https://geek-point.com.ua/image/cache//data/stiker/ukraine/12/e1ff19974ced1b694d932ca1148762fc-600x500.jpg",
                },
                {
                    id: 15,
                    user: 'BEAVER',
                    ava: "https://i2-prod.dailystar.co.uk/incoming/article27729935.ece/ALTERNATES/s615b/0_North-American-Beaver.jpg",
                },
                {id: 16, user: 'CROW', ava: "https://www.volynnews.com/files/posts/2019/07-26/crows-08.jpg",},
            ],

            messages: [
                {id: 1, message: 'AAAAAAAAAAAAAAAA'},
                {id: 2, message: 'BBBBBBBBBB'},
                {id: 3, message: 'Kar'},
                {id: 4, message: 'Whaaaat?'},
            ],
            newMessageBody: '',
        },

    },
    _rerenderPage() {
        console.log('Видалили файл render.js');
    },

    subscribe(observer) {
        this._rerenderPage = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                ava: "https://emojigraph.org/media/mozilla/question-mark_2753.png",
                message: this._state.profilePage.newPostBody,
                likeCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostBody = '';
            this._rerenderPage();
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostBody = action.newText;
            this._rerenderPage();
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.messagesPage.newMessageBody = action.body;
            this._rerenderPage(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.messagesPage.newMessageBody;
            this._state.messagesPage.newMessageBody = ' ';
            this._state.messagesPage.messages.push({id: 5, message: body});
            this._rerenderPage(this._state);
        }
    }

}


export const addPostActionCreator = () => ({type: ADD_POST,});
export const onPostChangeActionCreator = (post) => ({type: UPDATE_NEW_POST_TEXT, newText: post,});
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE,});
export const updateNewMessageBodyActionCreator = (messageBody) => ({type: UPDATE_NEW_MESSAGE_BODY, body: messageBody,});

export default store;
window.state = store;