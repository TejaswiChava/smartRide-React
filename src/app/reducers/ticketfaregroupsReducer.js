import {FETCH_TICKETFAREGROUP,POST_TICKETFAREGROUP,DELETE_TICKETFAREGROUP,UPDATE_TICKETFAREGROUP} from '../actions/ticketfaregroupAction'
export default function (state=[],action){
    switch(action.type){
       
        case FETCH_TICKETFAREGROUP:
        //console.log(action.payload)
        return action.payload

        case POST_TICKETFAREGROUP:

        case DELETE_TICKETFAREGROUP:

        case UPDATE_TICKETFAREGROUP:
     


    default:

      return state;

     }
  
  
}