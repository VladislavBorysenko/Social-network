
let store={}




let rerenderEntireTree = () => {
    console.log('state changed');
}

let state = {

    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you', likeCount: 13},
            {id: 2, message: 'This my first post', likeCount: 15},
            {id: 3, message: 'Hello word', likeCount: 10},
            {id: 4, message: 'Yo, whats up', likeCount: 3}
        ],
        newPostText: 'it-kamasutra.com'
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Pavel'},
            {id: 3, name: 'Vlad'},
            {id: 4, name: 'Andrey'},
            {id: 5, name: 'Maya'},
            {id: 6, name: 'Masha'}
        ],

        messages: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'Hi'},
            {id: 3, message: 'Whats up'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
            {id: 6, message: 'Yo'}
        ],
        newMessageText: 'new message'
    },
    sideBar: {},
    users: ['Dima', 'Masha'],
}

window.state = state;

export const addPost = () => {
    let newPost = {
        id: state.profilePage.posts.length + 1,
        message: state.profilePage.newPostText,
        likeCount: 0,
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}
export const updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const addMessage = () => {
    let newMessage = {

        id: state.dialogsPage.messages.length + 1,
        message: state.dialogsPage.newMessageText,

    }
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}
export const updateNewMessageText = (newTextMessage) => {

    state.dialogsPage.newMessageText = newTextMessage;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree=observer;
}
export default state;
