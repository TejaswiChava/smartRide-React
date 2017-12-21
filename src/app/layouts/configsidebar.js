var React = require('react');
var createClass = require('create-react-class');
import {Link} from 'react-router';
//css
require('../css/home.css');

//icons
var Child = require('react-icons/lib/fa/child');
var Circle=require('react-icons/lib/fa/circle-o')
var Bus=require('react-icons/lib/fa/bus');
var Stations=require('react-icons/lib/fa/map-marker');
var Route=require('react-icons/lib/md/compare-arrows');
var Inspector = require('react-icons/lib/fa/male');
var Ticket= require('react-icons/lib/fa/ticket');
var Money=require('react-icons/lib/fa/money');

var ConfigSidebar= createClass({
    render:function(){
        return(
            <div>
                <ul className="nav nav-sidebar configsidebar">

                    <li> < Link activeClassName='is-active' to="/config/ridertypes" ><div className="sidebaricon"><Child size={30}/></div>Rider Types     </Link></li>
                    <li><Link activeClassName='is-active' to="/config/vehicletier"><div className="sidebaricon"><Bus size={20} /></div>Vehicle Tiers  </Link></li>
                    <li><Link activeClassName='is-active' to="/config/stations"> <div className="sidebaricon"><Stations size={30}/></div> <div className="sidebartext">Stations</div></Link></li>
                    <li><Link  activeClassName='is-active' to="/config/routes"><div className="sidebaricon"><Route size={30} /></div> <div className="sidebartext">Routes</div></Link></li>
                    <li><Link activeClassName='is-active' to="/config/vehicles"><div className="sidebaricon"><Bus size={20} /></div> <div className="sidebartext">Vehicles</div></Link></li>
                    <li><Link  activeClassName='is-active' to="/config/inspectors"><div className="sidebaricon"><Inspector size={30} /></div> <div className="sidebartext">Inspectors</div></Link></li>
                    <li><Link activeClassName='is-active' to="/config/passtypes"><div className="sidebaricon"> <img className="oneEnabled center-block" src={require('../img/pass.png')} className="iconsinsidebar" alt=""></img></div><div className="sidebartext">Pass Types</div></Link></li>
                    <li>< Link activeClassName='is-active' to="/config/ticketfaretypes"> <div className="sidebaricon"><Ticket size={30} /></div>Ticket Fare Types</Link></li>
                    <li><Link activeClassName='is-active' to="/config/passfaretypes"><div className="sidebaricon"><Money size={30} /></div>Pass Fare Types</Link></li>
                    

                </ul>
            </div>

        )
    }

});

module.exports=ConfigSidebar;