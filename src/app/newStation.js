import React from 'react';
import {connect} from 'react-redux';


import LoginNavigation from './loinNavigation.js';
import ConfigSidebar from './layouts/configsidebar.js';
import {NewStation} from './actions/stationsAction'


class PostNewStation extends React.Component{
         constructor(props){
        super(props);
        this.state={
            
            latitude:'',
            longitude:'',
            stopname:'',
            address:'',
            code:''

            
             
        }
       this.newStation = this.newStation.bind(this);
        
    }
    newStation(event){
       event.preventDefault();
        var self = this;
        var newstation={
            "latitude":this.state.latitude,
            "longitude":this.state.longitude,
            "name":this.state.stopname,
            "address":this.state.address,
            "code":this.state.code
        }
        console.log(newstation)
        this.props.NewStation(newstation);
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
                    <h3>New Station</h3>
                    <hr />
                    </div>
                    <div className="row">
                        <div className="panel panel-info  createpanel col-lg-6 col-lg-offset-3" >
        <div className="panel-body">
           <form name="newstationform" >
          
              <div className="row">
                 <div className="col-md-4">
                    <label>Latitude</label>
                 </div>
                 <div className="col-md-8 ">
                    <input type="text" className="form-control form-input" id="" name="latitude" placeholder="Latitude*" onChange={(event) => this.setState({latitude:event.target.value}) }  required/>
                 </div>
              </div>
                <br/>
              <div className="row">
                 <div className="col-md-4">
                    <label>Longitude</label>
                 </div>
                 <div className="col-md-8 ">
                    <input type="text" className="form-control form-input" id="" name="longitude" placeholder="Longitude*"  onChange={(event) => this.setState({longitude:event.target.value}) } required />
                 </div>
              </div>
              <br/>
              
              <div className="row">
                 <div className="col-md-4">
                    <label>Station Name</label>
                 </div>
                 <div className="col-md-8 ">
                    <input type="text" className="form-control form-input" id="" name="stopname" placeholder="Stop Name*"  onChange={(event) => this.setState({stopname:event.target.value}) }    required />
                 </div>
              </div>
              <br/>
              <div className="row">
                 <div className="col-md-4">
                    <label>Adress</label>
                 </div>
                 <div className="col-md-8 ">
                    <input type="text" className="form-control form-input" id="" name="address" placeholder="Address*"  onChange={(event) => this.setState({address:event.target.value}) }   required />
                 </div>
              </div><br/>
              <div className="row">
                    <div className="col-md-4">
                       <label>Code</label>
                    </div>
                    <div className="col-md-8 ">
                       <input type="text" className="form-control form-input" id="" name="code" placeholder="Code*"  onChange={(event) => this.setState({code:event.target.value}) }  required />
                    </div>
                 </div><br />
              <div className="row">
                 <div className="col-lg-6 col-lg-offset-3 text-center">
                    <button id="btn-reset" type="reset" className="btn"> Reset</button>
                    <button id="btn-Register" type="submit" name="submit"  className="btn" onClick={(event)=>this.newStation(event)} >Submit</button>
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
    stations:state.stations
}
}

module.exports=connect(mapStateToProps,{NewStation})(PostNewStation);