var React = require('react');
var Base64=require('base-64');
var request=require('superagent');
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import{Router , Route ,browserHistory } from 'react-router';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
// import { login } from './actions/loginAction';

import {loginNewUser} from './actions/loginAction'




require('./css/login.css');

var loginDetails={};


class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
            username:'',
              password:''
            //   token:''
            
             
        }
         this.loginUser = this.loginUser.bind(this);
        
    }
    loginUser(event){
        event.preventDefault();
        var self = this;
        var user={
            "username":this.state.username,
            "password":this.state.password
        }
      
        
       
        var usercredentials=user.username+':'+user.password;
        var encoded=Base64.encode(usercredentials);
        var config={
   
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': 'Basic ' + encoded,
        'caller':"ADMIN",
        'tenant':"TSRTC"
            
        
        }
        this.props.loginNewUser(user,config);
  
    
 
}
         
     
    render(){
        return(
       <div>
   <div className="container loginmaincontainer">
      <div id="loginbox">
         <div  className="col-md-4 col-md-offset-4 mainbox">
            <div className="loginpanel">
               <div className="panel" >
                  <div className="panel-heading">
                     <div className="panel-title">Login</div>
                     <hr className="login-headhr"/>
                  </div>
                  <div className="panel-body panelbody" >
                     <form>
                        <div className="form-group">
                           <input type="email"  className="form-control" placeholder="User Name" onChange={(event) => this.setState({username:event.target.value})}/>
                        </div>
                        <div className="form-group">
                           <input type="password"  className="form-control" placeholder="Password" onChange={(event) => this.setState({password:event.target.value})} />
                        </div>
                        <div className="checkbox">
                           <label>
                           <input type="checkbox"/> Remember Me
                           </label>
                        </div>
                        <div className="submitButton">
                           <button type="submit"  className="btn btn-default" onClick={(event)=>this.loginUser(event)}>Submit</button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
        )
    }
}
function mapStateToProps(state){
return{
    loginuser:state.loginuser
}
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({loginNewUser: loginNewUser}, dispatch);
}




module.exports=connect(mapStateToProps,matchDispatchToProps)(LoginForm);