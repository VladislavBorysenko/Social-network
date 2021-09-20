import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

    let dialogElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElement = props.state.messages.map(m => <Message message={m.message}/>)

    let newMessage = React.createRef()

    let addPost = () => {
        let text = newMessage.current.value;
        alert(text)
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
                    <textarea ref={newMessage}></textarea></div>
                <div>
                    <button onClick={addPost}>Send</button>
                </div>
            </div>
        </div>

    )
}

export default Dialogs;