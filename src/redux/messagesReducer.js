const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const messagesReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = ' ';
            state.messages.push({id: 5, message: body});
            return state;
        default:
            return state;
    }

}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE,});
export const updateNewMessageBodyActionCreator = (messageBody) => ({type: UPDATE_NEW_MESSAGE_BODY, body: messageBody,});

export default messagesReducer;