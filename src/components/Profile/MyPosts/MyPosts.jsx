import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {
    maxLengthCreator,
    required
} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

let maxLength = maxLengthCreator(30)

let AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name="newPostText"
                   placeholder={"Post message"}
                   component={Textarea}
                   validate={[required, maxLength]}/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>;
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} id={p.id}/>);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>

    )
}

export default MyPosts;