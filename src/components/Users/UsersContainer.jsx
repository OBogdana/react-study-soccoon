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
import axios from "axios";

class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get(`http://localhost:3001/users?_page=1&_limit=2`)
            .then(response => {
                this.props.setUsers(response.data);
                this.props.setTotalUsersCount(response.data.totalUsersCount);
            });
    }

    onPageChanged = (page) => {
        this.props.setActivePage(page);
        axios.get(`http://localhost:3001/users?_page=${page}&_limit=2`)
            .then(response => {
                this.props.setUsers(response.data);
            });
    }

    render() {
        return <Users totalUsersCount = {this.props.totalUsersCount}
                      limit = {this.props.limit}
                      page = {this.props.page}
                      onPageChanged = {this.onPageChanged}
                      users = {this.props.users}
                      unfollow = {this.props.unfollow}
                      follow = {this.props.follow}
        />
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

