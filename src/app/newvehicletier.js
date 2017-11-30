import React from 'react';
import {connect} from 'react-redux';

import {newVehicleTier} from './actions/vehicletiersAction'

import LoginNavigation from './loinNavigation.js';
import ConfigSidebar from './layouts/configsidebar.js';


class NewVehicleTier extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
            name:'',
            description:''
            
             
        }
        this.newVehicleTier = this.newVehicleTier.bind(this);
        
    }
     newVehicleTier(event){
         event.preventDefault();
        var self = this;
          var newvehicletier={
            "name":this.state.name,
            "description":this.state.description
        }
        console.log(newvehicletier);
         this.props.newVehicleTier(newvehicletier);

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
                    <h3>New Vehicle Tier</h3>
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
                            <input type="text" className="form-control form-input" name="addridertype"  placeholder="Vehicle Tier*" onChange={(event) => this.setState({name:event.target.value}) } required/>
                        
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
                            
                    <button id="btn-Register" type="submit" name="submit" className="btn btn-default" onClick={(event)=>this.newVehicleTier(event)}> 
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
      vehicletier:state.vehicletier,
    }
}
export default connect(mapStateToProps,{newVehicleTier})(NewVehicleTier);