var React = require('react');
var createClass = require('create-react-class');
import {Link} from 'react-router';
//css
require('../css/home.css');

var VMsiderbar= createClass({
    render:function(){
        return(
            <div>
                <ul className="nav nav-sidebar configsidebar">
                    <li >< Link activeClassName='is-active' to="/vehiclemanagement/vehiclegroup" >Vehicle Group </Link></li>
                    <li><Link activeClassName='is-active' to="/vehiclemanagement/ticketfaregroup">Ticket Fare Group </Link></li>
                    {/* <li><Link activeClassName='is-active' to="/config/stations">Pass Fare Group</Link></li> */}
                    {/* <li><Link  activeClassName='is-active' to="/config/routes">Services</Link></li> */}
                  
                    

                </ul>
            </div>

        )
    }

});
export default VMsiderbar;