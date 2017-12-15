import axios from 'axios';
import{Router , Route ,browserHistory } from 'react-router';
import { Redirect } from 'react-router'
var React = require('react');

export const FETCH_PASSTYPES='FETCH_PASSTYPES';
export const POST_PASSTYPES='POST_PASSTYPES';
export const DELETE_PASSTYPES='DELETE_PASSTYPES';
export const UPDATE_PASSTYPES='UPDATE_PASSTYPES'

const fetchSuccess=(response)=>{
    console.log(response.data)
    return{
        type:FETCH_PASSTYPES,
        payload:response.data
    }

}
const postSuccess=(response)=>{
   
    return{
        type:POST_PASSTYPES,
        payload:response
    }
}
const updateSuccess=(response)=>{
    return{
        type:UPDATE_PASSTYPES,
        payload:response
    }
}
const deleteSuccess=(response)=>{
    return{
        type:DELETE_PASSTYPES,
        //payload:reponse
    }
}
export function fetchPassTypes(){
    var reqheaders={
        headers:{
                 'Content-Type': 'application/json; charset=utf-8',
                  'Authorization':'Token'+' '+sessionStorage.getItem('token'),
                   'caller':"ADMIN",
                   'tenant':"TSRTC"                
                 }
    }
    return function(dispatch){
        return axios.get('http://api.smartride.omniwyse.co.in/passTypes',reqheaders).then(response=>{
            dispatch(fetchSuccess(response))
        })
    }
}
export function NewPassTypes(newpasstype){
       var reqheaders={
        headers:{
                 'Content-Type': 'application/json; charset=utf-8',
                  'Authorization':'Token'+' '+sessionStorage.getItem('token'),
                   'caller':"ADMIN",
                   'tenant':"TSRTC"                
                 }
    }
    return function(dispatch){
        return axios.post('http://api.smartride.omniwyse.co.in/passTypes',newpasstype,reqheaders).then(response =>{
            // if(response.status==201){
            //      browserHistory.push('/config/ridertypes')
                
            // }
            dispatch(postSuccess(response))
        })
    }
}
export function Deletepasstypes(user){
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
        return axios.delete('http://api.smartride.omniwyse.co.in/passTypes'+'/'+user.id,reqheaders).then(response =>{
            dispatch(deleteSuccess(response));
          
        })
    }
}
export function UpdatePassType(update){
    var reqheaders={
          headers:{
                 'Content-Type': 'application/json; charset=utf-8',
                  'Authorization':'Token'+' '+sessionStorage.getItem('token'),
                   'caller':"ADMIN",
                   'tenant':"TSRTC"                
                 }
    }
    var passtypedatatoupdate={
        "name":update.name,
        "description":update.description
    }
    console.log(passtypedatatoupdate)
    return function(dispatch){
        return axios.put('http://api.smartride.omniwyse.co.in/passTypes'+'/'+update.id,passtypedatatoupdate,reqheaders).then(response=>{
            dispatch(updateSuccess(response))
        })
    }
}