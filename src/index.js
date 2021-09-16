import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'Hi, how are you', likeCount: 13},
    {id: 2, message: 'This my first post', likeCount: 15},
    {id: 3, message: 'Hello word', likeCount: 10},
    {id: 4, message: 'Yo, whats up', likeCount: 3}
]

let dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Pavel'},
    {id: 3, name: 'Vlad'},
    {id: 4, name: 'Andrey'},
    {id: 5, name: 'Maya'},
    {id: 6, name: 'Masha'}
]

let messages= [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'Hi'},
    {id: 3, message: 'Whats up'},
    {id: 4, message: 'Yo'}
]

ReactDOM.render(
    <React.StrictMode>
        <App posts={posts} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
