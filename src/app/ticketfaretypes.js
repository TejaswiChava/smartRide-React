var React = require('react');


var Delete = require('react-icons/lib/fa/trash');
var Edit = require('react-icons/lib/fa/pencil');
import LoginNavigation from './loinNavigation.js';
import ConfigSidebar from './layouts/configsidebar.js';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import Dialog from 'react-bootstrap-dialog';
import  {Modal,Button} from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import {fetchTicketFareTypes} from './actions/ticketfaretypesAction'


class TicketFareTypes extends React.Component{
componentWillMount(){
    console.log("mounted")
    this.props.fetchTicketFareTypes()
  }
editFormatter(cell, row) {
    return <Button bsStyle="info" className="listButton" onClick={(event)=>this.edit(event,row)} ><Edit size={20} /></Button>;
  }
deleteFormatter(cell, row) {
    return <Button bsStyle="danger" className="listButton"  onClick={(event)=>this.deleteRider(event,row)}><Delete size={20} color={'white'} /><Dialog ref={(el) => { this.dialog = el }} /> </Button>;
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
                        <h3>Ticket Fare Types</h3>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-lg-2 pull-right">
                             <Link to="/config/ticketfaretypes/newticketfaretype"> New Ticket Fare Type </Link> 
                        </div>
                    </div>
                     <div className="row">
              <BootstrapTable data={this.props.ticketfaretypes}  bordered={true}  pagination={true} striped={true} hover={false} >
                <TableHeaderColumn  width="70" dataField="fareTypeId" isKey={true} hidden={true}>ID</TableHeaderColumn> 
                <TableHeaderColumn dataField="routeName"  className="reactTableHeader groupListHeader" columnClassName=" groupListCell"  > Route Name</TableHeaderColumn>
                <TableHeaderColumn dataField="originStation" className="reactTableHeader groupListHeader" columnClassName="reactTableCell groupListCell" >Origin Station</TableHeaderColumn>
                <TableHeaderColumn dataField="destinationStation" className="reactTableHeader groupListHeader" columnClassName="reactTableCell groupListCell">Destination Station </TableHeaderColumn>
                <TableHeaderColumn dataField="amount" className="reactTableHeader groupListHeader" columnClassName="reactTableCell groupListCell">Amount </TableHeaderColumn>
                <TableHeaderColumn dataField="sellers" className="reactTableHeader groupListHeader" columnClassName="reactTableCell groupListCell">Sellers</TableHeaderColumn>
                
                <TableHeaderColumn width="50" className="reactTableHeader groupListHeader" columnClassName="reactTableCell groupListCell"  dataFormat={this.editFormatter.bind(this)}>Update</TableHeaderColumn> 
                
                <TableHeaderColumn width="50" className="reactTableHeader groupListHeader" columnClassName="reactTableCell groupListCell"  dataFormat={this.deleteFormatter.bind(this)} >Delete</TableHeaderColumn> 
              </BootstrapTable>
            </div> 

                </div>
       </div>
    )
}

}

function mapStateToProps(state){
  return{
      ticketfaretypes:state.ticketfaretypes,
    }
}
export default connect(mapStateToProps,{fetchTicketFareTypes})(TicketFareTypes);