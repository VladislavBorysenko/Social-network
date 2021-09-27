import profileReducer from "./profileReducer";
import dialogReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
            newMessageText: ' '
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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);

        this._callSubscriber(this._state);
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
export const updateNewMessageTextActionCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        body: body,
    }
}

export default store;
window.store = store;
