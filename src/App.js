import React, {  Suspense} from 'react';
import Compare from "./Compare/Compare";
import './App.css';
import Layout from "./Layout/Layout";
import {Route, Switch, Redirect} from "react-router-dom";
import Explore from "./Explore/Explore";


const app =(props)=> {

let routes=(
  <Switch>
      <Route path="/" exact component={Explore}/>
      <Route path="/compare" component={Compare}/>
      <Redirect to="/"/>
  </Switch>)

      

return (
  <div>
    <Layout >
      
      <Suspense fallback={<p>loading ...</p>}> {routes} </Suspense> 
    </Layout>
   
  </div>
);
}





export default app;











  
    