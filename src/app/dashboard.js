var React = require('react');
var createClass = require('create-react-class');

import {connect} from 'react-redux';

import LoginNavigation from './loinNavigation.js';


var token=sessionStorage.getItem('token');
console.log(token)
class Dashboard extends React.Component{
render(){
return(
<LoginNavigation />
)
}
} 

export default Dashboard;