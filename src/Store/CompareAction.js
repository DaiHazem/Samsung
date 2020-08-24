import * as Types from "./Types";

export const compareoneHandler =(optionone)=>{
return{
    type:Types.COMPAREONE_STATUS,
    optionone:optionone
}
}

export const comparetwoHandler =(optiontwo)=>{
    return{
        type:Types.COMPARETWO_STATUS,
        optiontwo:optiontwo
        
    }
    }