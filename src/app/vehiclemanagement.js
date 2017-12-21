var React = require('react');
var createClass = require('create-react-class');
import LoginNavigation from './loinNavigation.js';
import VMsidebar from './layouts/VMsidebar.js';
var vehiclemanagement = createClass({
    render: function(){
        return(
              <div className="row">
        <LoginNavigation />
          <div className="col-lg-2">
            <VMsidebar />
          </div>
          </div>
        );
    }
});

export default vehiclemanagement