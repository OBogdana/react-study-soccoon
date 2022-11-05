import React from "react";
import cs from "./Users.module.css";
import Avatar from "../../image/Avatar.png";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.limit);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <button className={props.page === p && cs.selectedPage} onClick={(event) => {
                        props.onPageChanged(p)
                    }}>{p}</button>
                })}
            </div>

            {
                props.users.map(u => <div key={u.id}>
                    <div className={cs.box}>
                        <div className={cs.userBox}>
                            <div>
                                <img src={u.ava != null ? u.ava : Avatar} className={cs.ava}/>
                            </div>
                            <div>{u.fullName}</div>
                            <div>
                                {u.followed ? <button onClick={() => {
                                        props.unfollow(u.id)
                                    }}> Геть з пляжу </button>
                                    : <button onClick={() => {
                                        props.follow(u.id)
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
