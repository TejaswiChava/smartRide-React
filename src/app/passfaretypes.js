var React = require('react');

var Delete = require('react-icons/lib/fa/trash');
var Edit = require('react-icons/lib/fa/pencil');
import {connect} from 'react-redux';

import {fetchPassFareTypes,DeletepassFareTypes} from './actions/passfaretypesAction'
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
        name:user.name,
        code:user.code,
        id:user.id
       }
    );
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

componentWillMount(){
    this.props.fetchPassFareTypes();
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
    }
}
export default connect(mapStateToProps,{fetchPassFareTypes,DeletepassFareTypes})(passfaretypes);