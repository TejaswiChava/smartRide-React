var React = require('react');
var createClass = require('create-react-class');
import {Link} from 'react-router';


var ConfigSidebar= createClass({
    render:function(){
        return(
            <div>
                <ul className="nav nav-sidebar">
                    <li >< Link to="/config/ridertypes" >Rider Types </Link></li>
                    <li>< Link to="/config/ticketfaretypes">Ticket Fare Types</Link></li>
                    <li><Link to="/config/vehicletier">Vehicle Tiers </Link></li>
                    <li><Link to="/config/stations">Stations</Link></li>
                    <li><Link to="/config/routes">Routes</Link></li>
                    <li><Link to="/config/vehicles">Vehicles</Link></li>

                </ul>
            </div>

        )
    }

});

module.exports=ConfigSidebar;