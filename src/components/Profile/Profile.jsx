import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Post from "./MyPosts/Post/Post";

const Profile = () => {
    return (<div className={classes.content}>
        <div>
            <img
                src='https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg'/>
        </div>
        <div>
            ava + description
        </div>
        <MyPosts/>

    </div>)
}

export default Profile;