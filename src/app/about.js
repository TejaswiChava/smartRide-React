
var React = require('react');
var createClass = require('create-react-class')
var About = createClass({
    render: function(){
      console.log(this.props);
        return(
          <div>
            <h2>All about me</h2>
            <h4>date:
            </h4>
          </div>
        );
    }
});

module.exports = About;
