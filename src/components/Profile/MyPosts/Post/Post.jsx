import React from "react";
import classes from './Post.module.css';


const Post = (props) => {

    return (<div className={classes.item}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLuXVl1Pew5GJfXuoPEsLmSA-5fG-CerC-SA&usqp=CAU'/>
        {props.message}
        <div className={classes.item}>
           <span>like {props.counter}</span>
        </div>
    </div>)
}

export default Post;