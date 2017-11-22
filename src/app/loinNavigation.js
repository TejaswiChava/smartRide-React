var React = require('react');
var Bootstrap = require('react-bootstrap');
import {Link} from 'react-router';

require('./css/navbar.css');
var BackgroundImage = require('./img/bg-pattern.png');
var headerBackground={
    backgroundImage: "url(" +BackgroundImage +")",
 }
class LoginNavigation extends React.Component{
    render(){
        return(
    <nav className="navbar navbar-fixed-top" id="mainNav">
        <div style={headerBackground}>
            <div className="container" >
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                <div className="mainnav">
                    <a className="navbar-brand" href="/" ng-click="vm.emptyselectedlis()">SMART RIDE SOLUTIONS</a>
                </div>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li>
                      <Link to="/config" >Config</Link>
                    </li>
                    <li>
                        <a href="#login" >Vehicle Management</a>
                    </li>
                    <li>
                        <a href="#login" >Logout</a>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    </nav>
        
        )
    }
}
export default LoginNavigation;