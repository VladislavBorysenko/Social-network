const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

 const dialogReducer = (state, action) => {

     switch (action.type) {
         case 'ADD-MESSAGE':
             let body = state.newMessageText;
             state.messages.push({
                 id: state.messages.length + 1,
                 message: body
             });
             state.newMessageText = '';
             break;
         case 'UPDATE-NEW-MESSAGE-TEXT':
             state.newMessageText = action.body;
             break;
     }
     return state;
}

export default dialogReducer;