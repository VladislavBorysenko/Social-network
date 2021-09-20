let state = {

    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you', likeCount: 13},
            {id: 2, message: 'This my first post', likeCount: 15},
            {id: 3, message: 'Hello word', likeCount: 10},
            {id: 4, message: 'Yo, whats up', likeCount: 3}
        ]
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
        ]
    },
    sideBar: {},

    users: ['Dima', 'Masha'],
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likeCount: 2,
    }
    state.profilePage.posts.push(newPost)
}

export default state;
