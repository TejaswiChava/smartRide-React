import axios from 'axios';
import{Router , Route ,browserHistory } from 'react-router';

export const FETCH_STATIONS='FETCH_STATIONS'
export const POST_NEWSTATION='POST_NEWSTATION'
export const DELETE_STATION='DELETE_STATION'
export const UPDATE_STATION='UPDATE_STATION'


const fetchSuccess=(response)=>{
    console.log(response.data)
    return{
        type:FETCH_STATIONS,
        payload:response.data
    }

}
const postStationSuccess=(response)=>{
   
    return{
        type:POST_NEWSTATION,
        payload:response
    }
}
const deleteStationSuccess=(response)=>{
    return{
        type:DELETE_STATION,
        //payload:reponse
    }
}
const updateStationSuccess=(response)=>{
    return{
        type:UPDATE_STATION,
        payload:response
    }
}
export function fetchStations(){
    var reqheaders={
        headers:{
                 'Content-Type': 'application/json; charset=utf-8',
                  'Authorization':'Token'+' '+sessionStorage.getItem('token'),
                   'caller':"ADMIN",
                   'tenant':"TSRTC"                
                 }
    }
    return function(dispatch){
        return axios.get('http://api.smartride.omniwyse.co.in/stations',reqheaders).then(response=>{
            dispatch(fetchSuccess(response))
        })
    }
}
export function NewStation(newstation){
       var reqheaders={
        headers:{
                 'Content-Type': 'application/json; charset=utf-8',
                  'Authorization':'Token'+' '+sessionStorage.getItem('token'),
                   'caller':"ADMIN",
                   'tenant':"TSRTC"                
                 }
    }
    return function(dispatch){
        return axios.post('http://api.smartride.omniwyse.co.in/stations',newstation,reqheaders).then(response =>{
            if(response.status==201){
                //  browserHistory.push('/config/ridertypes')
            }
            dispatch(postStationSuccess(response))
        })
    }
}
export function DeleteStation(user){
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
        return axios.delete('http://api.smartride.omniwyse.co.in/stations'+'/'+user.id,reqheaders).then(response =>{
            dispatch(deleteStationSuccess(response));
          
        })
    }
}
export function UpdateStation(update){
    var reqheaders={
          headers:{
                 'Content-Type': 'application/json; charset=utf-8',
                  'Authorization':'Token'+' '+sessionStorage.getItem('token'),
                   'caller':"ADMIN",
                   'tenant':"TSRTC"                
                 }
    }
    var stationtoupdate={
        "name":update.name,
        "code":update.code
    }
    console.log(stationtoupdate)
    return function(dispatch){
        return axios.put('http://api.smartride.omniwyse.co.in/stations'+'/'+update.id,stationtoupdate,reqheaders).then(response=>{
            dispatch(updateStationSuccess(response))
        })
    }
}