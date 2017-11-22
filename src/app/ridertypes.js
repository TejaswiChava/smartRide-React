var React = require('react');
var ReactDOM = require('react-dom');
var createClass = require('create-react-class');
var request=require('superagent');
var Delete = require('react-icons/lib/fa/trash');
var Edit = require('react-icons/lib/fa/pencil');
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {fetchRiderTypes,Deleteridertype,UpdateRiderType} from './actions/riderTypesAction'
import {Link} from 'react-router';
import LoginNavigation from './loinNavigation.js';
import ConfigSidebar from './layouts/configsidebar.js';
import Dialog from 'react-bootstrap-dialog';
import  {Modal,Button} from 'react-bootstrap';
import { TablePagination } from 'react-pagination-table';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import ReactTable from "react-table";
import "react-table/react-table.css";


class RiderTypes extends React.Component 
{
  
    constructor (props) {
    super(props);
   
    this.state={
      showModal:false,
      
    }
    
}
componentWillMount(){
  
console.log("mounted")
  this.props.fetchRiderTypes()
  


}
 close(event) {
    this.setState({ showModal: false ,
                    showDeleteModal:false

    },
    );
  }
deleteRider(event,user){
    this.setState({
      showDeleteModal:true,
      id:user.id
    })
  }
 edit(event,user){

    this.setState(
      { showModal: true,
        name:user.name,
        description:user.description,
        id:user.id
       }
    );

    
  }
  deleteRidertype(event){
  
    event.preventDefault();
    var self=this;
      var deleterow={
           
            "id":this.state.id
        }
        this.props.Deleteridertype(deleterow)
          this.setState({ showDeleteModal: false })
          console.log(deleterow);
  }
  updateRider(event){
     event.preventDefault();
        var self = this;
        var update={
            "name":this.state.name,
            "description":this.state.description,
            "id":this.state.id
        }
          console.log(update);
          this.props.UpdateRiderType(update);
           this.setState({ showModal: false })
  }

cellFormatter(cell, row) {
    return( <div>
    <span>{row.name}</span>
   
    </div>);
  }
cellFormatter1(cell,row){
  return (
    <span>{row.description}</span>
  )
}
 editFormatter(cell, row) {
    return <Button bsStyle="info" className="listButton" onClick={(event)=>this.edit(event,row)} ><Edit size={20} /></Button>;
  }

deleteFormatter(cell, row) {
    return <Button bsStyle="danger" className="listButton"  onClick={(event)=>this.deleteRider(event,row)}><Delete size={20} color={'white'} /><Dialog ref={(el) => { this.dialog = el }} /> </Button>;
  }
   
render(){

 var {ridertypes}=this.props;
    const options = {
      page: 2,  // which page you want to show as default
      sizePerPageList: [ {
        text: '5', value: 5
      }, {
        text: '10', value: 10
      }, {
        text: 'All', value: ridertypes.length
      } ], // you can change the dropdown list for size per page
      sizePerPage: 5,  // which size per page you want to locate as default
      pageStartIndex: 0, // where to start counting the pages
      paginationSize: 3,  // the pagination bar size.
      prePage: 'Prev', // Previous page button text
      nextPage: 'Next', // Next page button text
      firstPage: 'First', // First page button text
      lastPage: 'Last', // Last page button text
      paginationShowsTotal: this.renderShowsTotal,  // Accept bool or function
      paginationPosition: 'bottom'  // default is bottom, top and both is all available
      // hideSizePerPage: true > You can hide the dropdown for sizePerPage
      // alwaysShowAllBtns: true // Always show next and previous button
      // withFirstAndLast: false > Hide the going to First and Last page button
    };

return(
    <div className="row">
      <LoginNavigation />
<div className="col-lg-2">
      <ConfigSidebar />
      </div>
      <div className="col-lg-9">
        <div className="row">
          <h3>Rider Types</h3>
          <hr />
          </div>
          <div className="row">
            <div className="col-lg-2 pull-right">
         
            <Link to="/config/ridertypes/newridertype"> New RiderType </Link>
            </div>
            </div>
           <div className="row">
   
        <BootstrapTable data={ridertypes}  bordered={true}  pagination={ true } striped={true} hover={false} options={options}>
          <TableHeaderColumn dataField="id" isKey={true} hidden={true}>ID</TableHeaderColumn>
          <TableHeaderColumn dataField="name" className="reactTableHeader groupListHeader" columnClassName="reactTableCell groupListCell"  > Name</TableHeaderColumn>
          <TableHeaderColumn dataField="description" className="reactTableHeader groupListHeader" columnClassName="reactTableCell groupListCell" >Description</TableHeaderColumn>
           <TableHeaderColumn width="50" className="reactTableHeader groupListHeader" columnClassName="reactTableCell groupListCell"  dataFormat={this.editFormatter.bind(this)}>Update</TableHeaderColumn> 
           <TableHeaderColumn width="50" className="reactTableHeader groupListHeader" columnClassName="reactTableCell groupListCell"  dataFormat={this.deleteFormatter.bind(this)} >Delete</TableHeaderColumn> 
           
        </BootstrapTable>
              
   
        </div> 
        
            </div>
          <Modal show={this.state.showModal} onHide={(event)=>this.close(event)}>
          <Modal.Header >
            <Modal.Title>Update</Modal.Title>
          </Modal.Header>
          <Modal.Body>
             <div className="row">
                <div className="panel panel-info" >
                    <div className="panel-body">
                        <form name="addridertypeform" >
                            <div className="row">
                                <div className="col-md-4">
                            <label>Name:</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control form-input" name="addridertype"  placeholder="Rider Type*" onChange={(event) => this.setState({name:event.target.value}) } value={this.state.name} required/>
                        
                </div>
            </div><br/>
            <div className="row">
                    <div className="col-md-4">
                       <label>Description:</label>
                    </div>
                    <div className="col-md-8">
                       <textarea rows="3" cols="30" name="description" className="form-control form-input" placeholder="Description ......*" onChange={(event) => this.setState({description:event.target.value})} value={this.state.description} required></textarea>
                      
                    </div>
                 </div>
        <br/>
            <div className="row">
                <div className="col-lg-6 col-lg-offset-3 text-center">
                    <button id="btn-reset" type="reset" className="btn btn-default">Cancel</button>
                            
                    <button id="btn-Register" type="submit" name="submit" className="btn btn-default" onClick={(event)=>this.updateRider(event)}> 
                    Update</button>
                            
                </div>
            </div>
        </form>
    </div>
</div>
         </div> 

          </Modal.Body>
          <Modal.Footer>
             <Button onClick={(event)=>this.close(event)}>Close</Button> 
          </Modal.Footer>
        </Modal>
   <div>
      <Modal show={this.state.showDeleteModal} onHide={(event)=>this.close(event)}>
          <Modal.Header >
            <Modal.Title>Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Are you Sure you want to delete?</p>
            <Button onClick={(event)=>this.close(event)}>Cancel</Button>
            <Button onClick={(event)=>this.deleteRidertype(event)} > Ok</Button>

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
      ridertypes:state.ridertypes,
      
  }



}
  




export default connect(mapStateToProps,{fetchRiderTypes,Deleteridertype,UpdateRiderType})(RiderTypes);