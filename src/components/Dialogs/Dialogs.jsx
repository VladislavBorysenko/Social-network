import React from "react";
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElement = props.messages.map(m => <Message message={m.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                {messageElement}
            </div>
        </div>

    )
}

export default Dialogs;