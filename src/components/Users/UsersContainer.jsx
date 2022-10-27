import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
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
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        activePage: state.usersPage.activePage,
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
        setActivePage: (pageNumber) => {
            dispatch(setActivePageActionCreator(pageNumber))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountActionCreator(totalUsersCount))
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Users);

