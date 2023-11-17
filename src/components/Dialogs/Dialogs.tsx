import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {store} from "../../redux/store";
import {DialogsType, MessageType} from "../../redux/dialogs-reducer";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validator";
import {DialogsPropsType} from "./DialogsContainer";


const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsPage = store.getState().dialogsPage

    let dialogsItem = dialogsPage.dialogs
        .map((dialogs: DialogsType, index) => <DialogItem key={index}
                                                          name={dialogs.name}
                                                          id={dialogs.id}/>)
    let messageItem = dialogsPage.messages
        .map((message: MessageType, index) => <Message key={index}
                                                       message={message.title}/>)

    const addNewMessage = (values: any) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItem}
            </div>
            <div className={s.messages}>
                <div>{messageItem}</div>
            </div>
            <AddMessageReduxForm onSubmit={addNewMessage}/>
        </div>
    )
}

const maxLength = maxLengthCreator(100)

const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea}
                       name={'newMessageBody'}
                       placeholder={'Enter your message'}
                       validate={[required, maxLength]}
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({form: 'dialogsAddMessageForm'})(AddMessageForm)

export default Dialogs