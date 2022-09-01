import React from "react";
// import cs from "./../Messages.module.css";
import cs from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/Messages/" + props.id;
    return (
        <div className={cs.item}>
            <div>
                <img src={props.ava} />
            </div>
            <div  className={cs.usersDialogs}>
                <NavLink to={path} className={cs.dialog}>{props.user}</NavLink>
            </div>

        </div>
    );
}


export default DialogItem;