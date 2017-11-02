var React = require('react');
var Base64=require('base-64');
var request=require('superagent');

require('./css/login.css');



class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }
    loginUser(event){
        event.preventDefault();
        var self = this;
        var payload={
            "username":this.state.username,
            "password":this.state.password
        }
        var usercredentials=payload.username+':'+payload.password;
        var encoded=Base64.encode(usercredentials);
        var headers={
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': 'Basic ' + encoded,
        'caller':"ADMIN",
        'tenant':"TSRTC"
        }
        request
        .post('http://api.smartride.omniwyse.co.in/users/login')
        .send(payload)
        .set(headers)
        .end(function(err,res){
            console.log(res);
        })
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
module.exports=LoginForm;