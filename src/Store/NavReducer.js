import *  as Types from "./Types";

const initState={
    toggle:false,
    load:true
   
}

const navreducer=(state=initState,action)=>{
    switch(action.type){
        case Types.BUTTON_TOGGLE:
            return{
                ...state,
                toggle:action.value,
                load:!action.value
            };
            default:return state;
        }
    
    }
    export default navreducer;  