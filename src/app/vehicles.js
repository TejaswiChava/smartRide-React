var React = require('react');

var Delete = require('react-icons/lib/fa/trash');
var Edit = require('react-icons/lib/fa/pencil');
import {connect} from 'react-redux';

import {fetchVehicles,Deletevehicles,UpdateVehicle} from './actions/vehicleAction';
import {fetchVehicleTiers} from './actions/vehicletiersAction'
import {Link} from 'react-router';
import LoginNavigation from './loinNavigation.js';
import ConfigSidebar from './layouts/configsidebar.js';
import Dialog from 'react-bootstrap-dialog';
import  {Modal,Button,FormGroup,ControlLabel,FormControl} from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


class Vehicles extends React.Component{
    constructor (props) {
    super(props);
   
      this.state={
        showModal:false,
      
    
      
      }
      
    }

    componentWillMount(){
    console.log("mounted")
    this.props.fetchVehicles();
    this.props.fetchVehicleTiers();
    }
    close(event) {
  this.setState({ showModal: false ,
                    showDeleteModal:false});
  }
deletevehicle(event,user){
    this.setState({
      showDeleteModal:true,
      id:user.id
    })
  }
deleteVehicle(event){
  event.preventDefault();
    var self=this;
      var deleterow={
           "id":this.state.id
        }
        console.log(deleterow);
      this.props.Deletevehicles(deleterow)
      this.setState({ showDeleteModal: false })
      
  }

  edit(event,user){
  this.setState(
      { showModal: true,
        vehicleNumber:user.vehicleNumber,
        description:user.description,
        id:user.id,
        vehicleTierid:user.vehicleTierId

      
       }
    );
  }
updateVehicle(event){
  event.preventDefault();
     var self = this;
      var update={
          "id":this.state.id,
        "vehicleNumber":this.state.vehicleNumber,
        "description":this.state.description,
        "vehicleTierId":this.state.vehicleTierid
        }
          //console.log(update);
         this.props.UpdateVehicle(update);
          this.setState({ showModal: false })
  }
    editFormatter(cell, row) {
    return <Button bsStyle="info" className="listButton" onClick={(event)=>this.edit(event,row)} ><Edit size={20} /></Button>;
  }
  deleteFormatter(cell, row) {
    return <Button bsStyle="danger" className="listButton"  onClick={(event)=>this.deletevehicle(event,row)}><Delete size={20} color={'white'} /><Dialog ref={(el) => { this.dialog = el }} /> </Button>;
  }
   createoptions(){
        return this.props.vehicletier.map((user)=>{
            return(
                
            
               <option key={user.id} defaultValue={this.state.vehicleTierid}  value={user.id}>{user.name}</option>
              
            )
        })
    }


    render(){
         
const options = [
  'one', 'two', 'three'
]
        return(
              <div className="row">
                <LoginNavigation />
                <div className="col-lg-2">
                    <ConfigSidebar />
                </div>
                <div className="col-lg-9">
                        <div className="row">
              <h3>Vehicles</h3>
                <hr />
            </div>
            <div className="row">
              <div className="col-lg-2 pull-right">
                 <Link to="/config/vehicles/newvehicle">New Vehicle </Link> 
              </div>
            </div>
                 <div className="row">
              <BootstrapTable data={this.props.vehicles}  bordered={true}  pagination={true} striped={true} hover={false} >
                <TableHeaderColumn  width="70" dataField="id" isKey={true} hidden={true}>ID</TableHeaderColumn> 
                <TableHeaderColumn dataField="name"  className="reactTableHeader groupListHeader" columnClassName=" groupListCell"  >  Name</TableHeaderColumn>
                <TableHeaderColumn dataField="vehicleNumber" className="reactTableHeader groupListHeader" columnClassName="reactTableCell groupListCell" >Vehicle Number</TableHeaderColumn>
                <TableHeaderColumn dataField="description" className="reactTableHeader groupListHeader" columnClassName="reactTableCell groupListCell" >Description</TableHeaderColumn>
                
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
            <Button onClick={(event)=>this.deleteVehicle(event)} > Ok</Button>
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
                     <form name="addridertypeform" >
                    <div className="row">
                            <div className="col-md-4">
                               <label>Vehicle Tier</label>
                            </div>
                            <div className="col-md-8">
                               
                                        <select className="form-control form-input"  paceholder="Select" onChange={(event) => this.setState({vehicleTierId:event.target.value})} >
                                         
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
                                <input type="text" className="form-control form-input" name="addpasstype" onChange={(event) => this.setState({vehicleNumber:event.target.value})} value={this.state.vehicleNumber} placeholder="Vehicle Number*" required />
                            </div>
                     
                </div><br />
                <div className="row">
                        <div className="col-md-4">
                           <label>Description</label>
                        </div>
                        <div className="col-md-8">
                           <textarea rows="3" cols="30" name="description" className="form-control form-input" onChange={(event) => this.setState({description:event.target.value})} value={this.state.description} required></textarea>
                          
                        </div>
                     </div>
            <br />
                <div className="row">
                    <div className="col-lg-6 col-lg-offset-3 text-center">
                        <button id="btn-reset" type="reset" className="btn button"> Reset</button>
                                
                        <button id="btn-Register" type="submit" name="submit"  onClick={(event)=>this.updateVehicle(event)} className="btn button" ng-disabled="addridertypeform.$invalid"> 
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
        )
    }
}
function mapStateToProps(state){
  return{
      vehicles:state.vehicles,
      vehicletier:state.vehicletier
    }
}
export default connect(mapStateToProps,{fetchVehicles,Deletevehicles,fetchVehicleTiers,UpdateVehicle})(Vehicles);