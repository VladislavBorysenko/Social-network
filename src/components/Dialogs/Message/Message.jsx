import classes from "../Dialogs.module.css";
import React from 'react';

const Message = (props) => {

    return (
        <div className={classes.messages}>
            {props.message}</div>
    )
}

export default Message