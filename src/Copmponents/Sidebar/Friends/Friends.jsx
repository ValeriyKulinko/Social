import React from "react";
import FriendList from "./FriendList/FriendList";
import s from './Friends.module.css';


const Friends = (props) => {

    let namesElements = props.names.map(f => <FriendList name={f.name} />);

    return (
        <div className={s.friendsBlock}>
            <h2>Friends</h2>
            <div className={s.item}>
                {namesElements}
            </div>
        </div >
    );
}

export default Friends;