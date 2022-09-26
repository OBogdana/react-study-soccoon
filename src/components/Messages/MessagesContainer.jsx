import React from "react";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/messagesReducer";
import Messages from "./Messages";
import StoreContext from "../../StoreContext";


const MessagesContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                let state = store.getState();

                let onSendMessageClick = () => store.dispatch(sendMessageActionCreator());

                let onNewMessageChange = (messageBody) => {
                    store.dispatch(updateNewMessageBodyActionCreator(messageBody));
                }
                return <Messages
                    updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick}
                    messagesPage={state.messagesPage}/>
                }
            }
        </StoreContext.Consumer>
    )
}


export default MessagesContainer;