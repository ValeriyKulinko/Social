import React from "react";
import s from './FriendList.module.css';

const FriendList = (props) => {
    return (
        <div className={s.item}>
            <img src="https://png.pngtree.com/png-vector/20191103/ourlarge/pngtree-handsome-young-guy-avatar-cartoon-style-png-image_1947775.jpg" />
            <div className={s.name}>{props.name}</div>
        </div>
    );
}

export default FriendList;