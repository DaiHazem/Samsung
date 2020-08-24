import React,{ useEffect} from "react";
import { connect } from "react-redux";
import * as action from "../Store/Index";
import styleselect from "./Select.css";


const selector=(props)=>{

    useEffect(()=>{
        props.onDataFetched();

    },[])
   //console.log(props.dataArray);
  
    const changedHandler=(event)=>{   
        //console.log(event.target.value);
        if(props.firstcompare){
          props.onCompareOne(event.target.value);
        }else{
          props.OnCompareTwo(event.target.value);
        }}

        const optionsArray=props.dataArray.map(el=>{

          return <option  value={el.DeviceName} key={el.DeviceName}>{el.DeviceName}</option>
          })
        
       
return(
<select    className={styleselect.Select}  
              firstcompare={props.firstcompare}
            onChange={(event)=>changedHandler(event)}>
                
                <option>Select a device</option> 
                   {optionsArray}
                   
                </select>

)}
const mapStateToProps=state=>{
    return {
      dataArray:state.reducer.dataArray
    }
}
const mapDispatchToProps=dispatch=>{
    return{
      onDataFetched:()=>dispatch(action.fetchData()),
      onCompareOne:(optionone)=>dispatch(action.compareoneHandler(optionone)),
      OnCompareTwo:(optiontwo)=>dispatch(action.comparetwoHandler(optiontwo))
    }}
export default connect(mapStateToProps,mapDispatchToProps)(selector);