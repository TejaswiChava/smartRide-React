import React from 'react';
import { Form, Text} from 'react-form';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';

import {Newinspectors} from './actions/inspectorsAction'

import LoginNavigation from './loinNavigation.js';
import ConfigSidebar from './layouts/configsidebar.js';


class NewInspector extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            employeeid:'',
            loginid:'',
            password:''
        }
                this.Newinspector = this.Newinspector.bind(this);

    }
    Newinspector (event){
        event.preventDefault();
        var self=this;
        var newinspector={
            "name":this.state.name,
            "employeeId":this.state.employeeid,
            "loginId":this.state.loginid,
            "password":this.state.password
        }
        console.log(newinspector);
        this.props.Newinspectors(newinspector);
    }      
    render(){
        return(
            <div>
                <div className="row">
                    <LoginNavigation />
                </div>
                <div className="row">
                    <div className="col-lg-2">
                        <ConfigSidebar />
                    </div>
              <div className="col-lg-9">
                <div className="row">
        <div className="col-lg-12 text-left">
           <h3 className="student-head">New Inspector</h3>
           <hr/>
        </div>
     </div>
    <div className="panel panel-info  createpanel col-lg-6 col-lg-offset-3" >
        <div className="panel-body">
            <form name="addridertypeform" >
                <div className="row">
                 
                            <div className="col-md-4">
                                <label>Name</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" className="form-control form-input" name="name" placeholder="Name*"  onChange={(event) => this.setState({name:event.target.value}) } required />
                        
                    </div>
                </div><br/>
                <div className="row">
                        
                    <div className="col-md-4">
                        <label>Employee Id</label>
                    </div>
                    <div className="col-md-8">
                        <input type="text" className="form-control form-input" name="employeeid"  placeholder="Employee Id*"  onChange={(event) => this.setState({employeeid:event.target.value}) }  required/>
                
            </div>
                       </div><br/>
                       <div className="row">
                            
                        <div className="col-md-4">
                            <label>Login Id</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control form-input" name="loginid"  placeholder="Any 4 Digits*"  onChange={(event) => this.setState({loginid:event.target.value}) } required />
                    
                </div>
                           </div><br/>
                           <div className="row">
                                
                            <div className="col-md-4">
                                <label>Password</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" className="form-control form-input" name="password"  placeholder="Any 6 Digits*"  onChange={(event) => this.setState({password:event.target.value}) } required />
                        
                    </div>
                               </div><br/>
           
                <div className="row">
                    <div className="col-lg-6 col-lg-offset-3 text-center">
                        <button id="btn-reset" type="reset" className="btn button"> Reset</button>
                                
                        <button id="btn-Register" type="submit" name="submit"  className="btn button"  onClick={(event)=>this.Newinspector(event)}> 
                        Submit</button>
                                
                    </div>
                </div>
            </form>
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
   inspectors:state.inspectors
}
}

module.exports=connect(mapStateToProps,{Newinspectors})(NewInspector);