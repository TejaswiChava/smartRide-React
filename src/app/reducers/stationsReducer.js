import {FETCH_STATIONS,POST_NEWSTATION,DELETE_STATION,UPDATE_STATION} from '../actions/stationsAction'
export default function (state=[],action){
    switch(action.type){
       
        case FETCH_STATIONS:
        //console.log(action.payload)
        return action.payload
         case POST_NEWSTATION:
         return action.payload
         case DELETE_STATION:
         case UPDATE_STATION:
      


    default:

      return state;

     }
  
  
}