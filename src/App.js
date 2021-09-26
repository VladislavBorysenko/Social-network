import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/SideBar/Friends/Friends';
import {updateNewMessageText} from "./redux/state";


const App = (props) => {

    return (


        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/profile'
                       render={() => <Profile
                           profilePage={props.state.profilePage}
                           dispatch={props.dispatch}
                           addPost={props.addPost}
                           updateNewPostText={props.updateNewPostText}/>
                       }
                />
                <Route path='/dialogs'
                       render={() => <Dialogs
                           dialogsPage={props.state.dialogsPage}
                           dispatch={props.dispatch}
                           addMessage={props.addMessage}
                           messages={props.state.dialogsPage.messages}
                           updateNewMessageText={props.updateNewMessageText}/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/friends' component={Friends}/>
            </div>

        </div>

    );
}


export default App;
