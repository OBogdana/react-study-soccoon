import React from "react";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/messagesReducer";
import Messages from "./Messages";


const MessagesContainer = (props) => {

    let state = props.store.getState();

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let onNewMessageChange = (messageBody) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(messageBody));
    }

    return <Messages updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
                     messagesPage={state.messagesPage}/>
}


export default MessagesContainer;