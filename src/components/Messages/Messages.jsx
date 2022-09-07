import React from "react";
import cs from "./Messages.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";


const Messages = (props) => {

    let dialogsElements = props.messagesPage.dialogs.map(dialog => <DialogItem user={dialog.user} id={dialog.id}
                                                                       ava={dialog.ava}/>);
    let messagesElements = props.messagesPage.messages.map(message => <MessageItem message={message.message}/>);

    let newMessageElement = React.createRef();

    let documentWriteMessage = () => {
        let message = newMessageElement.current.value;
        document.write(message);
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
                        <textarea ref={newMessageElement}/>
                    </div>
                    <div>
                        <button onClick={documentWriteMessage}>to send</button>
                    </div>
                </div>
            </div>


        </div>);
}


export default Messages;