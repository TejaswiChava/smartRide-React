import {FETCH_VEHICLETIERS,POST_VEHICLETIERS,DELETE_VEHICLETIER,UPDATE_VEHICLETIER} from '../actions/vehicletiersAction'

export default function(state=[],action){
     switch(action.type){
       
        case FETCH_VEHICLETIERS:
        return action.payload
        case POST_VEHICLETIERS:
        return action.payload
        case DELETE_VEHICLETIER:
        case UPDATE_VEHICLETIER:


  


    default:

      return state;

     }
}
