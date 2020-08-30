import React ,{useState, useEffect}from "react";
import stylecompare from "./Compare.css";
import {connect} from "react-redux";
import Selector from "./Select";
//import MainImage from "../assets/Images/Image";
import Modal from "../UI/Modaal/Modaal";

const compare=(props)=>{
  const [show,setShowState]=useState(false);
  const [opened,setOpenState]=useState(false);
  const [vari, setVariState]=useState(0);
  const[specoutputone,setSpecOneState]=useState(null);
  const[specoutputtwo,setSpecTwoState]=useState(null);
  
  const images=[
    {id:"1",src:require("../assets/Images/pic.jpg"),alt:"Mobile"},
    {id:"2",src:require("../assets/Images/pic2.jpg"),alt:"Mobile"}]
  const imageElement= images.map(({id,src,alt})=><img className={stylecompare.Img} key={id} src={src}  alt={alt} />)
  let imageOutput=imageElement[vari];
  
useEffect(()=>{

  setTimeout(()=>{

    if(vari<1){
        setVariState(1);
    }else{
        setVariState(0);
    }
    imageOutput=imageElement[vari];


  },5000)

},[vari]);


 const comparisonHandler=()=>{
  setShowState(true);
  setOpenState(true);
  //console.log(props.element);
  const devarrone= props.dataArray.find(obj => {
      return obj.DeviceName === props.element[0]
    })
    const devarrtwo= props.dataArray.find(obj => {
      return obj.DeviceName === props.element[1]
    })
  
  const specone=Object.fromEntries(
      Object.entries(devarrone).slice(0, 5))
  
  const spectwo=Object.fromEntries(
    Object.entries(devarrtwo).slice(0, 5))

  //console.log(specone);

    const specoutputone= Object.keys(specone).map(el=>{
    return <div className={stylecompare.Rowone} key={el}><span>{el}:</span>{specone[el]}</div>
      
   })
   const specoutputtwo= Object.keys(spectwo).map(el=>{
    return <div className={stylecompare.Rowtwo} key={el}><span>{el}:</span>{spectwo[el]}</div>
      
   })
   setSpecTwoState(specoutputtwo);
   setSpecOneState(specoutputone);

 }



 

 const cancelHandler=()=>{
  setShowState(false);
  
  }



return( <div className={stylecompare.Container}>
        <h1 className={stylecompare.Header}>Do More With SAMSUNG</h1>
        <div className={stylecompare.Div}>
        <div className={stylecompare.Div1}>
        <Selector firstcompare={true} />
       <figure>
            {imageOutput}
       </figure><span>Samsung</span>

        </div>
        <div className={stylecompare.Div2}>
            <Selector />
            <figure>
            {imageOutput}

            </figure><span>Samsung</span>
        </div></div>
        <div className={stylecompare.Layout}>
        <div className={stylecompare.Footer}>
          <button onClick={comparisonHandler}
          disabled={!(props.compareone&&props.comparetwo)}>COMPARE NOW!</button></div>
          </div>
          <Modal cancel={cancelHandler}
    show={show}>
      <div className={stylecompare.Tableone}>
      {specoutputone} </div>
      <div className={stylecompare.Tabletwo}>
         {specoutputtwo}
      </div>
    </Modal>

</div>
    
)
}

const mapStateToProps=state=>{
  return {
    dataArray:state.reducer.dataArray,

    compareone:state.comparereducer.compareone,
    comparetwo:state.comparereducer.comparetwo,
    optionone:state.comparereducer.optionone,
    optiontwo:state.comparereducer.optiontwo,
    element:state.comparereducer.element



  }
}




export default connect(mapStateToProps)(compare);