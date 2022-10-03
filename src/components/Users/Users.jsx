import React from "react";
import cs from "./Users.module.css"

const Users = (props) => {
    return (
        <div className={cs.box}>
            {
                props.users.map(u => <div key={u.id}>
                    <div>
                        <img/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {props.follow(u.id)}}>UNFOLLOW</button> :
                        <button onClick={() => {props.unfollow(u.id)}}>FOLLOW</button>}
                    </div>
                    <div>
                        <h2>Info</h2>
                    </div>
                </div>)
            }
        </div>
    );
}

export default Users;