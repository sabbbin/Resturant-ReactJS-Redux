import { createStore , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux'
import { TotalPrice } from './reducer/reducer'
export const RootReducers= combineReducers({
    total:TotalReducer
})
 
const middleware=[thunk]

const defaultstore={
    price:{
        totalprice:0
    },
    order:{
        orders:[]
    }
}

export const store= createStore( RootReducers,defaultstore, applyMiddleware(...middleware))