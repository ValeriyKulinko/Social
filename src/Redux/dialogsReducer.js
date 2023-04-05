const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        { id: 1, name: 'Vova' },
        { id: 2, name: 'Oleg' },
        { id: 3, name: 'Mary' },
        { id: 4, name: 'Alex' },
        { id: 5, name: 'Olya' },
        { id: 6, name: 'Max' }
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hey there' },
        { id: 3, message: 'Where are you' },
        { id: 4, message: 'How are you' },
        { id: 5, message: 'Wazzap' },
        { id: 6, message: 'Ho-ho' }
    ],
    newMessageText: 'put here your message'
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 7,
                message: state.newMessageText,
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state;
    }
}
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateNewMessageTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text })

export default dialogsReducer;