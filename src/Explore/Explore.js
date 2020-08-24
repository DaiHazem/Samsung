import React, {useEffect, useState, useCallback} from "react";
//import axios from "axios";
import {connect} from "react-redux";
import styleexplore from "./Explore.css";
import * as action from "../Store/Index";
import MainImage from "../assets/Images/Image";
import Spinner from "../Spinner/Spinner";
import { Card } from 'react-bootstrap';
import Aux from "../hoc/Auxiliary";
import Modal from "../UI/Modaal/Modaal";
//import { loadinghandler } from "../Store/Action";

//let output;
let loadmirr=false;

const explore=(props)=>{
  const [show,setShowState]=useState(false);
  const [element,setElementState]=useState(null);
  const [load,setLoadingState]=useState(true);
  useEffect(()=>{
    props.onDataFetched();
  
},[]);  


  window.addEventListener('scroll', useCallback( (event)=>{
     
     var cards=document.getElementById("Card");
     if(cards !==null){
     var height=cards.scrollHeight;
     if( (!loadmirr) && (window.pageYOffset+document.documentElement.clientHeight > height))
    {  event.stopPropagation();
      props.onLoading();}}
    
  },[loadmirr, window.pageYOffset]));
         
  
  
  const loadHandler=()=>{
    props.onLoading();
     
  }
   
  
   const showHandler=(el)=>{
     setShowState(true);
     setElementState(el);
   }

   const cancelHandler=()=>{
    setShowState(false);
    setElementState(null);
  }
  let specOutput=null;
  if(element){
   // console.log(element);
   const sliced = Object.fromEntries(
    Object.entries(element).slice(0, 10)
);
//console.log(sliced);
    
     specOutput=Object.keys(sliced).map(el=>{
      return <div className={styleexplore.Div} key={el}><span>{el}:</span>{sliced[el]}</div>
        
        
      }
    )}
    
  
   const outputDevices=props.data.map(el=>{
     
  
     return( <Aux>
      <Card  className={styleexplore.Grid} style={{ width: '23rem' }}>
      <figure className={styleexplore.Fig}>
      <MainImage className={styleexplore.Img} title={el.DeviceName}/>
      </figure>
      <Card.Body >
      <Card.Title className={styleexplore.Span1}>{el.Brand}</Card.Title>
        <Card.Text className={styleexplore.Span2}>
          {el.DeviceName}
        </Card.Text>
        <button onClick={()=>showHandler(el)}
         className={styleexplore.Button} >Show more</button>
      </Card.Body>
    </Card>
    <Modal cancel={cancelHandler}
    show={show}>
        {specOutput}
    </Modal> </Aux>
     )});

     
    
     let output=(<Aux>
       {outputDevices}

      </Aux>
      )
     ;
     let loader=props.toggle;
     if(loadmirr !== loader){
      setLoadingState(!props.toggle);
      loadmirr=loader;
      
     }
     
     
   if(props.error){
     output=<p>Devices can't be loaded</p>
   }
   if(props.loading){
     output=<Spinner/>;
   }
  
  let tab=( props.toggle? <div className={styleexplore.Wrap}><button id="BTN" className={styleexplore.Tab} onClick={loadHandler}>Load More</button></div>:null
  );
  
    return (<div id="Card">
    {output}
    {tab}
      </div>)

     

    
}

const mapStateToProps=state=>{
  return {
    dataArray:state.reducer.dataArray,
    error:state.reducer.error,
    loading:state.reducer.loading,
    data:state.reducer.data,
    toggle:state.navreducer.toggle,
    load:state.navreducer.load,
    turn:state.reducer.turn

  }
}
const mapDispatchToProps=dispatch=>{
  return{
    onDataFetched:()=>dispatch(action.fetchData()),
    onLoading:()=>dispatch(action.loadData()),
    onScrolling:(turn)=>dispatch(action.toggleScroll(turn))
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(explore);