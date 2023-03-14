
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {

        profilePage: {
            posts: [
                { id: 1, message: 'Hey!', likeCount: 1 },
                { id: 2, message: 'Hello!', likeCount: 104 },
                { id: 3, message: 'How are you?', likeCount: 25 },
                { id: 4, message: 'Blabla', likeCount: 802 }
            ],
            newPostText: 'add your post'
        },

        dialogsPage: {
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
        },
        sidebar: {
            names: [
                { id: 1, name: 'Oleg' },
                { id: 2, name: 'Kiril' },
                { id: 3, name: 'Vika' },
            ]
        }
    },
    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    // Add and update posts
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    //Add and update messages
    addMessage() {
        let newMessage = {
            id: 7,
            message: this._state.dialogsPage.newMessageText,
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newMessage) {
        this._state.dialogsPage.newMessageText = newMessage;
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 7,
                message: this._state.dialogsPage.newMessageText,
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newMessage;
            this._callSubscriber(this._state);
        }
    }
}
export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })




export default store;