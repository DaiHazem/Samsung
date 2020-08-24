import React from "react";
import styleitem from "./NavigationItem.css";

import { NavLink } from 'react-router-dom';

const navigationitem=(props)=>{
    return (
        <li  className={styleitem.NavigationItem}>
             <NavLink className={styleitem.Item}
            to={props.link}
            exact={props.exact}
            activeClassName={styleitem.active}>{props.children}</NavLink>
            </li>
    )

}


export default navigationitem;