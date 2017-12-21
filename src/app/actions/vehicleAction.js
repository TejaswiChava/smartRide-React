import axios from 'axios';
import{Router , Route ,browserHistory } from 'react-router';
import { Redirect } from 'react-router'
var React = require('react');

export const FETCH_VEHICLES='FETCH_VEHICLES';
export const POST_VEHICLES='POST_VEHICLES';
export const DELETE_VEHICLE='DELETE_VEHICLE';
export const UPDATE_VEHICLE='UPDATE_VEHICLE';

const fetchSuccess=(response)=>{
    return{
        type:FETCH_VEHICLES,
        payload:response.data
    }

}
const postSuccess=(response)=>{
   
    return{
        type:POST_VEHICLES,
        payload:response
    }
}
const deleteSuccess=(response)=>{
    return{
        type:DELETE_VEHICLE,
        //payload:reponse
    }
}
const updateSuccess=(response)=>{
    return{
        type:UPDATE_VEHICLE,
        payload:response
    }
}

export function fetchVehicles(){
    var reqheaders={
        headers:{
                 'Content-Type': 'application/json; charset=utf-8',
                  'Authorization':'Token'+' '+sessionStorage.getItem('token'),
                   'caller':"ADMIN",
                   'tenant':"TSRTC"                
                 }
    }
    return function(dispatch){
        return axios.get('http://api.smartride.omniwyse.co.in/vehicles',reqheaders).then(response=>{
            dispatch(fetchSuccess(response))
        })
    }
}
export function NewVehicle(newvehicle){
       var reqheaders={
        headers:{
                 'Content-Type': 'application/json; charset=utf-8',
                  'Authorization':'Token'+' '+sessionStorage.getItem('token'),
                   'caller':"ADMIN",
                   'tenant':"TSRTC"                
                 }
    }
    return function(dispatch){
        return axios.post('http://api.smartride.omniwyse.co.in/vehicles',newvehicle,reqheaders).then(response =>{
            // if(response.status==201){
            //      browserHistory.push('/config/ridertypes')
                
            // }
            dispatch(postSuccess(response))
        })
    }
}
export function Deletevehicles(user){
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
        return axios.delete('http://api.smartride.omniwyse.co.in/vehicles'+'/'+user.id,reqheaders).then(response =>{
            dispatch(deleteSuccess(response));
          
        })
    }
}
export function UpdateVehicle(update){
    console.log(update)
    var reqheaders={
          headers:{
                 'Content-Type': 'application/json; charset=utf-8',
                  'Authorization':'Token'+' '+sessionStorage.getItem('token'),
                   'caller':"ADMIN",
                   'tenant':"TSRTC"                
                 }
    }
    var vehicledatatoupdate={
        "vehicleTierId":update.vehicleTierId,
        "vehicleNumber":update.vehicleNumber,
        "description":update.description,
        
    }
    console.log(vehicledatatoupdate)
    return function(dispatch){
        return axios.put('http://api.smartride.omniwyse.co.in/vehicles'+'/'+update.id,vehicledatatoupdate,reqheaders).then(response=>{
            dispatch(updateSuccess(response))
        })
    }
}