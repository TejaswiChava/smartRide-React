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
import {fetchTicketFareGroups,DeleteTicketFareGroup,UpdateTicketFareGroup} from './actions/ticketfaregroupAction';




class ticketfaregroup extends React.Component{
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
        name:user.name

      
       }
    );
  }

      close(event) {
  this.setState({ showModal: false ,
                    showDeleteModal:false});
  }
delete(event,user){
    this.setState({
      showDeleteModal:true,
      id:user.id
    })
  }
deleteTicketFareGroup(event){
    event.preventDefault();
    var self=this;
      var deleterow={
           "id":this.state.id
        }
        console.log(deleterow);
    this.props.DeleteTicketFareGroup(deleterow)
      this.setState({ showDeleteModal: false })
}

    componentWillMount(){
        this.props.fetchTicketFareGroups();
    }
 
 updateticketFareGroup(event){
  event.preventDefault();
     var self = this;
      var update={
          "id":this.state.id,
            "name":this.state.name
        }
          console.log(update);
     this.props.UpdateTicketFareGroup(update);
          this.setState({ showModal: false })
  }
           editFormatter(cell, row) {
    return <Button bsStyle="info" className="listButton" onClick={(event)=>this.edit(event,row)} ><Edit size={20} /></Button>;
  }
  deleteFormatter(cell, row) {
    return <Button bsStyle="danger" className="listButton"  onClick={(event)=>this.delete(event,row)}><Delete size={20} color={'white'} /><Dialog ref={(el) => { this.dialog = el }} /> </Button>;
  }
    render( ){
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
              <h3>Ticket Fare Group</h3>
                <hr />
            </div>
            <div className="row">
              <div className="col-lg-2 pull-right">
                 <Link to="/vehiclemanagement/ticketfaregroup/newticketfaregroup">New Ticket Fare Group</Link> 
              </div>
            </div>
                 <div className="row">
              <BootstrapTable data={this.props.ticketfaregroup}  bordered={true}  pagination={true} striped={true} hover={false} >
                <TableHeaderColumn  width="70" dataField="id" isKey={true} hidden={true}>ID</TableHeaderColumn> 
                <TableHeaderColumn dataField="name"  className="reactTableHeader groupListHeader" columnClassName=" groupListCell"  >  Name</TableHeaderColumn>
                
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
             <Button onClick={(event)=>this.deleteTicketFareGroup(event)} > Ok</Button> 
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
                  <form name="newticketfaregroupform" >
            <div className="row">
               
                        <div className="col-md-4">
                            <label>Name</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control form-input" name="name" placeholder="Ticket Fare Group*" onChange={(event) => this.setState({name:event.target.value}) } value={this.state.name} required />
                        </div>
                   
            </div><br />
       
            <div className="row">
                <div className="col-lg-6 col-lg-offset-3 text-center">
                    <button id="btn-reset" type="reset" className="btn button"> Reset</button>
                            
                    <button id="btn-Register" type="submit" name="submit"  className="btn button" onClick={(event)=>this.updateticketFareGroup(event)} > 
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
      ticketfaregroup:state.ticketfaregroup
    }
}
export default connect(mapStateToProps,{fetchTicketFareGroups,DeleteTicketFareGroup,UpdateTicketFareGroup})(ticketfaregroup);