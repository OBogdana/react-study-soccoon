import React from "react";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";


// const MessagesContainer = (props) => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                 let state = store.getState();
//
//                 let onSendMessageClick = () => store.dispatch(sendMessageActionCreator());
//
//                 let onNewMessageChange = (messageBody) => {
//                     store.dispatch(updateNewMessageBodyActionCreator(messageBody));
//                 }
//                 return <Messages
//                     updateNewMessageBody={onNewMessageChange}
//                     sendMessage={onSendMessageClick}
//                     messagesPage={state.messagesPage}/>
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }
const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (messageBody) => {dispatch(updateNewMessageBodyActionCreator(messageBody))},
        sendMessage: () => {dispatch(sendMessageActionCreator())},
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps) (Messages);

export default MessagesContainer;