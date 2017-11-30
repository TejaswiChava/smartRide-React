import axios from 'axios';
import{Router , Route ,browserHistory } from 'react-router';

export const FETCH_ROUTES='FETCH_ROUTES'




const fetchSuccess=(response)=>{
    console.log(response.data)
    return{
        type:FETCH_ROUTES,
        payload:response.data
    }

}
// const postRiderTypesSuccess=(response)=>{
   
//     return{
//         type:POST_NEWRIDERTYPE,
//         payload:response
//     }
// }
// const deleteRidertypeSuccess=(response)=>{
//     return{
//         type:DELETE_RIDERTYPE,
//         //payload:reponse
//     }
// }
// const updateRiderTypeSuccess=(response)=>{
//     return{
//         type:UPDATE_RIDERTYPE,
//         payload:response
//     }
// }
export function fetchRoutes(){
    var reqheaders={
        headers:{
                 'Content-Type': 'application/json; charset=utf-8',
                  'Authorization':'Token'+' '+sessionStorage.getItem('token'),
                   'caller':"ADMIN",
                   'tenant':"TSRTC"                
                 }
    }
    return function(dispatch){
        return axios.get('http://api.smartride.omniwyse.co.in/routes',reqheaders).then(response=>{
            dispatch(fetchSuccess(response))
        })
    }
}

// export function NewRider(newridertype){
//        var reqheaders={
//         headers:{
//                  'Content-Type': 'application/json; charset=utf-8',
//                   'Authorization':'Token'+' '+sessionStorage.getItem('token'),
//                    'caller':"ADMIN",
//                    'tenant':"TSRTC"                
//                  }
//     }
//     return function(dispatch){
//         return axios.post('http://api.smartride.omniwyse.co.in/riderTypes',newridertype,reqheaders).then(response =>{
//             if(response.status==201){
//                  browserHistory.push('/config/ridertypes')
//             }
//             dispatch(postRiderTypesSuccess(response))
//         })
//     }
// }
// export function Deleteridertype(user){
//     console.log(user)
//     var reqheaders={
//         headers:{
//                  'Content-Type': 'application/json; charset=utf-8',
//                   'Authorization':'Token'+' '+sessionStorage.getItem('token'),
//                    'caller':"ADMIN",
//                    'tenant':"TSRTC"                
//                  }
//     }
//     return function(dispatch){
//         return axios.delete('http://api.smartride.omniwyse.co.in/riderTypes'+'/'+user.id,reqheaders).then(response =>{
//             dispatch(deleteRidertypeSuccess(response));
          
//         })
//     }
// }
// export function UpdateRiderType(update){
//     var reqheaders={
//           headers:{
//                  'Content-Type': 'application/json; charset=utf-8',
//                   'Authorization':'Token'+' '+sessionStorage.getItem('token'),
//                    'caller':"ADMIN",
//                    'tenant':"TSRTC"                
//                  }
//     }
//     var ridertypedatatoupdate={
//         "name":update.name,
//         "description":update.description
//     }
//     console.log(ridertypedatatoupdate)
//     return function(dispatch){
//         return axios.put('http://api.smartride.omniwyse.co.in/riderTypes'+'/'+update.id,ridertypedatatoupdate,reqheaders).then(response=>{
//             dispatch(updateRiderTypeSuccess(response))
//         })
//     }
// }