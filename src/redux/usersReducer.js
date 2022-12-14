const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    users: [],
    limit: 2,
    totalUsersCount: 0,
    page: 1,
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
            };
        case SET_ACTIVE_PAGE:
            return {
                ...state, page: action.page,
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.count,
            };
        default:
            return state;

    }
}

export const followActionCreator = (userId) => ({type: FOLLOW, userId});
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId});
export const setUsersActionCreator = (users) => ({type: SET_USERS, users});
export const setActivePageActionCreator = (page) => ({type: SET_ACTIVE_PAGE, page});
export const setTotalUsersCountActionCreator = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});

export default usersReducer;