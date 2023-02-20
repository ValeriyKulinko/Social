import React from "react";
import Navbar from "../Navbar/Navbar";
import Friends from "./Friends/Friends";
import s from './Sidebar.module.css';

const Sidebar = (props) => {
    return (
        <div className={s.sidebar}>
            <Navbar />
            <Friends names={props.state.names} />
        </div>
    )
}

export default Sidebar;