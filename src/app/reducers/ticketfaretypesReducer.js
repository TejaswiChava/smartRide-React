import {FETCH_TICKETFARETYPES} from '../actions/ticketfaretypesAction'

export default function(state=[],action){
     switch(action.type){
       
        case FETCH_TICKETFARETYPES:
       
        return action.payload
  


    default:

      return state;

     }
}

