var React = require('react');

var Delete = require('react-icons/lib/fa/trash');
var Edit = require('react-icons/lib/fa/pencil');
import {connect} from 'react-redux';

import {fetchRoutes} from './actions/routesAction'
import {Link} from 'react-router';
import LoginNavigation from './loinNavigation.js';
import ConfigSidebar from './layouts/configsidebar.js';
import Dialog from 'react-bootstrap-dialog';
import  {Modal,Button} from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';



class Routes extends React.Component{
    componentWillMount(){
    console.log("mounted")
    this.props.fetchRoutes()
  }
    editFormatter(cell, row) {
    return <Button bsStyle="info" className="listButton" onClick={(event)=>this.edit(event,row)} ><Edit size={20} /></Button>;
  }
  deleteFormatter(cell, row) {
    return <Button bsStyle="danger" className="listButton"  onClick={(event)=>this.deleteRider(event,row)}><Delete size={20} color={'white'} /><Dialog ref={(el) => { this.dialog = el }} /> </Button>;
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
              <h3>Routes</h3>
                <hr />
            </div>
            <div className="row">
              <div className="col-lg-2 pull-right">
                 <Link to="/config/routes/newroute"> New Route </Link> 
              </div>
            </div>
               <div className="row">
              <BootstrapTable data={this.props.routes}  bordered={true}  pagination={true} striped={true} hover={false} >
                <TableHeaderColumn  width="70" dataField="id" isKey={true} hidden={true}>ID</TableHeaderColumn> 
                <TableHeaderColumn dataField="routeName"  className="reactTableHeader groupListHeader" columnClassName=" groupListCell"  > Route Name</TableHeaderColumn>
                <TableHeaderColumn dataField="origin" className="reactTableHeader groupListHeader" columnClassName="reactTableCell groupListCell" >Origin</TableHeaderColumn>
                <TableHeaderColumn dataField="destination" className="reactTableHeader groupListHeader" columnClassName="reactTableCell groupListCell" >Destinattion</TableHeaderColumn>
                
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
      routes:state.routes,
    }
}
export default connect(mapStateToProps,{fetchRoutes})(Routes);