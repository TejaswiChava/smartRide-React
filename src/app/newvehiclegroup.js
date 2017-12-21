import React from 'react';
import {connect} from 'react-redux';


import LoginNavigation from './loinNavigation.js';
import VMsidebar from './layouts/VMsidebar.js';

import {NewVehicleGroup} from './actions/vehiclegroupAction';
import {fetchVehicleTiers} from './actions/vehicletiersAction';
import {fetchRoutes} from './actions/routesAction';


class newvehiclegroup extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            vehicleTierId:'1',
            routeId:'1'


        }
    }

    componentWillMount(){
        this.props.fetchVehicleTiers();
        this.props.fetchRoutes();
    }
      createvehicletieroptions(){
        return this.props.vehicletier.map((user)=>{
            return(
                
            
               <option key={user.id} value={user.id}>{user.name}</option>
              
            )
        })
    }
     createrouteoptions(){
        return this.props.routes.map((user)=>{
            return(
                
            
               <option key={user.id} value={user.id}>{user.routeName}</option>
              
            )
        })
    }
    newvehiclegroup(event){
        event.preventDefault();
        var self=this;
        var newvehiclegroupdetails={
            "name":this.state.name,
            "vehicleTierId":this.state.vehicleTierId,
            "routeId":this.state.routeId
        }
        console.log(newvehiclegroupdetails);
        this.props.NewVehicleGroup(newvehiclegroupdetails);
    }
render(){
    return(
        <div>
            <div className="row">
                <LoginNavigation />
            </div>
            <div className="row">
                <div className="col-lg-2">
                    <VMsidebar />
                </div>
                <div className="col-lg-9">
                     <div className="row">
                    <h3>New Vehicle Group</h3>
                    <hr />

                </div>
         
            <div className="panel panel-info  createpanel col-lg-6 col-lg-offset-3" >
             <div className="panel-body">
        <form name="addvehicletiertypeform" >
            <div className="row">
                
                        <div className="col-md-4">
                            <label>Name</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control form-input" name="addvehicletier" placeholder="Name*" onChange={(event) => this.setState({name:event.target.value}) } required />
                  
                </div>
            </div><br />
            <div className="row">
                <div className="col-md-4">
                   <label>Vehicle Tier</label>
                </div>
                <div className="col-md-8 ">
                   <select className="form-control form-input" onChange={(event) => this.setState({vehicleTierId:event.target.value})}>
                       {this.createvehicletieroptions()}
                   </select>
                </div>
             </div><br/>
             <div className="row">
                <div className="col-md-4">
                   <label>Route</label>
                </div>
                <div className="col-md-8 ">
                   <select className="form-control form-input"  onChange={(event) => this.setState({routeId:event.target.value})} >
                       {this.createrouteoptions()}
                   </select>
                </div>
             </div><br />
          
        
            <div className="row">
                <div className="col-lg-6 col-lg-offset-3 text-center">
                    <button id="btn-reset" type="reset" className="btn button"> Reset</button>
                            
                    <button id="btn-Register" type="submit" name="submit" className="btn button" onClick={(event)=>this.newvehiclegroup(event)} > 
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
      vehiclegroup:state.vehiclegroup,
      vehicletier:state.vehicletier,
      routes:state.routes

    }
}
export default connect(mapStateToProps,{fetchVehicleTiers,fetchRoutes,NewVehicleGroup})(newvehiclegroup);