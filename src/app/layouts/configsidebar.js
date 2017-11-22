var React = require('react');
var createClass = require('create-react-class');
import {Link} from 'react-router';


var ConfigSidebar= createClass({
    render:function(){
        return(
            <div>
                <ul className="nav nav-sidebar">
                    <li >< Link to="/config/ridertypes" >Rider Types </Link></li>
                </ul>
            </div>

        )
    }

});

module.exports=ConfigSidebar;