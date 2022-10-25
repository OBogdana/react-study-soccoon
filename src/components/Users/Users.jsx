import React from "react";
import cs from "./Users.module.css";
import axios from "axios";
import Avatar from "../../image/Avatar.png";

class Users extends React.Component {
    constructor(props) {
        super(props);
        axios.get("http://localhost:3001/users")
            .then(response => {
                this.props.setUsers(response.data);
                    });
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(u => <div key={u.id}>
                        <div className={cs.box}>
                            <div className={cs.userBox}>
                                <div>
                                    <img src={u.ava != null ? u.ava : Avatar} className={cs.ava}/>
                                </div>
                                <div>{u.fullName}</div>
                                <div>
                                    {u.followed ? <button onClick={() => {
                                            this.props.unfollow(u.id)
                                        }}> Геть з пляжу </button>
                                        : <button onClick={() => {
                                            this.props.follow(u.id)
                                        }}>Подати лапу</button>}
                                </div>
                            </div>

                            <div className={cs.infoBox}>
                                <div>
                                    {"u.location.area"}
                                </div>

                            </div>
                        </div>

                    </div>)
                }
            </div>
        );
    }
}

export default Users;