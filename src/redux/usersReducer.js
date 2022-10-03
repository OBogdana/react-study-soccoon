const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState =  {
    users: [
        {
            id: 1,
            followed: false,
            ava: "https://cdn.meta.ua/meta_news/fa/01000ydd-fa29_1280x720.jpeg",
            fullName: "R",
            location: {area: "forest", }
        },
        {
            id: 2,
            followed: true,
            ava: "https://knowhow.pp.ua/wp-content/uploads/2020/05/unnamed-2.jpg",
            fullName: "T",
            location: {area: "forest", tree: "oak"},
        },
        {
            id: 3,
            followed: true,
            ava: "https://knowhow.pp.ua/wp-content/uploads/2020/05/unnamed-2.jpg",
            fullName: "OF",
            location: {area: "forest", tree: "oak"},
        },
        {
            id: 4,
            followed: false,
            ava: "https://knowhow.pp.ua/wp-content/uploads/2020/05/unnamed-2.jpg",
            fullName: "G",
            location: {area: "field", tree: "oak"},
        },
    ],
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:

            return {

            };

        case UNFOLLOW:
            return {

            };

        default:
            return state;

    }
}

export const followActionCreator = (userId) => ({type: FOLLOW, userId});
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId});

export default profileReducer;