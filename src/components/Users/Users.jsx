import React from "react";
import cs from "./Users.module.css"
import axios from "axios";

const Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("http://localhost:3001/users").then(response => {
                props.setUsers(response.data);
                console.log(response.data)
            });
        }
    }

    return (
        <div>
            <button onClick={getUsers}>Зиркнути на користувачів</button>
            {
                props.users.map(u => <div key={u.id}>
                    <div className={cs.box}>
                        <div className={cs.userBox}>
                            <div>
                                <img src={u.ava} className={cs.ava}/>
                            </div>
                            <div>{u.fullName}</div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => {
                                        props.follow(u.id)
                                    }} className={cs.buttonUnfollow}> Геть з пляжу </button>
                                    : <button onClick={() => {
                                        props.unfollow(u.id)
                                    }}>Подати лапу</button>
                                }
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