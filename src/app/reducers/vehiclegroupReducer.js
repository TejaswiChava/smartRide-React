import {FETCH_VEHICLEGROUP,POST_VEHICLEGROUP,DELETE_VEHICLEGROUP,UPDATE_VEHICLEGROUP} from '../actions/vehiclegroupAction'
export default function (state=[],action){
    switch(action.type){
       
        case FETCH_VEHICLEGROUP:
        //console.log(action.payload)
        return action.payload

       case POST_VEHICLEGROUP:

       case DELETE_VEHICLEGROUP:

       case UPDATE_VEHICLEGROUP:
     


    default:

      return state;

     }
  
  
}