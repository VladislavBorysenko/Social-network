const ADD_MESSAGE = 'ADD-MESSAGE';

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
    // newMessageBody: ''
}

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD-MESSAGE':
            let body = action.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: state.messages.length + 1, message: body}]
            }
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody})

export default dialogReducer;