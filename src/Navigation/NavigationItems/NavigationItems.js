import React ,{useState} from "react";
import styleitems from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import {connect} from "react-redux";
import Aux from "../../hoc/Auxiliary";
import * as action from "../../Store/Index";

import Modal from "../../UI/Modaal/Modaal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOff } from '@fortawesome/free-solid-svg-icons'
//import Backdrop from "../../UI/Backdrop/Backdrop";
import { faToggleOn } from '@fortawesome/free-solid-svg-icons'

const navigationitems=(props)=>{
  const [open,setOpenState]=useState(false);
  const [device,setDeviceState]=useState(null);
  
const clickHandler=()=>{
  const value=!props.toggle;
  props.onTab(value);
}

  const changedHandler=(event)=>{   
    //console.log(event.target.value);
    const value=event.target.value;
    setOpenState(true);
    let theObject = props.dataArray.find(obj => {
      return obj.DeviceName === value
    });
    setDeviceState(theObject);
  }

  const cancelHandler=()=>{
   setOpenState(false);
   setDeviceState(null);
 }

let icons=(props.toggle? <FontAwesomeIcon icon={faToggleOn}/>
  :<FontAwesomeIcon icon={faToggleOff}/>
  )



 let spec=null;
 if(device){
  const sliced = Object.fromEntries(
   Object.entries(device).slice(0, 10)
);
   
    spec=Object.keys(sliced).map(el=>{
     return <div className={styleitems.Div} key={el}><span>{el}:</span>{sliced[el]}</div>
     }
   )}
   


  const optionsArray=props.dataArray.map(el=>{
    
  return <option  value={el.DeviceName} key={el.DeviceName}>{el.DeviceName}</option>
  })
  
    return ( <Aux>
       <ul className={styleitems.NavigationItems}>
           <NavigationItem link="/" active= {props.active} exact>Explore</NavigationItem>
           <NavigationItem link="/compare" active={props.active}>Compare</NavigationItem>
           
           <div className={styleitems.Dropdown}>
          <button className={styleitems.Dropbtn}>
            Settings
            <i className={styleitems.Down}>&#9660;</i>
          </button>
          <div className={styleitems.Content}>
          <button className={styleitems.Button} onClick={clickHandler}>Load More Tab
    <span>{icons}</span>
          </button>
          <select   className={styleitems.InputElement}         
            onChange={(event)=>changedHandler(event)}>
                
                <option>Select a device</option> 
                   {optionsArray}
                   
                </select>
          </div>
          </div>  
           </ul>

           <Modal cancel={cancelHandler}
           show={open}>
               {spec}
           </Modal>

           </Aux>

    )



}
const mapStateToProps=state=>{
  return {
    dataArray:state.reducer.dataArray,
    error:state.reducer.error,
    loading:state.reducer.loading,
    toggle:state.navreducer.toggle
    
  }
}
const mapDispatchToProps=dispatch=>{
  return{
    onTab:(value)=>dispatch(action.toggleButton(value))
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(navigationitems);


