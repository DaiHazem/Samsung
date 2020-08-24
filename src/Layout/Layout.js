import React ,{ useState} from "react";
import Aux from "../hoc/Auxiliary";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Sidedrawer from "../Navigation/SideDrawer/SideDrawer" ;
import stylelayout from "./Layout.css";
//import Backdrop from "../UI/Backdrop/Backdrop";

const layout=(props)=>{
    const [isSidebarVisible, setSidebar]=useState(false);
    const openSidebar=()=>{
        setSidebar(!isSidebarVisible);
    }

    const closeSidebar=()=>{
        setSidebar(false);
    }

    return(
    <Aux>
        <Toolbar click={openSidebar}/>
        <Sidedrawer cancelled={closeSidebar} 
          show={isSidebarVisible} />
          <main className={stylelayout.Main}>{props.children}</main>

    </Aux>
)
}

export default layout;
 