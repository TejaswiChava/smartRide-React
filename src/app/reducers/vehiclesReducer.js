import {FETCH_VEHICLES,POST_VEHICLES,DELETE_VEHICLE,UPDATE_VEHICLE} from '../actions/vehicleAction'
export default function (state=[],action){
    switch(action.type){
       
        case FETCH_VEHICLES:
        //console.log(action.payload)
        return action.payload
        case POST_VEHICLES:
       
        case DELETE_VEHICLE:

        case UPDATE_VEHICLE:


    default:

      return state;

     }
  
  
}