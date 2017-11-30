import React from 'react';
import {connect} from 'react-redux';


import LoginNavigation from './loinNavigation.js';
import ConfigSidebar from './layouts/configsidebar.js';


class NewTicketFaretype extends React.Component
{
    render(){
        
    return(
      <div className="row">
          <LoginNavigation/>
          <div className="col-lg-2">
                <ConfigSidebar />
              </div>
            <div className="col-lg-9">
                <div className="row">
                    <h3>New Ticket Fare Type</h3>
                    <hr />

                </div>
                <div className="row">
                <div className="panel panel-info  createpanel col-lg-6 col-lg-offset-3" >
                    <div className="panel-body">
                        <form name="addridertypeform" >
                            <div className="row">
                                <div className="col-md-4">
                            <label>Name:</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control form-input" name="addridertype"  placeholder="Rider Type*" onChange={(event) => this.setState({name:event.target.value}) } required/>
                        
                </div>
            </div><br/>
            <div className="row">
                    <div className="col-md-4">
                       <label>Description:</label>
                    </div>
                    <div className="col-md-8">
                       <textarea rows="3" cols="30" name="description" className="form-control form-input" placeholder="Description ......*" onChange={(event) => this.setState({description:event.target.value})} required></textarea>
                      
                    </div>
                 </div>
        <br/>
            <div className="row">
                <div className="col-lg-6 col-lg-offset-3 text-center">
                    <button id="btn-reset" type="reset" className="btn btn-default"> Reset</button>
                            
                    <button id="btn-Register" type="submit" name="submit" className="btn btn-default" onClick={(event)=>this.newriderType(event)}> 
                    Submit</button>
                            
                </div>
            </div>
        </form>
    </div>
</div>
         </div>       
            </div>
               
                
          </div>
         
    
    )
}
}
function mapStateToProps(state){
  return{
      vehicletier:state.vehicletier,
    }
}
export default connect(mapStateToProps,{})(NewTicketFaretype);