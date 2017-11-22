import axios from 'axios';
import{Router , Route ,browserHistory } from 'react-router';
export const loginNewUser = (user,config)=>{
    console.log("you clicked on user:",user.username);
     const request = axios({
    method: 'post',
    data: user,
    url: 'http://api.smartride.omniwyse.co.in/users/login',
    headers:config
  }).then(function(response){
      console.log(response);
      sessionStorage.setItem('token',response.data.token);
     if(response.status==200){
         browserHistory.push('/dashboard')
     }

  });
    // return function(dispatch){
    //     request.then(function(response){
    //         dispatch(push('/dashboard'));
    //     })
    // }


    return{
        type:"USER_LOGIN",
        payload:request,
    }

}