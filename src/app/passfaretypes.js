var React = require('react');

var Delete = require('react-icons/lib/fa/trash');
var Edit = require('react-icons/lib/fa/pencil');
import {connect} from 'react-redux';

import {fetchPassFareTypes,DeletepassFareTypes} from './actions/passfaretypesAction'
import {fetchPassTypes} from './actions/passtypesAction'
import {fetchRiderTypes} from './actions/riderTypesAction'
import {fetchVehicleTiers} from './actions/vehicletiersAction'
import {Link} from 'react-router';
import LoginNavigation from './loinNavigation.js';
import ConfigSidebar from './layouts/configsidebar.js';
import Dialog from 'react-bootstrap-dialog';
import  {Modal,Button} from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';



class passfaretypes extends React.Component{
     constructor (props) {
    super(props);
      this.state={
        showModal:false,
      }
    }
    
    close(event) {
  this.setState({ showModal: false ,
                    showDeleteModal:false});
  }

edit(event,user){
  this.setState(
      { showModal: true,
        amount:user.amount,
        description:user.description,
        passType:user.passType,
        passTypeId:user.passTypeId,
        riderType:user.riderType,
        riderTypeId:user.riderTypeId,
        sellers:user.sellers,
        vehicleTier:user.vehicleTier,
        vehicleTierId:user.vehicleTierId,
        id:user.id
       }
    );
  }
  updatepassfaretype(event){
     event.preventDefault();
     var self = this;
     var passfaredetailstoupdate={
       "amount":this.state.amount,
       "description":this.state.description,
       "passType":this.state.passType,
       "passTypeId":this.state.passTypeId,
       "riderType":this.state.riderType,
       "riderTypeId":this.state.riderTypeId,
       "vehicleTier":this.state.vehicleTier,
       "sellers":this.state.sellers,
       "vehicleTierId":this.state.vehicleTierId,
       "id":this.state.id
     }
      console.log(passfaredetailstoupdate);
  }
delete(event,user){
    this.setState({
      showDeleteModal:true,
      id:user.id
    })
  }
deletepassfaretype(event){
  event.preventDefault();
    var self=this;
      var deleterow={
           "id":this.state.id
        }
        console.log(deleterow)
      this.props.DeletepassFareTypes(deleterow)
      this.setState({ showDeleteModal: false })
      
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

componentWillMount(){
    this.props.fetchPassFareTypes();
       this.props.fetchPassTypes();
        this.props.fetchRiderTypes();
        this.props.fetchVehicleTiers();
  }
 editFormatter(cell, row) {
    return <Button bsStyle="info" className="listButton" onClick={(event)=>this.edit(event,row)} ><Edit size={20} /></Button>;
  }
  deleteFormatter(cell, row) {
    return <Button bsStyle="danger" className="listButton"  onClick={(event)=>this.delete(event,row)}><Delete size={20} color={'white'} /><Dialog ref={(el) => { this.dialog = el }} /> </Button>;
  }
    render(){
        return(
            <div className='row'>
                <LoginNavigation />
                <div className='col-lg-2'>
                    <ConfigSidebar />
                </div>
                <div className='col-lg-9'>
                    <div className="row">
                         <h3>Pass Fare Types</h3>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-lg-2 pull-right">
                         <Link to="/config/passfaretypes/newpassfaretype"> New PassFare Type </Link> 
                        </div>
                    </div>
                     <div className="row">
                        <BootstrapTable data={this.props.passfaretypes}  bordered={true}  pagination={true} striped={true} hover={true} >
                            <TableHeaderColumn  width="70" dataField="id" isKey={true} hidden={true}>ID</TableHeaderColumn> 
                            <TableHeaderColumn dataField="passType"  className="reactTableHeader groupListHeader" columnClassName=" groupListCell"  >Pass Type</TableHeaderColumn>
                            <TableHeaderColumn dataField="riderType" className="reactTableHeader groupListHeader" columnClassName="reactTableCell groupListCell" >Rider Type</TableHeaderColumn>
                            <TableHeaderColumn dataField="vehicleTier" className="reactTableHeader groupListHeader" columnClassName="reactTableCell groupListCell" >Vehicle Tier</TableHeaderColumn>
                            <TableHeaderColumn dataField="amount" className="reactTableHeader groupListHeader" columnClassName="reactTableCell groupListCell" >Amount</TableHeaderColumn>
                            <TableHeaderColumn dataField="sellers" className="reactTableHeader groupListHeader" columnClassName="reactTableCell groupListCell" >Sellers</TableHeaderColumn>
                            <TableHeaderColumn dataField="description" className="reactTableHeader groupListHeader" columnClassName="reactTableCell groupListCell" >Description</TableHeaderColumn>
                            
                            
                            
                            
                            <TableHeaderColumn width="50" className="reactTableHeader groupListHeader" columnClassName="reactTableCell groupListCell"  dataFormat={this.editFormatter.bind(this)}>Update</TableHeaderColumn> 
                            <TableHeaderColumn width="50" className="reactTableHeader groupListHeader" columnClassName="reactTableCell groupListCell"  dataFormat={this.deleteFormatter.bind(this)} >Delete</TableHeaderColumn> 
                        </BootstrapTable>
                    </div> 
                </div>
                <div>
                     <Modal show={this.state.showModal} onHide={(event)=>this.close(event)}>
            <Modal.Header >
              <Modal.Title>Update</Modal.Title>
            </Modal.Header>
            <Modal.Body>
           
                 
                               <form name="newtickettypeform" >
            {/* <div className="row">
                
                        <div className="col-md-4">
                            <label>Name</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control form-input" name="addvehicletier"  onChange={(event)=>{this.setState({name:event.target.value})}} placeholder="Name*" value={this.state.passType} required />
                     
                </div>
            </div><br/> */}
       
             <div className="row">
                <div className="col-md-4">
                   <label>Vehicle Tier</label>
                </div>
                <div className="col-md-8 ">
                   <select className="form-control form-input" onChange={(event)=>{this.setState({vehicleTierId:event.target.value})}}>
                         {this.createvehicletieroptions()} 
                   </select>
                </div>
             </div><br/>
             <div className="row">
                <div className="col-md-4">
                   <label>Pass Type</label>
                </div>
                <div className="col-md-8 ">
                   <select className="form-control form-input"  onChange={(event)=>{this.setState({passTypeId:event.target.value})}} >
                        {this.createpasstypesoptions()} 
                   </select>
                </div>
             </div><br/>
             <div className="row">
                <div className="col-md-4">
                   <label>Rider Type</label>
                </div>
                <div className="col-md-8 ">
                   <select className="form-control form-input"  onChange={(event)=>{this.setState({riderTypeId:event.target.value})}}>
                        {this.createridertypesoptions()} 
                   </select>
                </div>
             </div><br/>
             <div className="row">
                
                        <div className="col-md-4">
                            <label>Amount</label>
                        </div>
                        <div className="col-md-8">
                            <input type="number" className="form-control form-input" name="amount" onChange={(event)=>{this.setState({amount:event.target.value})}}  placeholder="Amount*" value={this.state.amount} required />
                     
                </div>
            </div><br />
            <div className="row">
                
                        <div className="col-md-4">
                            <label>Sellers</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control form-input" name="sellers" onChange={(event)=>{this.setState({sellers:event.target.value})}} placeholder="Sellers*" value={this.state.sellers} required />
                     
                </div>
            </div><br/>
          
            <div className="row">
                <div className="col-md-4">
                   <label>Description</label>
                </div>
                <div className="col-md-8">
                   <textarea rows="3" cols="30" name="description" className="form-control form-input"  onChange={(event)=>{this.setState({description:event.target.value})}} value={this.state.description} required></textarea>
                  
                </div>
             </div>
    <br />

        
            <div className="row">
                <div className="col-lg-6 col-lg-offset-3 text-center">
                    <button id="btn-reset" type="reset" className="btn button"> Reset</button>
                            
                    <button id="btn-Register" type="submit" name="submit"  onClick={(event)=>this.updatepassfaretype(event)} className="btn button" ng-disabled="newtickettypeform.$invalid"> 
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
                <div>
        <Modal show={this.state.showDeleteModal} onHide={(event)=>this.close(event)}>
          <Modal.Header >
            <Modal.Title>Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Are you Sure you want to delete?</p>
            <Button onClick={(event)=>this.close(event)}>Cancel</Button>
            <Button onClick={(event)=>this.deletepassfaretype(event)} > Ok</Button>
          </Modal.Body>
          <Modal.Footer>
             <Button onClick={(event)=>this.close(event)}>Close</Button> 
          </Modal.Footer>
        </Modal>
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
export default connect(mapStateToProps,{fetchPassFareTypes,DeletepassFareTypes,fetchPassTypes,fetchRiderTypes,fetchVehicleTiers})(passfaretypes);