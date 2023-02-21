let rerenderEntireTree = () => {
    console.log('state changed');
}

let state = {

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
}
// Add and update posts
export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}
//Add and update messages
export const addMessage = () => {
    let newMessage = {
        id: 7,
        message: state.dialogsPage.newMessageText,
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}
export const updateNewMessageText = (newMessage) => {
    state.dialogsPage.newMessageText = newMessage;
    rerenderEntireTree(state);
}
export const subscribe = (observer) => {
    rerenderEntireTree(observer);
}
export default state;