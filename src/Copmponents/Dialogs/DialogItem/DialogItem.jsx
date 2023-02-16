import React from "react";
import { NavLink } from "react-router-dom";
import s from './../Dialogs.module.css';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div div className={s.dialog} >
            <img src="https://png.pngtree.com/png-vector/20191103/ourlarge/pngtree-handsome-young-guy-avatar-cartoon-style-png-image_1947775.jpg" />
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;