import React from 'react';
import {connect} from 'react-redux';

import {fetchPassTypes} from './actions/passtypesAction'
import {fetchRiderTypes} from './actions/riderTypesAction'
import {fetchVehicleTiers} from './actions/vehicletiersAction'
import {NewpassfareType} from './actions/passfaretypesAction'

import LoginNavigation from './loinNavigation.js';
import ConfigSidebar from './layouts/configsidebar.js';


class newpassfaretype extends React.Component{
    constructor(props){
        super(props);
        this.state={
            vehicletierid:'1',
            ridertypeid:'1',
            passtypeid:'1',
            name:'',
            description:'',
            amount:'',
            sellers:''
        }
    }
    componentWillMount(){
        this.props.fetchPassTypes();
        this.props.fetchRiderTypes();
        this.props.fetchVehicleTiers();
    }
       createvehicletieroptions(){
        return this.props.vehicletier.map((user)=>{
            return(
                
            
               <option key={user.id} value={user.id}>{user.name}</option>
              
            )
        })
    }
        createridertypesoptions(){
        return this.props.ridertypes.map((user)=>{
            return(
                
            
               <option key={user.id} value={user.id}>{user.name}</option>
              
            )
        })
    }
     createpasstypesoptions(){
        return this.props.passtypes.map((user)=>{
            return(
                
            
               <option key={user.id} value={user.id}>{user.name}</option>
              
            )
        })
    }
    newpassfaretype(event){
        event.preventDefault();
        var self=this;
        var passfaredetatilstocreate={
            "name":this.state.name,
            "vehicleTierId":this.state.vehicletierid,
            "passTypeId":this.state.passtypeid,
            "riderTypeId":this.state.ridertypeid,
            "amount":this.state.amount,
            "sellers":this.state.sellers,
            "description":this.state.description
        }
        console.log(passfaredetatilstocreate);
        this.props.NewpassfareType(passfaredetatilstocreate);
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
       <h3 className="student-head">New Pass Fare Type</h3>
       <hr/>
    </div>
 </div>
<div className="panel panel-info  createpanel col-lg-6 col-lg-offset-3" >
    <div className="panel-body">
        <form name="newtickettypeform" >
            <div className="row">
                
                        <div className="col-md-4">
                            <label>Name</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control form-input" name="addvehicletier"  onChange={(event)=>{this.setState({name:event.target.value})}} placeholder="Name*" required />
                     
                </div>
            </div><br/>
       
             <div className="row">
                <div className="col-md-4">
                   <label>Vehicle Tier</label>
                </div>
                <div className="col-md-8 ">
                   <select className="form-control form-input" onChange={(event)=>{this.setState({vehicletierid:event.target.value})}} paceholder="Select Grade">
                        {this.createvehicletieroptions()}
                   </select>
                </div>
             </div><br/>
             <div className="row">
                <div className="col-md-4">
                   <label>Pass Type</label>
                </div>
                <div className="col-md-8 ">
                   <select className="form-control form-input"  onChange={(event)=>{this.setState({passtypeid:event.target.value})}} >
                       {this.createpasstypesoptions()}
                   </select>
                </div>
             </div><br/>
             <div className="row">
                <div className="col-md-4">
                   <label>Rider Type</label>
                </div>
                <div className="col-md-8 ">
                   <select className="form-control form-input"  onChange={(event)=>{this.setState({ridertypeid:event.target.value})}}>
                       {this.createridertypesoptions()}
                   </select>
                </div>
             </div><br/>
             <div className="row">
                
                        <div className="col-md-4">
                            <label>Amount</label>
                        </div>
                        <div className="col-md-8">
                            <input type="number" className="form-control form-input" name="amount" onChange={(event)=>{this.setState({amount:event.target.value})}}  placeholder="Amount*" required />
                     
                </div>
            </div><br />
            <div className="row">
                
                        <div className="col-md-4">
                            <label>Sellers</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control form-input" name="sellers" onChange={(event)=>{this.setState({sellers:event.target.value})}} placeholder="Sellers*" required />
                     
                </div>
            </div><br/>
          
            <div className="row">
                <div className="col-md-4">
                   <label>Description</label>
                </div>
                <div className="col-md-8">
                   <textarea rows="3" cols="30" name="description" className="form-control form-input"  onChange={(event)=>{this.setState({description:event.target.value})}} required></textarea>
                  
                </div>
             </div>
    <br />

        
            <div className="row">
                <div className="col-lg-6 col-lg-offset-3 text-center">
                    <button id="btn-reset" type="reset" className="btn button"> Reset</button>
                            
                    <button id="btn-Register" type="submit" name="submit"  onClick={(event)=>this.newpassfaretype(event)} className="btn button" ng-disabled="newtickettypeform.$invalid"> 
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
   passfaretypes:state.passfaretypes,
   vehicletier:state.vehicletier,
   passtypes:state.passtypes,
   ridertypes:state.ridertypes

}
}

module.exports=connect(mapStateToProps,{fetchVehicleTiers,fetchRiderTypes,fetchPassTypes,NewpassfareType})(newpassfaretype);