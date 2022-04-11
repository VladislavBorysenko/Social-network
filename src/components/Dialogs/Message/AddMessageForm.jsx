import {Field, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";


let maxLength100 = maxLengthCreator(100)
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength100]}
                       name="newMessageBody"
                       placeholder="Enter new message"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);