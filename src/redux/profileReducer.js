const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer=(state,action)=>{

    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likeCount: 0,
            }
            state.posts.push(newPost);
            state.newPostText = '';
            break;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText;
            break;
    }
    return state;
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = (newText) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    }
}

export default profileReducer;