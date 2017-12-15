var React = require('react');

var Delete = require('react-icons/lib/fa/trash');
var Edit = require('react-icons/lib/fa/pencil');
import {connect} from 'react-redux';

import {fetchInspectors,DeleteInspector,UpdateInspectors} from './actions/inspectorsAction'
import {Link} from 'react-router';
import LoginNavigation from './loinNavigation.js';
import ConfigSidebar from './layouts/configsidebar.js';
import Dialog from 'react-bootstrap-dialog';
import  {Modal,Button} from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';



class Inspectors extends React.Component{
    constructor (props) {
    super(props);
   
      this.state={
        showModal:false,
    
      
      }
      
    }

    componentWillMount(){
        this.props.fetchInspectors();
    }
    close(event) {
  this.setState({ showModal: false ,
                    showDeleteModal:false});
  }
    deleteInspector(event,user){
        this.setState({
        showDeleteModal:true,
        id:user.id
        })
    }
    deleteInspectors(event){
  event.preventDefault();
    var self=this;
      var deleterow={
           "id":this.state.id
        }
      this.props.DeleteInspector(deleterow)
      this.setState({ showDeleteModal: false })
      
  }
    edit(event,user){
  this.setState(
      { showModal: true,
        name:user.name,
        employeeId:user.employeeId,
        loginId:user.loginId,
        password:user.password,
        id:user.id
       }
    );
  }
UpdateInspector(event){
  event.preventDefault();
     var self = this;
      var update={
          "id":this.state.id,
     "name":this.state.name,
     "employeeId":this.state.employeeId,
     "loginId":this.state.loginId,
     "password":this.state.password
        }
          // console.log(update);
          this.props.UpdateInspectors(update);
          this.setState({ showModal: false })
  }
    editFormatter(cell, row) {
    return <Button bsStyle="info" className="listButton" onClick={(event)=>this.edit(event,row)} ><Edit size={20} /></Button>;
  }
  deleteFormatter(cell, row) {
    return <Button bsStyle="danger" className="listButton"  onClick={(event)=>this.deleteInspector(event,row)}><Delete size={20} color={'white'} /><Dialog ref={(el) => { this.dialog = el }} /> </Button>;
  }
    render(){
        return(
            <div>
                <div className="row">
                    <LoginNavigation />

                </div>
                <div className="row">
                    <div className="col-lg-2">
                        <ConfigSidebar />
                    </div>
                    <div className="col-lg-9">
                        <div className="row">
                            <h3>Inspectors </h3>
                            <hr />
                        </div>
                        <div className="row">
                            <div className="col-lg-2 pull-right">
                                <Link to="/config/inspectors/newinspecors"> New Inspector </Link>
                            </div>
                        </div>
                        <div className="row">
                            <BootstrapTable data={this.props.inspectors}  bordered={true}  pagination={true} striped={true} hover={false} >
                                 <TableHeaderColumn  width="70" dataField="id" isKey={true} hidden={true}>ID</TableHeaderColumn> 
                                <TableHeaderColumn dataField="name"  className="reactTableHeader groupListHeader" columnClassName=" groupListCell"  > Name</TableHeaderColumn>
                                <TableHeaderColumn dataField="employeeId" className="reactTableHeader groupListHeader" columnClassName="reactTableCell groupListCell" >Employee Id</TableHeaderColumn>
                                <TableHeaderColumn dataField="loginId" className="reactTableHeader groupListHeader" columnClassName="reactTableCell groupListCell" >Login Id</TableHeaderColumn>
                                
                                <TableHeaderColumn width="50" className="reactTableHeader groupListHeader" columnClassName="reactTableCell groupListCell"  dataFormat={this.editFormatter.bind(this)}>Update</TableHeaderColumn> 
                                <TableHeaderColumn width="50" className="reactTableHeader groupListHeader" columnClassName="reactTableCell groupListCell"  dataFormat={this.deleteFormatter.bind(this)} >Delete</TableHeaderColumn> 
                            </BootstrapTable> 
                        </div>
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
                            <Button onClick={(event)=>this.deleteInspectors(event)} > Ok</Button>
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
                                <div>
                                          <form name="addridertypeform" >
                <div className="row">
                 
                            <div className="col-md-4">
                                <label>Name</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" className="form-control form-input" name="name" placeholder="Name*"  onChange={(event) => this.setState({name:event.target.value})} value={this.state.name} required />
                        
                    </div>
                </div><br/>
                <div className="row">
                        
                    <div className="col-md-4">
                        <label>Employee Id</label>
                    </div>
                    <div className="col-md-8">
                        <input type="text" className="form-control form-input" name="employeeid"  placeholder="Employee Id*"  onChange={(event) => this.setState({employeeid:event.target.value})} value={this.state.employeeId}   required/>
                
            </div>
                       </div><br/>
                       <div className="row">
                            
                        <div className="col-md-4">
                            <label>Login Id</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control form-input" name="loginid"  placeholder="Any 4 Digits*"  onChange={(event) => this.setState({loginid:event.target.value})} value={this.state.loginId} required />
                    
                </div>
                           </div><br/>
                           <div className="row">
                                
                            <div className="col-md-4">
                                <label>Password</label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" className="form-control form-input" name="password"  placeholder="Any 6 Digits*"  onChange={(event) => this.setState({password:event.target.value}) } value={this.state.password} required />
                        
                    </div>
                               </div><br/>
           
                <div className="row">
                    <div className="col-lg-6 col-lg-offset-3 text-center">
                        <button id="btn-reset" type="reset" className="btn button"> Reset</button>
                                
                        <button id="btn-Register" type="submit" name="submit"  className="btn button"  onClick={(event)=>this.UpdateInspector(event)}> 
                        Submit</button>
                                
                    </div>
                </div>
            </form>

                                </div>
                           
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
     inspectors:state.inspectors
    }
}
export default connect(mapStateToProps,{fetchInspectors,DeleteInspector,UpdateInspectors})(Inspectors);