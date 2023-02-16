let state = {

    profilePage: {
        posts: [
            { id: 1, message: 'Hey!', likeCount: 1 },
            { id: 2, message: 'Hello!', likeCount: 104 },
            { id: 3, message: 'How are you?', likeCount: 25 },
            { id: 4, message: 'Blabla', likeCount: 802 }
        ]
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
        ]
    },
    sidebar: {
        names: [
            { id: 1, name: 'Oleg' },
            { id: 2, name: 'Kiril' },
            { id: 3, name: 'Vika' },
        ]
    }
}
export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likeCount: 0
    };
    state.profilePage.posts.push(newPost);
}


export default state;