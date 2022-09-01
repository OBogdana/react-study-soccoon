import React from "react";
import cs from "./Messages.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";


const Messages = (props) => {

    let dialogsElements = props.data.dialogs.map(dialog => <DialogItem user={dialog.user} id={dialog.id} ava={dialog.ava}/>);
    let messagesElements = props.data.messages.map(message => <MessageItem message={message.message}/>);

    return (
        <div className={cs.messagesBox}>
            <div className={cs.dialogColumn}>
                {dialogsElements}
            </div>
            <div className={cs.messagesColumn}>
                {messagesElements}
            </div>

        </div>);
}


export default Messages;