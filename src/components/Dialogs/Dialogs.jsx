import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messageElement = state.messages.map(m => <Message message={m.message} key={m.id}/>);
    let newMessageBody = state.newMessageText;

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageText(body);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                {messageElement}
            </div>
            <div className={classes.sendMessage}>
                <div>
                     <textarea placeholder='Enter new message'
                              value={newMessageBody}
                              onChange={onMessageChange}
                    />
                </div>
                <div>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;