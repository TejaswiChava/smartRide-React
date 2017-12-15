var React = require('react');

var Delete = require('react-icons/lib/fa/trash');
var Edit = require('react-icons/lib/fa/pencil');
import {connect} from 'react-redux';

 import {fetchPassTypes,Deletepasstypes,UpdatePassType} from './actions/passtypesAction'
import {Link} from 'react-router';
import LoginNavigation from './loinNavigation.js';
import ConfigSidebar from './layouts/configsidebar.js';
import Dialog from 'react-bootstrap-dialog';
import  {Modal,Button} from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


class passtypes extends React.Component{
      constructor (props) {
    super(props);
   
      this.state={
        showModal:false,
    
      
      }
      
    }
    close(event) {
    this.setState({ showModal: false,showDeleteModal:false});
  }
  deletepasstype(event,user){
    this.setState({
      showDeleteModal:true,
      id:user.id
    })
  }

deletePasstype(event){
  event.preventDefault();
    var self=this;
      var deleterow={
           "id":this.state.id
        }
      this.props.Deletepasstypes(deleterow)
      this.setState({ showDeleteModal: false })
      
  }
    componentWillMount(){
        this.props.fetchPassTypes();
    }
    editFormatter(cell, row) {
    return <Button bsStyle="info" className="listButton" onClick={(event)=>this.edit(event,row)} ><Edit size={20} /></Button>;
  }
  deleteFormatter(cell, row) {
    return <Button bsStyle="danger" className="listButton"  onClick={(event)=>this.deletepasstype(event,row)}><Delete size={20} color={'white'} /><Dialog ref={(el) => { this.dialog = el }} /> </Button>;
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

 updatePasstype(event){
  event.preventDefault();
     var self = this;
      var update={
        "name":this.state.name,
        "description":this.state.description,
        "id":this.state.id
        }
          // console.log(update);
          this.props.UpdatePassType(update);
          this.setState({ showModal: false })
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
                            <h3>Pass Types</h3>
                            <hr />
                        </div>
                        <div className="row">
                            <div className="col-lg-2 pull-right">
                            <Link to="/config/passtypes/newpasstype"> New Pass Type </Link>
                            </div>
                         </div>
                         <div>
                        <BootstrapTable data={this.props.passtypes}  bordered={true}  pagination={true} striped={true} hover={false} >
                            <TableHeaderColumn  width="70" dataField="id" isKey={true} hidden={true}>ID</TableHeaderColumn> 
                            <TableHeaderColumn dataField="name"  className="reactTableHeader groupListHeader" columnClassName=" groupListCell"  > Name</TableHeaderColumn>
                            <TableHeaderColumn dataField="description" className="reactTableHeader groupListHeader" columnClassName="reactTableCell groupListCell" >Description</TableHeaderColumn>
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
                            <Button onClick={(event)=>this.deletePassTypes(event)} > Ok</Button>
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
                                                            <button id="btn-Register" type="submit" name="submit" className="btn btn-default" onClick={(event)=>this.updatePasstype(event)}>Update</button>
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
            <Button onClick={(event)=>this.deletePasstype(event)} > Ok</Button>
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
      passtypes:state.passtypes,
    }
}
export default connect(mapStateToProps,{fetchPassTypes,Deletepasstypes,UpdatePassType})(passtypes);