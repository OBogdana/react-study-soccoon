import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.id;
        if(!userId) {
            userId = 1;
        }
        axios.get(`http://localhost:3001/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

//withRouter(ProfileContainer);(дослідити хуки і зробити)

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);