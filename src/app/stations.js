var React = require('react');

var Delete = require('react-icons/lib/fa/trash');
var Edit = require('react-icons/lib/fa/pencil');
import {connect} from 'react-redux';

import {fetchStations,DeleteStation,UpdateStation} from './actions/stationsAction'
import {Link} from 'react-router';
import LoginNavigation from './loinNavigation.js';
import ConfigSidebar from './layouts/configsidebar.js';
import Dialog from 'react-bootstrap-dialog';
import  {Modal,Button} from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


class Stations extends React.Component{
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
deleteStations(event,user){
    this.setState({
      showDeleteModal:true,
      id:user.id
    })
  }
deleteStationtype(event){
  event.preventDefault();
    var self=this;
      var deleterow={
           "id":this.state.id
        }
      this.props.DeleteStation(deleterow)
      this.setState({ showDeleteModal: false })
      
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
updateStation(event){
  event.preventDefault();
     var self = this;
      var update={
        "name":this.state.name,
        "code":this.state.code,
        "id":this.state.id
        }
          // console.log(update);
          this.props.UpdateStation(update);
          this.setState({ showModal: false })
  }
componentWillMount(){
    console.log("mounted")
    this.props.fetchStations()
  }
 editFormatter(cell, row) {
    return <Button bsStyle="info" className="listButton" onClick={(event)=>this.edit(event,row)} ><Edit size={20} /></Button>;
  }
  deleteFormatter(cell, row) {
    return <Button bsStyle="danger" className="listButton"  onClick={(event)=>this.deleteStations(event,row)}><Delete size={20} color={'white'} /><Dialog ref={(el) => { this.dialog = el }} /> </Button>;
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
                         <h3>Stations</h3>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-lg-2 pull-right">
                         <Link to="/config/stations/newstation"> New Station </Link> 
                        </div>
                    </div>
                     <div className="row">
                        <BootstrapTable data={this.props.stations}  bordered={true}  pagination={true} striped={true} hover={false} >
                            <TableHeaderColumn  width="70" dataField="id" isKey={true} hidden={true}>ID</TableHeaderColumn> 
                            <TableHeaderColumn dataField="name"  className="reactTableHeader groupListHeader" columnClassName=" groupListCell"  > Name</TableHeaderColumn>
                            <TableHeaderColumn dataField="code" className="reactTableHeader groupListHeader" columnClassName="reactTableCell groupListCell" >Code</TableHeaderColumn>
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
              <div className="row">
                  <div className="panel panel-info" >
                      <div className="panel-body">
                          <form name="addridertypeform" >
                              <div className="row">
                                <div className="col-md-4">
                                  <label>Name:</label>
                                </div>
                                <div className="col-md-8">
                                  <input type="text" className="form-control form-input" name="addridertype"  placeholder="Station *" onChange={(event) => this.setState({name:event.target.value}) } value={this.state.name} required/>
                                </div>
                              </div><br/>
                              <div className="row">
                                <div className="col-md-4">
                                  <label>code:</label>
                                </div>
                                <div className="col-md-8">
                                  <input type="text" className="form-control form-input"   placeholder="Code *" onChange={(event) => this.setState({code:event.target.value}) } value={this.state.code} required/>
                                </div>
                              </div>
                              <br/>
                              <div className="row">
                                <div className="col-lg-6 col-lg-offset-3 text-center">
                                  <button id="btn-reset" type="reset" className="btn btn-default">Cancel</button>
                                    <button id="btn-Register" type="submit" name="submit" className="btn btn-default" onClick={(event)=>this.updateStation(event)}>Update</button>
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
                </div>
                <div>
                    <Modal show={this.state.showDeleteModal} onHide={(event)=>this.close(event)}>
                    <Modal.Header >
                        <Modal.Title>Delete</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Are you Sure you want to delete?</p>
                        <Button onClick={(event)=>this.close(event)}>Cancel</Button>
                        <Button onClick={(event)=>this.deleteStationtype(event)} > Ok</Button>
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
      stations:state.stations,
    }
}
export default connect(mapStateToProps,{fetchStations,DeleteStation,UpdateStation})(Stations);