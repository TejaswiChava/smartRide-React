var React = require('react');
var ReactDOM = require('react-dom');
var createClass = require('create-react-class');
import{Router , Route ,browserHistory,IndexRoute} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { render } from 'react-dom';
//Module requires
var Home = require('./home');

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


//store

import allReducers from './reducers';


const store=createStore(allReducers,applyMiddleware(thunk));


render( 
<Provider store={store}>
                <Router history={browserHistory}>
                  <Route path="/" component={Home}></Route> 
                {/* <IndexRoute  component={Home}/> */}
                 
                <Route path="/dashboard" component={Dashboard}></Route>
                {/* <IndexRoute  component={Config}/> */}
                 <Route path="/config" component={Config}></Route> 
                <Route path="/config/ridertypes" component={RiderTypes}></Route>
                <Route path="/config/ridertypes/newridertype" component={NewRiderType}></Route> 
                <Route path="/config/ticketfaretypes" component={TicketFareTypes}></Route>
                <Route path="/config/ticketfaretypes/newticketfaretype" component={NewTicketFaretype}></Route>
                <Route path="/config/vehicletier" component={VehicleTiers}></Route>
                <Route path="/config/vehicletier/newvehicletier" component={NewVehicleTier}></Route>
                 <Route path="/config/stations" component={Stations}></Route> 
                 <Route path="/config/stations/newstation" component={PostNewStation}></Route>
                 <Route path="/config/routes" component={Routes}></Route>
                 <Route path="/config/routes/newroute" component={NewRoute}></Route>
               
                </Router>
</Provider>, document.getElementById('todo-wrapper')
);
