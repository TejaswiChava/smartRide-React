import axios from 'axios';
import{Router , Route ,browserHistory } from 'react-router';

export const FETCH_TICKETFARETYPES='FETCH_TICKETFAREYTYPES'

const fetchSuccess=(response)=>{
   
    return{
        type:FETCH_TICKETFARETYPES,
        payload:response.data
    }

}

export function fetchTicketFareTypes(){
    var reqheaders={
        headers:{
                 'Content-Type': 'application/json; charset=utf-8',
                  'Authorization':'Token'+' '+sessionStorage.getItem('token'),
                   'caller':"ADMIN",
                   'tenant':"TSRTC"                
                 }
    }
    return function(dispatch){
        return axios.get('http://api.smartride.omniwyse.co.in/fares/tickets',reqheaders).then(response=>{
            dispatch(fetchSuccess(response))
        })
    }
}
