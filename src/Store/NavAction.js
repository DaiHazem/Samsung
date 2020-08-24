import * as Types from "./Types";

export const toggleButton =(value)=>{
return{
    type:Types.BUTTON_TOGGLE,
    value:value
}
}