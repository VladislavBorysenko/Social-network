const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
    newMessageText: ''
}

const dialogReducer = (state = initialState, action) => {

    let stateCopy;

    debugger;

    switch (action.type) {
        case 'ADD-MESSAGE':
            let body = state.newMessageText;
            stateCopy = {
                ...state,
                newMessageText: '',
                messages: [...state.messages,{id: state.messages.length + 1, message: body}]
            }
            return stateCopy;

        case 'UPDATE-NEW-MESSAGE-TEXT':
            stateCopy = {
                ...state,
                newMessageText: action.body
            };
            return stateCopy;
    }
    return state;
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        body: body,
    }
}

export default dialogReducer;