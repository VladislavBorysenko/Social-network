const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {

    _state: {
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
    },

    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        debugger;
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 0,                              //this._state.profilePage.posts.length + 1,
                message: this._state.profilePage.newPostText,
                likeCount: 0,
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: this._state.dialogsPage.messages.length + 1,
                message: this._state.dialogsPage.newMessageText,
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newTextMessage;
            this._callSubscriber(this._state);

        }
    },

}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostActionCreator = (newText) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export const updateNewMessageTextActionCreator = (newTextMessage) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newTextMessage: newTextMessage
    }
}

export default store;
window.store = store;
