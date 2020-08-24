import React from "react";
import styletoolbar from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import Navigationitems from "../NavigationItems/NavigationItems";
import Drawertoggle from "../SideDrawer/DrawerToggle/DrawerToggle";
 
const toolbar=(props)=>{  
    return (
    <header className={styletoolbar.Toolbar}> 
        <Drawertoggle  dashbarclicked={props.click}/>
          
       <nav className={styletoolbar.DesktopOnly}>
        <Navigationitems />
       </nav>
       <div className={styletoolbar.Logo}>
       <Logo/>
       </div>  

    </header>
)
}


export default toolbar;