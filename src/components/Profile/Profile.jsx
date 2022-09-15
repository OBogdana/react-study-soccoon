import React from 'react';
import cs from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage}
                     newPostBody={props.profilePage.newPostBody}
                     dispatch={props.dispatch}/>
        </div>
    );
}

export default Profile;