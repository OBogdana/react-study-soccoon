const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';

let initialState = {
    users: [],
    pageSize: 3,
    totalUsersCount: 8,
    activePage: 1,
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u;
                }),
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u;
                }),
            };

        case SET_USERS:
            return {
                ...state, users: action.users,
            }
        case SET_ACTIVE_PAGE:
            return {
                ...state, activePage: action.activePage,
            }
        default:
            return state;

    }
}

export const followActionCreator = (userId) => ({type: FOLLOW, userId});
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId});
export const setUsersActionCreator = (users) => ({type: SET_USERS, users});
export const setActivePageActionCreator = (activePage) => ({type: SET_ACTIVE_PAGE, activePage});

export default usersReducer;