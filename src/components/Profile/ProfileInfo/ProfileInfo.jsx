import React from 'react';
import cs from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div className={cs.userBox}>
            <div>
                <img src="https://inlviv.in.ua/wp-content/uploads/2017/10/yenot.jpg"/>
            </div>
            <div className={cs.infoBox}>
                <img
                    src="https://naurok-test2.nyc3.digitaloceanspaces.com/uploads/test/1220026/895968/416356_1617808427.jpg?"/>
                <div className={cs.textBox}>Description</div>
            </div>


        </div>
    );

}

export default ProfileInfo;