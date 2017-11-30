import axios from 'axios';
import{Router , Route ,browserHistory } from 'react-router';

export const FETCH_VEHICLETIERS = 'FETCH_VEHICLETIERS';
export const POST_VEHICLETIERS = 'POST_VEHICLETIERS';
export const DELETE_VEHICLETIER = 'DELETE_VEHICLETIER';
export const UPDATE_VEHICLETIER='UPDATE_VEHICLETIER';
const fetchSuccess=(response)=>{
    console.log(response.data)
    return{
        type:FETCH_VEHICLETIERS,
        payload:response.data
    }

}
const postVehicleTierTypesSuccess=(response)=>{
   
    return{
        type:POST_VEHICLETIERS,
        payload:response
    }
}
const deleteVehicleTierSuccess=(response)=>{
    return{
        type:DELETE_VEHICLETIER,
    }
}
const updateRiderTypeSuccess=(response)=>{
    return{
        type:UPDATE_VEHICLETIER,
        payload:response
    }
}
export function fetchVehicleTiers(){
    var reqheaders={
        headers:{
                 'Content-Type': 'application/json; charset=utf-8',
                  'Authorization':'Token'+' '+sessionStorage.getItem('token'),
                   'caller':"ADMIN",
                   'tenant':"TSRTC"                
                 }
    }
    return function(dispatch){
        return axios.get('http://api.smartride.omniwyse.co.in/vehicleTier',reqheaders).then(response=>{
            dispatch(fetchSuccess(response))
        })
    }
}

export function newVehicleTier(newvehicletier){
       var reqheaders={
        headers:{
                 'Content-Type': 'application/json; charset=utf-8',
                  'Authorization':'Token'+' '+sessionStorage.getItem('token'),
                   'caller':"ADMIN",
                   'tenant':"TSRTC"                
                 }
    }
    return function(dispatch){
        return axios.post('http://api.smartride.omniwyse.co.in/vehicleTier',newvehicletier,reqheaders).then(response =>{
            if(response.status==201){
                 //browserHistory.push('/config/ridertypes')
            }
            dispatch(postVehicleTierTypesSuccess(response))
        })
    }
}
export function DeleteVehicleTier(user){
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
        return axios.delete('http://api.smartride.omniwyse.co.in/vehicleTier'+'/'+user.id,reqheaders).then(response =>{
            dispatch(deleteVehicleTierSuccess(response));
          
        })
    }
}
export function UpdateVehicleTier(update){
    var reqheaders={
          headers:{
                 'Content-Type': 'application/json; charset=utf-8',
                  'Authorization':'Token'+' '+sessionStorage.getItem('token'),
                   'caller':"ADMIN",
                   'tenant':"TSRTC"                
                 }
    }
    var ridertypedatatoupdate={
        "name":update.name,
        "description":update.description
    }
    console.log(ridertypedatatoupdate)
    return function(dispatch){
        return axios.put('http://api.smartride.omniwyse.co.in/vehicleTier'+'/'+update.id,ridertypedatatoupdate,reqheaders).then(response=>{
            dispatch(updateRiderTypeSuccess(response))
        })
    }
}