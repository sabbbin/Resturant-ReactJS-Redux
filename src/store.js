import { createStore , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux'
import { TotalPrice } from './reducer/reducer' 
const RootReducers= combineReducers({
    Total:TotalPrice
})
 
const middleware=[thunk]

const defaultstore={
    Total:{
        totalprice:0
    },
    Order:{
        orders:[]
    }
}

export const store= createStore( RootReducers,defaultstore, applyMiddleware(...middleware))