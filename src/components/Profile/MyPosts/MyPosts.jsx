import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/state";

const MyPosts = (props) => {

    let postElements =
        props.posts.map(post => <Post message={post.message}
                                      likeCount={post.likeCount}
                                      id={post.id}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        debugger;
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let newText = newPostElement.current.value;
        let action = updateNewPostActionCreator(newText)
        props.dispatch(action);
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>

            </div>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;