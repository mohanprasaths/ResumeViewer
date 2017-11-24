import { combineReducers } from 'redux'
import {GETUSERDETAILS} from '../actions/actionTypes.js'

function user(state={},action){
  switch(action.type){
    case GETUSERDETAILS : {return Object.assign({},state,{userdata : action.data})}
    case "empty" : return state;
    default : return state;
  }
}

const myApp = combineReducers({
  user
})

export default myApp
