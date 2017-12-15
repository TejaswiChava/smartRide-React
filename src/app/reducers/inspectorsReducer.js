import {FETCH_INSPECTORS,POST_INSPECTOR,DELETE_INSPECTOR,UPDATE_INSPECTOR} from '../actions/inspectorsAction'
export default function (state=[],action){
    switch(action.type){
       
        case FETCH_INSPECTORS:
        //console.log(action.payload)
        return action.payload

        case POST_INSPECTOR:

        case DELETE_INSPECTOR:

        case UPDATE_INSPECTOR:
        


    default:

      return state;

     }
  
  
}