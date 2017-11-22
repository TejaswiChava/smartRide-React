var React = require('react');
require('./css/footer.css');




class Footer extends React.Component{
    render(){
        return(
            <div>
                <footer>
                    <div className="container">
                        <p>&copy; 2017 OMNIWYSE All Rights Reserved.</p>
      
                    </div>
                </footer>
            </div>

        )
    }
}
module.exports=Footer;