import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>

            </div>
            <div className={classes.posts}>
                <Post message='Hi, haw are you?' counter='15'/>
                <Post message='It`s my first post' counter='20'/>

            </div>
        </div>
    )
}

export default MyPosts;