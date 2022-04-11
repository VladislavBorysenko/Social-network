import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you', likeCount: 13},
        {id: 2, message: 'This my first post', likeCount: 15},
        {id: 3, message: 'Hello word', likeCount: 10},
        {id: 4, message: 'Yo, whats up', likeCount: 3}
    ],
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: state.posts.length + 1,
                message: action.newPostText,
                likeCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }

        case 'SET-STATUS': {
            return {
                ...state,
                status: action.status
            }
        }
        case 'SET-USER-PROFILE': {
            return {...state, profile: action.profile}
        }

        default:
            return state;
    }

}

//action creators
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

//thunks
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
};

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        });
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        });
}

export default profileReducer;