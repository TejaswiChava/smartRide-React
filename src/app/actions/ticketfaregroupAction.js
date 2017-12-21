import axios from 'axios';

export const FETCH_TICKETFAREGROUP='FETCH_TICKETFAREGROUP'
export const POST_TICKETFAREGROUP='POST_TICKETFAREGROUP'
export const DELETE_TICKETFAREGROUP='DELETE_TICKET'
export const UPDATE_TICKETFAREGROUP='UPDATE_TICKETFAREGROUP'

const fetchSuccess=(response)=>{

    return{
        type:FETCH_TICKETFAREGROUP,
        payload:response.data
    }

}
const postSuccess=(response)=>{
   
    return{
        type:POST_TICKETFAREGROUP,
        payload:response
    }
}
const deleteSuccess=(response)=>{
    return{
        type:DELETE_TICKETFAREGROUP,
        //payload:reponse
    }
}
const updateSuccess=(response)=>{
    return{
        type:UPDATE_TICKETFAREGROUP,
        payload:response
    }
}

export function fetchTicketFareGroups(){
    var reqheaders={
        headers:{
                 'Content-Type': 'application/json; charset=utf-8',
                  'Authorization':'Token'+' '+sessionStorage.getItem('token'),
                   'caller':"ADMIN",
                   'tenant':"TSRTC"                
                 }
    }
    return function(dispatch){
        return axios.get('http://api.smartride.omniwyse.co.in/ticketFareGroup',reqheaders).then(response=>{
            dispatch(fetchSuccess(response))
        })
    }
}

export function NewTicketFareGroup(newticketfaregroupdetails){
       var reqheaders={
        headers:{
                 'Content-Type': 'application/json; charset=utf-8',
                  'Authorization':'Token'+' '+sessionStorage.getItem('token'),
                   'caller':"ADMIN",
                   'tenant':"TSRTC"                
                 }
    }
    return function(dispatch){
        return axios.post('http://api.smartride.omniwyse.co.in/ticketFareGroup',newticketfaregroupdetails,reqheaders).then(response =>{
            // if(response.status==201){
            //      browserHistory.push('/config/ridertypes')
                
            // }
            dispatch(postSuccess(response))
        })
    }
}

export function DeleteTicketFareGroup(user){
    console.log(user)
    var reqheaders={
        headers:{
                 'Content-Type': 'application/json; charset=utf-8',
                  'Authorization':'Token'+' '+sessionStorage.getItem('token'),
                   'caller':"ADMIN",
                   'tenant':"TSRTC"                
                 }
    }
    return function(dispatch){
        return axios.delete('http://api.smartride.omniwyse.co.in/ticketFareGroup'+'/'+user.id,reqheaders).then(response =>{
            dispatch(deleteSuccess(response));
          
        })
    }
}

export function UpdateTicketFareGroup(update){
    console.log(update)
    var reqheaders={
          headers:{
                 'Content-Type': 'application/json; charset=utf-8',
                  'Authorization':'Token'+' '+sessionStorage.getItem('token'),
                   'caller':"ADMIN",
                   'tenant':"TSRTC"                
                 }
    }
    var ticketfaregroupdatatoupdate={
       "name":update.name
    }
    console.log(ticketfaregroupdatatoupdate)
    return function(dispatch){
        return axios.put('http://api.smartride.omniwyse.co.in/ticketFareGroup'+'/'+update.id,ticketfaregroupdatatoupdate,reqheaders).then(response=>{
            dispatch(updateSuccess(response))
        })
    }
}