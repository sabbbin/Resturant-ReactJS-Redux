import { ActionTypes } from "../action/totalaction";


export const TotalPrice=(state, Action)=>{
   
    switch(Action.type){
        case ActionTypes.TOTAL_PRICE:
            return ({
                ...state,
                totalprice:Action.payload
            })
        default:
            return ({
                ...state
            })
    }
}