import {FETCH_RIDERTYPES,POST_NEWRIDERTYPE,DELETE_RIDERTYPE,UPDATE_RIDERTYPE} from '../actions/riderTypesAction'
export default function (state=[],action){
    switch(action.type){
       
        case FETCH_RIDERTYPES:
        //console.log(action.payload)
        return action.payload
        case POST_NEWRIDERTYPE:
        //console.log(action.payload)
         //return action.payload
        case DELETE_RIDERTYPE:
        // console.log(action.payload)
        // return action.payload
        case UPDATE_RIDERTYPE:
        // return action.payload


    default:

      return state;

     }
  
  
}