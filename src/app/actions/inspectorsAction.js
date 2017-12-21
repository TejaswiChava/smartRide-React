import axios from 'axios';
import{Router , Route ,browserHistory } from 'react-router';
import { Redirect } from 'react-router'
var React = require('react');

export const FETCH_INSPECTORS='FETCH_INSPECTORS';
export const POST_INSPECTOR='POST_INSPECTOR';
export const DELETE_INSPECTOR='DELETE_INSPECTOR';
export const UPDATE_INSPECTOR='UPDATE_INSPECTOR';




const fetchSuccess=(response)=>{
   
    return{
        type:FETCH_INSPECTORS,
        payload:response.data
    }

}
const postSuccess=(response)=>{
   
    return{
        type:POST_INSPECTOR,
        payload:response
    }
}
const deleteSuccess=(response)=>{
    return{
        type:DELETE_INSPECTOR,
        //payload:reponse
    }
}
const updateSuccess=(response)=>{
    return{
        type:UPDATE_INSPECTOR,
        payload:response
    }
}

export function fetchInspectors(){
    var reqheaders={
        headers:{
                 'Content-Type': 'application/json; charset=utf-8',
                  'Authorization':'Token'+' '+sessionStorage.getItem('token'),
                   'caller':"ADMIN",
                   'tenant':"TSRTC"                
                 }
    }
    return function(dispatch){
        return axios.get('http://api.smartride.omniwyse.co.in/inspectors ',reqheaders).then(response=>{
            dispatch(fetchSuccess(response))
        })
    }
}
export function Newinspectors(newridertype){
       var reqheaders={
        headers:{
                 'Content-Type': 'application/json; charset=utf-8',
                  'Authorization':'Token'+' '+sessionStorage.getItem('token'),
                   'caller':"ADMIN",
                   'tenant':"TSRTC"                
                 }
    }
    return function(dispatch){
        return axios.post('http://api.smartride.omniwyse.co.in/inspectors',newridertype,reqheaders).then(response =>{
            // if(response.status==201){
            //      browserHistory.push('/config/ridertypes')
                
            // }
            dispatch(postSuccess(response))
        })
    }
}
export function DeleteInspector(user){
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
        return axios.delete('http://api.smartride.omniwyse.co.in/inspectors'+'/'+user.id,reqheaders).then(response =>{
            dispatch(deleteSuccess(response));
          
        })
    }
}
export function UpdateInspectors(update){
    console.log(update)
    var reqheaders={
          headers:{
                 'Content-Type': 'application/json; charset=utf-8',
                  'Authorization':'Token'+' '+sessionStorage.getItem('token'),
                   'caller':"ADMIN",
                   'tenant':"TSRTC"                
                 }
    }
    var inspectordatatoupdate={
        "name":update.name,
        "employeeId":update.employeeId,
        "loginId":update.loginId,
        "password":update.password
        
    }
    console.log(inspectordatatoupdate)
    return function(dispatch){
        return axios.put('http://api.smartride.omniwyse.co.in/inspectors'+'/'+update.id,inspectordatatoupdate,reqheaders).then(response=>{
            dispatch(updateSuccess(response))
        })
    }
}