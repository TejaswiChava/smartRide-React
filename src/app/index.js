var React = require('react');
var ReactDOM = require('react-dom');
var createClass = require('create-react-class');
import{Router , Route ,browserHistory,IndexRoute} from 'react-router';
import {Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { render } from 'react-dom';
//Module requires

import Home from './home';
import About from './about';
import Dashboard from './dashboard';
import Config from './config';
import RiderTypes from './ridertypes';
import NewRiderType from './newRiderType';
import TicketFareTypes from './ticketfaretypes'
import NewTicketFaretype from './newticketfaretype'
import VehicleTiers from './vehicleTiers'
import NewVehicleTier from './newvehicletier'
import Stations from './stations'
import PostNewStation from './newStation'
import Routes from './routes'
import NewRoute from './newroute'
import Vehicles from './vehicles'
import NewVehicle from './newVehicle'
import Inspectors from './inspectors'
import NewInspector from './newInspector'
import PassTypes from './passtypes'
import newpasstype from './newpasstype'
import passfaretypes from './passfaretypes'
import newpassfaretype from './newpassfaretype'
import vehiclemanagement from './vehiclemanagement'
import ticketfaregroup from './ticketfaregroup'
import newticketfaregroup from './newticketfaregroup'
import vehiclegroup from './vehiclegroup'
import newvehiclegroup from './newvehiclegroup'
//store

import allReducers from './reducers';


const store=createStore(allReducers,applyMiddleware(thunk));


render( 
<Provider store={store}>
                <Router history={browserHistory}>
                  <Route path="/" component={Home}></Route> 
                {/* <IndexRoute  component={Home}/> */}
                 
                <Route path="/dashboard" component={Dashboard}></Route>
                
                 <Route path="/config" component={Config}></Route> 
                 <Route path="/vehiclemanagement" component={vehiclemanagement}></Route>

                <Switch>
                <Route path="/config/ridertypes" component={RiderTypes}></Route>
                <Route path="/config/ridertypes/newridertype" component={NewRiderType}></Route> 
               </Switch>
                <Route path="/config/ticketfaretypes" component={TicketFareTypes}></Route>
                <Route path="/config/ticketfaretypes/newticketfaretype" component={NewTicketFaretype}></Route>
                <Route path="/config/vehicletier" component={VehicleTiers}></Route>
                <Route path="/config/vehicletier/newvehicletier" component={NewVehicleTier}></Route>
                 <Route path="/config/stations" component={Stations}></Route> 
                 <Route path="/config/stations/newstation" component={PostNewStation}></Route>
                 <Route path="/config/routes" component={Routes}></Route>
                 <Route path="/config/routes/newroute" component={NewRoute}></Route>
                 <Route path="/config/vehicles" component={Vehicles}></Route>
                 <Route path="/config/vehicles/newvehicle" component={NewVehicle}></Route>
                 <Route path="/config/inspectors" component={Inspectors}></Route>
                 <Route path="/config/inspectors/newinspecors" component={NewInspector}></Route>
                 <Route path='/config/passtypes' component={PassTypes}></Route>
                 <Route path='/config/passtypes/newpasstype' component={newpasstype}></Route>
                 <Route path='/config/passfaretypes' component={passfaretypes}></Route>
                 <Route path='/config/passfaretypes/newpassfaretype' component={newpassfaretype}></Route>
                 <Route path='/vehiclemanagement/ticketfaregroup' component={ticketfaregroup}></Route>
                 <Route path='/vehiclemanagement/ticketfaregroup/newticketfaregroup' component={newticketfaregroup}></Route>
                 <Route path='/vehiclemanagement/vehiclegroup' component={vehiclegroup}></Route>
                 <Route path='/vehiclemanagement/vehiclegroup/newvehiclegroup' component={newvehiclegroup}></Route>
               
                </Router>
</Provider>, document.getElementById('todo-wrapper')
);
