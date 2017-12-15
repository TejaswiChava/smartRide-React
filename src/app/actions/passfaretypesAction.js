import axios from 'axios';
import{Router , Route ,browserHistory } from 'react-router';



export const FETCH_PASSFARETYPES='FETCH_PASSFARETYPES'
export const POST_PASSFARETYPES='POST_PASSFARETYPES'
export const DELETE_PASSFARETYPE='DELETE_PASSFARETYPE'

const fetchSuccess=(response)=>{
    console.log(response.data)
    return{
        type:FETCH_PASSFARETYPES,
        payload:response.data
    }

}
const postSuccess=(response)=>{
   
    return{
        type:POST_PASSFARETYPES,
        payload:response
    }
}
const deleteSuccess=(response)=>{
    return{
        type:DELETE_PASSFARETYPE,
        //payload:reponse
    }
}
export function fetchPassFareTypes(){
    var reqheaders={
        headers:{
                 'Content-Type': 'application/json; charset=utf-8',
                  'Authorization':'Token'+' '+sessionStorage.getItem('token'),
                   'caller':"ADMIN",
                   'tenant':"TSRTC"                
                 }
    }
    return function(dispatch){
        return axios.get('http://api.smartride.omniwyse.co.in/fares/passes',reqheaders).then(response=>{
            dispatch(fetchSuccess(response))
        })
    }
}

export function NewpassfareType(newpassfaretype){
       var reqheaders={
        headers:{
                 'Content-Type': 'application/json; charset=utf-8',
                  'Authorization':'Token'+' '+sessionStorage.getItem('token'),
                   'caller':"ADMIN",
                   'tenant':"TSRTC"                
                 }
    }
    return function(dispatch){
        return axios.post('http://api.smartride.omniwyse.co.in/fares/passes',newpassfaretype,reqheaders).then(response =>{
            // if(response.status==201){
            //      browserHistory.push('/config/ridertypes')
                
            // }
            dispatch(postSuccess(response))
        })
    }
}
export function DeletepassFareTypes(user){
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
        return axios.delete('http://api.smartride.omniwyse.co.in/fares/passes'+'/'+user.id,reqheaders).then(response =>{
            dispatch(deleteSuccess(response));
          
        })
    }
}