import React from "react";
import {connect} from "react-redux";
import Users from "./UsersConteinerAPI";
import {
    followActionCreator,
    setActivePageActionCreator,
    setUsersActionCreator,
    unfollowActionCreator,
    setTotalUsersCountActionCreator,
} from "../../redux/usersReducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        limit: state.usersPage.limit,
        totalUsersCount: state.usersPage.totalUsersCount,
        page: state.usersPage.page,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        setActivePage: (page) => {
            dispatch(setActivePageActionCreator(page))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountActionCreator(totalUsersCount))
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Users);

