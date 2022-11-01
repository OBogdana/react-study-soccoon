import React from "react";
import cs from "./Users.module.css";
import axios from "axios";
import Avatar from "../../image/Avatar.png";
import Users from "./Users";

class UsersContainerAPI extends React.Component {
    componentDidMount() {
        axios.get(`http://localhost:3001/users?_page=2&_limit=2`)
            .then(response => {
                this.props.setUsers(response.data);
                this.props.setTotalUsersCount(response.data.totalUsersCount);
            });
    }

    onPageChanged = (page) => {
        this.props.setActivePage(page);
        axios.get(`http://localhost:3001/users?_page=${page}&_limit=2`)
            .then(response => {
                this.props.setUsers(response.data);
            });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.limit);
        let pages = [];

        for(let i=1; i<=pagesCount; i++) {
            pages.push(i);
        }

         return <Users />
        // (
        //     <div>
        //         <div>
        //             {pages.map( p => {
        //                 return <button className={this.props.page === p && cs.selectedPage} onClick={(event) => {this.onPageChanged(p)}}>{p}</button>
        //             })}
        //         </div>
        //
        //         {
        //             this.props.users.map(u => <div key={u.id}>
        //                 <div className={cs.box}>
        //                     <div className={cs.userBox}>
        //                         <div>
        //                             <img src={u.ava != null ? u.ava : Avatar} className={cs.ava}/>
        //                         </div>
        //                         <div>{u.fullName}</div>
        //                         <div>
        //                             {u.followed ? <button onClick={() => {
        //                                     this.props.unfollow(u.id)
        //                                 }}> Геть з пляжу </button>
        //                                 : <button onClick={() => {
        //                                     this.props.follow(u.id)
        //                                 }}>Подати лапу</button>}
        //                         </div>
        //                     </div>
        //
        //                     <div className={cs.infoBox}>
        //                         <div>
        //                             {u.location.area}
        //                         </div>
        //
        //                     </div>
        //                 </div>
        //
        //             </div>)
        //         }
        //     </div>
        // );
    }
}

export default UsersContainerAPI;