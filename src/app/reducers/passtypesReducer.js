import {FETCH_PASSTYPES,POST_PASSTYPES,UPDATE_PASSTYPES} from '../actions/passtypesAction'
export default function (state=[],action){
    switch(action.type){
       
        case FETCH_PASSTYPES:
        //console.log(action.payload)
        return action.payload

        case POST_PASSTYPES:

        case UPDATE_PASSTYPES:

   


    default:

      return state;

     }
  
  
}