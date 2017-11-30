import {FETCH_ROUTES,} from '../actions/routesAction'
export default function (state=[],action){
    switch(action.type){
       
        case FETCH_ROUTES:
        //console.log(action.payload)
        return action.payload
       


    default:

      return state;

     }
  
  
}