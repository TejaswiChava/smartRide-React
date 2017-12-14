import React from 'react';
import { Form, Text} from 'react-form';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';


import LoginNavigation from './loinNavigation.js';
import ConfigSidebar from './layouts/configsidebar.js';

import {fetchVehicleTiers} from './actions/vehicletiersAction';
import {NewVehicle} from './actions/vehicleAction'

class Vehicle extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:'1',
            vehicleNumber:'',
            description:''
        }
           this.newVehicle = this.newVehicle.bind(this);
        
    }

    componentWillMount(){
        this.props.fetchVehicleTiers();
    }
    createoptions(){
        return this.props.vehicletier.map((user)=>{
            return(
                
            
               <option key={user.id} value={user.name}>{user.name}</option>
              
            )
        })
    }
newVehicle(event){
   event.preventDefault();
        var self = this;
        var newvehicle={
            "vehicleTierId":this.state.id,
            "vehicleNumber":this.state.vehicleNumber,
            "description":this.state.description
        }
        console.log(newvehicle);
        this.props.NewVehicle(newvehicle);
}

    render(){
        return(
            <div className="row">
                <LoginNavigation />
                <div className="col-lg-2">
                    <ConfigSidebar />
                </div>
                <div className="col-lg-9">
                     <div className="row">
                    <h3>New Vehicle</h3>
                    <hr />

                </div>
                     <div className="panel panel-info  createpanel col-lg-6 col-lg-offset-3" >
        <div className="panel-body">
            <form name="addridertypeform" >
                    <div className="row">
                            <div className="col-md-4">
                               <label>Vehicle Tier</label>
                            </div>
                            <div className="col-md-8">
                               
                                     <select className="form-control form-input"  paceholder="Select" onChange={(event) => this.setState({name:event.target.value})}>
                                         <option disabled>Please Select</option>
                                         {this.createoptions()}
                                         
                                
                               </select>  
                               
                 
                              
                            </div>
                         </div>
                         <br />
                <div className="row">
                  
                            <div className="col-md-4">
                                <label>Vehicle Number</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" className="form-control form-input" name="addpasstype" onChange={(event) => this.setState({vehicleNumber:event.target.value})} placeholder="Vehicle Number*" required />
                            </div>
                     
                </div><br />
                <div className="row">
                        <div className="col-md-4">
                           <label>Description</label>
                        </div>
                        <div className="col-md-8">
                           <textarea rows="3" cols="30" name="description" className="form-control form-input" onChange={(event) => this.setState({description:event.target.value})} required></textarea>
                          
                        </div>
                     </div>
            <br />
                <div className="row">
                    <div className="col-lg-6 col-lg-offset-3 text-center">
                        <button id="btn-reset" type="reset" className="btn button"> Reset</button>
                                
                        <button id="btn-Register" type="submit" name="submit"  onClick={(event)=>this.newVehicle(event)} className="btn button" ng-disabled="addridertypeform.$invalid"> 
                        Submit</button>
                                
                    </div>
                </div>
            </form>
        </div>

                </div>
                
            </div>
    </div>
        )
    }

}
function mapStateToProps(state){
return{
    vehicles:state.vehicles,
    vehicletier:state.vehicletier

}
}

module.exports=connect(mapStateToProps,{fetchVehicleTiers,NewVehicle})(Vehicle);
