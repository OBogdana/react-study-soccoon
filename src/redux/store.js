import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";


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
        console.log('something has changed^_^');
    },

    subscribe(observer) {
        this._rerenderPage = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);

        this._rerenderPage(this._state);

    }
}

export default store;
window.state = store;