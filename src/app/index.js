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
import NewRiderType from './newRiderType'


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
               
                </Router>
</Provider>, document.getElementById('todo-wrapper')
);
