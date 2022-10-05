import React from "react";
import cs from "./Users.module.css"
import * as axios from "axios";

const Users = (props) => {
    if (props.users.length === 0) {
        axios.get("///").then(response => {
            props.setUsers(response.data.items);
        });
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <div className={cs.box}>
                        <div className={cs.userBox}>
                            <div>
                                <img src={u.ava} className={cs.ava}/>
                            </div>
                            <div>{u.fullName}</div>
                            <div>
                                {u.followed ? <button className={cs.buttonUnfollow} onClick={() => {
                                        props.follow(u.id)
                                    }}>Геть з пляжу</button> :
                                    <button className={cs.buttonFollow} onClick={() => {
                                        props.unfollow(u.id)
                                    }}>Подати лапу</button>}
                            </div>
                        </div>

                        <div className={cs.infoBox}>
                            <div>
                                {u.location.area}
                            </div>

                        </div>
                    </div>

                </div>)
            }
        </div>
    );
}

export default Users;