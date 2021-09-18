import React from "react";
import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id

    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLuXVl1Pew5GJfXuoPEsLmSA-5fG-CerC-SA&usqp=CAU'/>
                {props.name}</NavLink>
        </div>
    )
}

export default DialogItem