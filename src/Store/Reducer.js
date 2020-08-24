import *  as Types from "./Types";

const initState={
    dataArray:[],
    error:false,
    loading:false,
    data:[],
    dataLength:20,
    turn:true
   
}

const reducer=(state=initState,action)=>{
    switch(action.type){
        case Types.SET_ARRAY:
            return{
                ...state,
                dataArray:action.arrayOutput,
                error:false,
                loading:false,
                data:action.arrayOutput.slice(0,10)
            };
            case Types.DATA_STATUS:
                return{
                    ...state,
                    
                    data:state.dataArray.slice(0,state.dataLength),
                    dataLength:state.dataLength+10
                };
           

            case Types.ERROR_STATUS:
                return{
                    ...state,
                    error:true
                };
            
                case Types.LOADING_STATUS:
                return{
                    ...state,
                    loading:true
                };

                case Types.TOGGLE_SCROLL:
                    return{
                        ...state,
                        turn:action.turn
                    };


            default:return state;
    }

}
export default reducer;