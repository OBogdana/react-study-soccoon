import React from "react";
import cs from "./../Messages.module.css";



const MessageItem = (props) => {
    return (
        <div className={cs.message}>{props.message}</div>
    );
}


export default MessageItem;