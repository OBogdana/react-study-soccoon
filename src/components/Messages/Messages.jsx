import React from "react";
import cs from "./Messages.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";


const Messages = (props) => {

    let dialogsElements = props.messagesPage.dialogs.map(dialog => <DialogItem user={dialog.user} id={dialog.id}
                                                                               ava={dialog.ava}/>);
    let messagesElements = props.messagesPage.messages.map(message => <MessageItem message={message.message}/>);

    let newMessageBody = props.messagesPage.newMessageBody;

    let sendMessageClick = () => {
        props.sendMessage();
    }
    let newMessageChange = (event) => {
        let messageBody = event.target.value;
        props.updateNewMessageBody(messageBody);
    }

    return (
        <div className={cs.messagesBox}>
            <div className={cs.dialogColumn}>
                {dialogsElements}
            </div>
            <div className={cs.messagesColumn}>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <div>
                        <textarea value={newMessageBody} onChange={newMessageChange} className={cs.message}
                                  placeholder='Напиши повідомлення'/>
                    </div>
                    <div>
                        <button className={cs.button} onClick={sendMessageClick}>SEND</button>
                    </div>
                </div>
            </div>


        </div>);
}


export default Messages;