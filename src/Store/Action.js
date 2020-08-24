import * as Types from "./Types";
import axios from "../axios/axiosinstance";

export const setArray=(fetchedData)=>{
return{
    type:Types.SET_ARRAY,
    arrayOutput:fetchedData
}
}



export const errorhandler=()=>{
    return{
        type:Types.ERROR_STATUS
    }
    }
    export const loadinghandler=()=>{
        return{
            type:Types.LOADING_STATUS
        }
        }
    
        export const toggleScroll=(turn)=>{
            return{
                type:Types.TOGGLE_SCROLL,
                turn:turn

            }
            }

export const fetchData=()=>{
    return dispatch=>{
        dispatch(loadinghandler());

        axios.get("https://fonoapi.freshpixl.com/v1/getlatest?token=f95d8b59c2579b9773d11e538e0bb79df318829ab53082ca&brand=samsung").then(response=>{
           // console.log(response.data);
            dispatch(setArray(response.data))
        }).catch(error=>{
         // console.log(error);
         dispatch(errorhandler());
        })
    

    }
}
export const loadData=()=>{
    return{
        type:Types.DATA_STATUS
        
    }
    }
