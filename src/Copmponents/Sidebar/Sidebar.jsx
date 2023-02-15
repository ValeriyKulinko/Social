import React from "react";
import Friends from "./Friends/Friends";
import s from './Sidebar.module.css';

const Sidebar = (props) => {
    return (
        <div className={s.sidebar}>
            <Friends names={props.state.names} />
        </div>
    )
}

export default Sidebar;