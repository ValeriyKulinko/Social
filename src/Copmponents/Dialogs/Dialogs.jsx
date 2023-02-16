import React from "react";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import s from './Dialogs.module.css';
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.state.messages.map(m => <Message message={m.message} />);
<<<<<<< HEAD

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }

=======
>>>>>>> 262004979f49da77f88d322da6ab5bcb5808f5a1
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
<<<<<<< HEAD
                <div><textarea ref={newMessageElement}></textarea></div>
                <div><button onClick={addMessage}>Add Message</button></div>
=======
>>>>>>> 262004979f49da77f88d322da6ab5bcb5808f5a1
            </div>
        </div>
    )
}

export default Dialogs;