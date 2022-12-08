import React from 'react';
import cs from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }

    return (
        <div className={cs.userBox}>
            <div>
                <img src="https://inlviv.in.ua/wp-content/uploads/2017/10/yenot.jpg"/>
            </div>
            <div className={cs.infoBox}>
                <img
                    src={props.profile.ava}/>
                <div className={cs.textBox}>Description</div>
            </div>


        </div>
    );

}

export default ProfileInfo;