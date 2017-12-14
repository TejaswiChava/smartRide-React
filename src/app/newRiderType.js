import React from 'react';
import { Form, Text} from 'react-form';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';


import LoginNavigation from './loinNavigation.js';
import ConfigSidebar from './layouts/configsidebar.js';

import {NewRider} from './actions/riderTypesAction'


class NewRiderType extends React.Component{
       constructor(props){
        super(props);
        this.state={
            
            name:'',
            description:''
            
             
        }
        this.newriderType = this.newriderType.bind(this);
        
    }
    newriderType(event){
         event.preventDefault();
        var self = this;
        var newridertype={
            "name":this.state.name,
            "description":this.state.description
        }
        console.log(newridertype);
        this.props.NewRider(newridertype);
        this.props.router.push('/config/ridertypes');
    }
    render(){
       

    return(
      <div className="row">
          <LoginNavigation/>
          <div className="col-lg-2">
                <ConfigSidebar />
              </div>
            <div className="col-lg-9">
                <div className="row">
                    <h3>New Rider Type</h3>
                    <hr />

                </div>
                <div className="row">
                <div className="panel panel-info  createpanel col-lg-6 col-lg-offset-3" >
                    <div className="panel-body">
                        <form name="addridertypeform" >
                            <div className="row">
                                <div className="col-md-4">
                            <label>Name:</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control form-input" name="addridertype"  placeholder="Rider Type*" onChange={(event) => this.setState({name:event.target.value}) } required/>
                        
                </div>
            </div><br/>
            <div className="row">
                    <div className="col-md-4">
                       <label>Description:</label>
                    </div>
                    <div className="col-md-8">
                       <textarea rows="3" cols="30" name="description" className="form-control form-input" placeholder="Description ......*" onChange={(event) => this.setState({description:event.target.value})} required></textarea>
                      
                    </div>
                 </div>
        <br/>
            <div className="row">
                <div className="col-lg-6 col-lg-offset-3 text-center">
                    <button id="btn-reset" type="reset" className="btn btn-default"> Reset</button>
                            
                    <button id="btn-Register" type="submit" name="submit" className="btn btn-default" onClick={(event)=>this.newriderType(event)}> 
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
    ridertypes:state.ridertypes
}
}

module.exports=connect(mapStateToProps,{NewRider})(NewRiderType);