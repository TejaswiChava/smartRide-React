import {FETCH_PASSFARETYPES,POST_PASSFARETYPES,DELETE_PASSFARETYPE} from '../actions/passfaretypesAction';

export default function (state=[],action){
    switch(action.type){
       
        case FETCH_PASSFARETYPES:
        //console.log(action.payload)
        return action.payload

        case POST_PASSFARETYPES:

        case DELETE_PASSFARETYPE:

       

   


    default:

      return state;

     }
  
  
}
