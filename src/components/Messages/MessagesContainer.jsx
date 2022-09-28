import React from "react";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";

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