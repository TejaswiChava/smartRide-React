import axios from 'axios';

export const FETCH_VEHICLEGROUP='FETCH_VEHICLEGROUP'
export const POST_VEHICLEGROUP='POST_VEHICLEGROUP'
export const DELETE_VEHICLEGROUP='DELETE_VEHICLEGROUP'
export const UPDATE_VEHICLEGROUP='UPDATE_VEHICLEGROUP'




const fetchSuccess=(response)=>{
    return{
        type:FETCH_VEHICLEGROUP,
        payload:response.data
    }

}
const postSuccess=(response)=>{
   
    return{
        type:POST_VEHICLEGROUP,
        payload:response
    }
}
const deleteSuccess=(response)=>{
    return{
        type:DELETE_VEHICLEGROUP,
        //payload:reponse
    }
}
const updateSuccess=(response)=>{
    return{
        type:UPDATE_VEHICLEGROUP,
        payload:response
    }
}

export function fetchVehicleGroup(){
    var reqheaders={
        headers:{
                 'Content-Type': 'application/json; charset=utf-8',
                  'Authorization':'Token'+' '+sessionStorage.getItem('token'),
                   'caller':"ADMIN",
                   'tenant':"TSRTC"                
                 }
    }
    return function(dispatch){
        return axios.get('http://api.smartride.omniwyse.co.in/vehicleGroups',reqheaders).then(response=>{
            dispatch(fetchSuccess(response))
        })
    }
}

export function NewVehicleGroup(newvehicle){
       var reqheaders={
        headers:{
                 'Content-Type': 'application/json; charset=utf-8',
                  'Authorization':'Token'+' '+sessionStorage.getItem('token'),
                   'caller':"ADMIN",
                   'tenant':"TSRTC"                
                 }
    }
    return function(dispatch){
        return axios.post('http://api.smartride.omniwyse.co.in/vehicleGroups',newvehicle,reqheaders).then(response =>{
            // if(response.status==201){
            //      browserHistory.push('/config/ridertypes')
                
            // }
            dispatch(postSuccess(response))
        })
    }
}
export function DeleteVehicleGroup(user){
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
        return axios.delete('http://api.smartride.omniwyse.co.in/vehicleGroups'+'/'+user.id,reqheaders).then(response =>{
            dispatch(deleteSuccess(response));
          
        })
    }
}
export function UpdateVehicleGroup(update){
    console.log(update)
    var reqheaders={
          headers:{
                 'Content-Type': 'application/json; charset=utf-8',
                  'Authorization':'Token'+' '+sessionStorage.getItem('token'),
                   'caller':"ADMIN",
                   'tenant':"TSRTC"                
                 }
    }
    var vehiclegroupdatatoupdate={
        "vehicleTierId":update.vehicleTierId,
        "name":update.name,
        "routeId":update.routeId,
        
    }
    console.log(vehiclegroupdatatoupdate)
    return function(dispatch){
        return axios.put('http://api.smartride.omniwyse.co.in/vehicleGroups'+'/'+update.id,vehiclegroupdatatoupdate,reqheaders).then(response=>{
            dispatch(updateSuccess(response))
        })
    }
}