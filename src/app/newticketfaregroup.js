import React from 'react';
import {connect} from 'react-redux';


import LoginNavigation from './loinNavigation.js';
import VMsidebar from './layouts/VMsidebar.js';

import {NewTicketFareGroup} from './actions/ticketfaregroupAction'


class newticketfaregroup extends React.Component{

    constructor(props){
        super(props);
        this.state={
            name:''
        }
           this.newticketFareGroup = this.newticketFareGroup.bind(this);
    }
    newticketFareGroup(event){
        event.preventDefault();
        var self=this;
        var newticketfaregroupdetails={
            "name":this.state.name
        }
        console.log(newticketfaregroupdetails);
        this.props.NewTicketFareGroup(newticketfaregroupdetails);
    }

render(){
    return(
        <div>
            <div className="row">
                <LoginNavigation />
            </div>
            <div className="row">
                <div className="col-lg-2">
                    <VMsidebar/>
                </div>
                <div className="col-lg-9">
                    <div className="row">
                    <h3>New Ticket Fare Group</h3>
                    <hr />

                </div>
                <div className="panel panel-info  createpanel col-lg-6 col-lg-offset-3" >
    <div className="panel-body">
        <form name="newticketfaregroupform" >
            <div className="row">
               
                        <div className="col-md-4">
                            <label>Name</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control form-input" name="name" placeholder="Ticket Fare Group*" onChange={(event) => this.setState({name:event.target.value}) } required />
                        </div>
                   
            </div><br />
       
            <div className="row">
                <div className="col-lg-6 col-lg-offset-3 text-center">
                    <button id="btn-reset" type="reset" className="btn button"> Reset</button>
                            
                    <button id="btn-Register" type="submit" name="submit"  className="btn button" onClick={(event)=>this.newticketFareGroup(event)} > 
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
   ticketfaregroup:state.ticketfaregroup
}
}

module.exports=connect(mapStateToProps,{NewTicketFareGroup})(newticketfaregroup);