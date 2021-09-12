import React from "react";
import classes from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name='Dimych' id='1'/>
                <DialogItem name='Pavel' id='2'/>
                <DialogItem name='Vlad' id='3'/>
                <DialogItem name='Andrey' id='4'/>
                <DialogItem name='Maya' id='5'/>
                <DialogItem name='Masha' id='6'/>

            </div>
            <div className={classes.messages}>
                <div className={classes.dialog}> Haw is your bike?</div>
                <div className={classes.dialog}> Hi</div>
                <div className={classes.dialog}> Yo</div>
            </div>
        </div>

    )
}

export default Dialogs;