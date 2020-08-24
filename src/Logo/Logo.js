import React from "react";
import samsung from "../assets/Images/logo.jpg";
import stylelogo from "./Logo.css";
const logo =(props)=>{
return (
    <div className={stylelogo.Logo}>
    <img src={samsung} alt="samsung Logo"/>
    </div>
)
}
export default logo;