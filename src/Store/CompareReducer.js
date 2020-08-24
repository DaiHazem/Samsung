import *  as Types from "./Types";

const initState={
    compareone:false,
    comparetwo:false,
    optionone:"",
    optiontwo:"",
    element:[ ]
   
}

const comparereducer=(state=initState,action)=>{
    switch(action.type){
        case Types.COMPAREONE_STATUS:
            return{
                ...state,
               compareone:true,
               optionone:action.optionone,
               element:[action.optionone,state.optiontwo]
            };
            case Types.COMPARETWO_STATUS:
                return{
                    ...state,
                   comparetwo:true,
                   optiontwo:action.optiontwo,
                   element:[state.optionone,action.optiontwo]

                };
            default:return state;
        }
    
    }
    export default comparereducer; 