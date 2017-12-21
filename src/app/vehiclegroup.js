var React = require('react');


var Delete = require('react-icons/lib/fa/trash');
var Edit = require('react-icons/lib/fa/pencil');
import LoginNavigation from './loinNavigation.js';
import VMsidebar from './layouts/VMsidebar.js';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import Dialog from 'react-bootstrap-dialog';
import  {Modal,Button} from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import {fetchVehicleGroup,DeleteVehicleGroup,UpdateVehicleGroup} from './actions/vehiclegroupAction';
import {fetchVehicleTiers} from './actions/vehicletiersAction';
import {fetchRoutes} from './actions/routesAction';



class vehiclegroup extends React.Component{
     constructor (props) {
    super(props);
   
      this.state={
        showModal:false,
      
    
      
      }
      
    }
      edit(event,user){
  this.setState(
      { showModal: true,
        id:user.id,
        vehicelGroupName:user.vehicelGroupName,
        vehicleTierId:user.vehicleTierId,
        routeId:user.routeId

      
       });
      }
    updatevehiclegroup(event){
        event.preventDefault();
        var self = this;
        var vehiclegroupdetailstoupdate={
            "id":this.state.id,
            "name":this.state.vehicelGroupName,
            "vehicleTierId":this.state.vehicleTierId,
            "routeId":this.state.routeId
        }
        console.log(vehiclegroupdetailstoupdate);
        this.props.UpdateVehicleGroup(vehiclegroupdetailstoupdate);
    }
    delete(event,user){
    this.setState({
      showDeleteModal:true,
      id:user.id
    })
  }
deleteVehicleGroup(event){
        event.preventDefault();
    var self=this;
      var deleterow={
           "id":this.state.id
        }
        console.log(deleterow);
    this.props.DeleteVehicleGroup(deleterow)
      this.setState({ showDeleteModal: false })
}
     componentWillMount(){
        this.props.fetchVehicleGroup();
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
       editFormatter(cell, row) {
    return <Button bsStyle="info" className="listButton" onClick={(event)=>this.edit(event,row)} ><Edit size={20} /></Button>;
  }
  deleteFormatter(cell, row) {
    return <Button bsStyle="danger" className="listButton"  onClick={(event)=>this.delete(event,row)}><Delete size={20} color={'white'} /><Dialog ref={(el) => { this.dialog = el }} /> </Button>;
  }
     close(event) {
  this.setState({ showModal: false ,
                    showDeleteModal:false});
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
              <h3>Vehicle Group</h3>
                <hr />
            </div>
             <div className="row">
              <div className="col-lg-2 pull-right">
                 <Link to="/vehiclemanagement/vehiclegroup/newvehiclegroup">New Vehicle Group</Link> 
              </div>
            </div>
            <div className="row">
              <BootstrapTable data={this.props.vehiclegroup}  bordered={true}  pagination={true} striped={true} hover={false} >
                <TableHeaderColumn  width="70" dataField="id" isKey={true} hidden={true}>ID</TableHeaderColumn> 
                <TableHeaderColumn dataField="vehicelGroupName"  className="reactTableHeader groupListHeader" columnClassName=" groupListCell"  >Vehicle Group Name</TableHeaderColumn>
                <TableHeaderColumn dataField="vehicleTier"  className="reactTableHeader groupListHeader" columnClassName=" groupListCell"  >Vehicle Tier</TableHeaderColumn>
                <TableHeaderColumn dataField="routeName"  className="reactTableHeader groupListHeader" columnClassName=" groupListCell"  >Route Name</TableHeaderColumn>
                
                
                
                <TableHeaderColumn width="50" className="reactTableHeader groupListHeader" columnClassName="reactTableCell groupListCell"  dataFormat={this.editFormatter.bind(this)}>Update</TableHeaderColumn> 
                <TableHeaderColumn width="50" className="reactTableHeader groupListHeader" columnClassName="reactTableCell groupListCell"  dataFormat={this.deleteFormatter.bind(this)} >Delete</TableHeaderColumn> 
              </BootstrapTable>
            </div>  
                     <div>
        <Modal show={this.state.showDeleteModal} onHide={(event)=>this.close(event)}>
          <Modal.Header >
            <Modal.Title>Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Are you Sure you want to delete?</p>
            <Button onClick={(event)=>this.close(event)}>Cancel</Button>
             <Button onClick={(event)=>this.deleteVehicleGroup(event)} > Ok</Button> 
          </Modal.Body>
          <Modal.Footer>
             <Button onClick={(event)=>this.close(event)}>Close</Button> 
          </Modal.Footer>
        </Modal>
     </div>
     <div>
            <Modal show={this.state.showModal} onHide={(event)=>this.close(event)}>
            <Modal.Header >
              <Modal.Title>Update</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <form name="addvehicletiertypeform" >
            <div className="row">
                
                        <div className="col-md-4">
                            <label>Name</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control form-input" name="addvehicletier" placeholder="Name*" onChange={(event) => this.setState({vehicelGroupName:event.target.value}) } value={this.state.vehicelGroupName} required />
                  
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
                            
                    <button id="btn-Register" type="submit" name="submit" className="btn button" onClick={(event)=>this.updatevehiclegroup(event)} > 
                    Submit</button>
                            
                </div>
            </div>
        </form>
               
           
            </Modal.Body>
            <Modal.Footer>
             <Button onClick={(event)=>this.close(event)}>Close</Button> 
            </Modal.Footer>
          </Modal>
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
export default connect(mapStateToProps,{fetchVehicleGroup,DeleteVehicleGroup,fetchVehicleTiers,fetchRoutes,UpdateVehicleGroup})(vehiclegroup);