import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    setActivePage,
    setUsers,
    unfollow,
    setTotalUsersCount,
    toggleIsFetching,
} from "../../redux/usersReducer";
import axios from "axios";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`http://localhost:3001/users?_page=3&_limit=2`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data);
                this.props.setTotalUsersCount(response.data.totalUsersCount);
            });
    }

    onPageChanged = (page) => {
        this.props.setActivePage(page);
        this.props.toggleIsFetching(true);
        axios.get(`http://localhost:3001/users?_page=${page}&_limit=2`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data);
            });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   limit={this.props.limit}
                   page={this.props.page}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        limit: state.usersPage.limit,
        totalUsersCount: state.usersPage.totalUsersCount,
        page: state.usersPage.page,
        isFetching: state.usersPage.isFetching,
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setActivePage: (page) => {
//             dispatch(setActivePageAC(page))
//         },
//         setTotalUsersCount: (totalUsersCount) => {
//             dispatch(setTotalUsersCountAC(totalUsersCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         },
//
//     }
// }

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setActivePage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersContainer);

