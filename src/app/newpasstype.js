import React from 'react';
import {connect} from 'react-redux';

import {NewPassTypes} from './actions/passtypesAction'

import LoginNavigation from './loinNavigation.js';
import ConfigSidebar from './layouts/configsidebar.js';


class newpasstype extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            description:''
        }
    }
    newPasstype(event){
        event.preventDefault();
        var self = this;
        var newpasstypedetails={
            "name":this.state.name,
            "description":this.state.description
        }
        console.log(newpasstypedetails);
        this.props.NewPassTypes(newpasstypedetails);

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
                        <div className="row ">
    <div className="col-lg-12 text-left">
       <h3 className="student-head">New Pass Type</h3>
       <hr />
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
                            <input type="text" className="form-control form-input" name="addpasstype" onChange={(event)=>{this.setState({name:event.target.value})}} placeholder="Pass Type*" required />
                        </div>
                 
            </div><br />
            <div className="row">
                    <div className="col-md-4">
                       <label>Description</label>
                    </div>
                    <div className="col-md-8">
                       <textarea rows="3" cols="30" name="description" className="form-control form-input" onChange={(event)=>{this.setState({description:event.target.value})}} placeholder="Description..........*" required></textarea>
                      
                    </div>
                 </div>
        <br />
            <div className="row">
                <div className="col-lg-6 col-lg-offset-3 text-center">
                    <button id="btn-reset" type="reset" className="btn button"> Reset</button>
                            
                    <button id="btn-Register" type="submit" name="submit"  className="btn button" onClick={(event)=>{this.newPasstype(event)}} > 
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
   passtypes:state.passtypes
}
}

module.exports=connect(mapStateToProps,{NewPassTypes})(newpasstype);