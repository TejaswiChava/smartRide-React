var React = require('react');
var Bootstrap = require('react-bootstrap');
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
//components
var Navigation = require('./navigation.js');
var LoginForm= require('./login.js');
var Footer = require('./footer.js');
//Actions
// import {userSignupRequest} from './actions/loginAction';

//css
require('./css/home.css');
//icons
var Mobile = require('react-icons/lib/fa/mobile');
var Payment = require('react-icons/lib/fa/credit-card');
var Secure = require('react-icons/lib/fa/lock');
var Live =require('react-icons/lib/fa/map-marker');
var Revenue= require('react-icons/lib/fa/pie-chart');
var Ticket= require('react-icons/lib/fa/ticket');
var Manage= require('react-icons/lib/fa/bus');
var Tracking = require('react-icons/lib/fa/file');
var Inspector = require('react-icons/lib/fa/male');
var Printer= require('react-icons/lib/fa/print');
var Barcode= require('react-icons/lib/fa/barcode');
var Encryption = require('react-icons/lib/fa/key');
//images
var BackgroundImage = require('./img/bg-pattern.png');
var headerBackground={
  
  background: "url(" +BackgroundImage +")",
  height:"100%"
}
class Home extends React.Component{
    render(){
       
        return(
         <div>
   <Navigation />
   <header className="masthead">
      <div style={headerBackground}>
         <div className="container h-100">
            <div className="row h-100">
               <div className="col-lg-7 my-auto">
                  <div className="header-content">
                     <h1 className="mb-5 homepageheading">Ticketing Platform for Smart Cities.</h1>
                     <h3 className="homepagefeatures"><a className="nav-link js-scroll-trigger" href="#smartrider">SmartRider</a> <a className="nav-link js-scroll-trigger" href="#smarthub">SmartHub</a> <a className="nav-link js-scroll-trigger" href="#smartinspector">SmartInspector</a></h3>
                  </div>
               </div>
               <div className="col-lg-5 my-auto">
                  <div className="device-container">
                     <div className="device-mockup nexus_6 portrait white">
                        <div className="device">
                           <div className="screen">
                              <img src={require('./img/homepageimage.png')} alt={'homepage'}/>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </header>
   <section className="features" id="smartrider">
      <div className="container">
         <h3 >Smart Rider</h3>
         <div className="row">
            <div className="col-lg-4 my-auto">
               <div className="device-container">
                  <div className="device-mockup iphone6_plus portrait white">
                     <div className="device">
                        <div className="screen">
                           <img src={require('./img/smartrider-app.png')} className="grabbaimage" alt=""></img>
                        </div>
                        <div className="button">
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-lg-8 my-auto">
               <div className="container-fluid">
                  <div className="row">
                     <div className="col-lg-6">
                        <div className="feature-item">
                           {/* <i className="fa fa-mobile text-primary" aria-hidden="true" ></i>  */}
                           <div className="feature-icon">
                              <Mobile size={80} color={'#b9355a'}/>
                           </div>
                           <h3>Customer App </h3>
                           <p className="text-muted">Customer App for Ticketing,Buy Fixed Rides, Day Passes, Monthly Passes etc.</p>
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="feature-item">
                           {/* <i className="fa fa-credit-card fa-3x text-primary" aria-hidden="true"></i> */}
                           <Payment size={80} color={'#b9355a'}/>
                           <h3>Payment</h3>
                           <p className="text-muted">We have Mulitiple Payment Options,Buy tickets by Cash and Credit</p>
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-lg-6">
                        <div className="feature-item">
                           {/* <i className="fa fa-lock fa-3x text-primary" aria-hidden="true"></i> */}
                           <Secure size={80} color={'#b9355a'}/>
                           <h3>Secure</h3>
                           <p className="text-muted">Secure Ticket Validation with Inspector App </p>
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="feature-item">
                           {/* <i className="fa fa-map-marker fa-3x text-primary" aria-hidden="true"></i> */}
                           <Live size={80} color={'#b9355a'}/>
                           <h3>Live</h3>
                           <p className="text-muted">Maps integration to show Routes and Bus positions - given source and destination position </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section className="features" id="smarthub">
      <div className="container">
         <h3 >Smart Hub</h3>
         <div className="row">
            <div className="col-lg-4 my-auto">
               <div className="device-container">
                  <div className="device-mockup iphone6_plus portrait white">
                     <div className="device">
                        <div className="screen">
                           <img src={require('./img/ridehappi-hub.png')} className="grabbaimage" alt=""></img>
                        </div>
                        <div className="button">
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-lg-8 my-auto">
               <div className="container-fluid">
                  <div className="row">
                     <div className="col-lg-6">
                        <div className="feature-item">
                           {/* <i className="fa fa-pie-chart fa-3x text-primary" aria-hidden="true"></i> */}
                           <Revenue size={80} color={'#b9355a'}/>
                           <h3>Revenue Monitor </h3>
                           <p className="text-muted">Manage Ticket pricing and campaigns, Daily Ticket reports by Route, Bus Scalable System from tens to thousands of Buses</p>
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="feature-item">
                           {/* <i className="fa fa-ticket fa-3x text-primary" aria-hidden="true"></i> */}
                           <Ticket size={80} color={'#b9355a'}/>
                           <h3>Ticketing</h3>
                           <p className="text-muted">Bulk Ticket generation and rollouts, Tickets by Half, Full, PH types.
                              Tickets By Cash, Credit and other Payment options!
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-lg-6">
                        <div className="feature-item">
                           {/* <i className="fa fa-bus fa-3x text-primary" aria-hidden="true"></i> */}
                           <Manage size={80} color={'#b9355a'}/>
                           <h3>Manage</h3>
                           <p className="text-muted">Manage Stops and Routes,
                              Manage BirthDay Rides and/or Special rides,Fleet Management,
                              Real time Bus tracking,
                              Staff Tracking 
                           </p>
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="feature-item">
                           {/* <i className="fa fa-files-o fa-3x text-primary" aria-hidden="true"></i> */}
                           <Tracking size={80} color={'#b9355a'}/>
                           <h3>Tracking</h3>
                           <p className="text-muted">Fleet Management,
                              Real time Bus tracking,
                              Staff Tracking  
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section className="features" id="smartinspector">
      <div className="container">
         <h3>Smart Inspector</h3>
         <div className="row">
            <div className="col-lg-4 my-auto">
               <div className="device-container">
                  <div className="device-mockup iphone6_plus portrait white">
                     <div className="device">
                        <div className="screen">
                           <img src={require('./img/smart-inspector.jpg')} className="grabbaimage" alt="" ></img>
                        </div>
                        <div className="button">
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-lg-8 my-auto">
               <div className="container-fluid">
                  <div className="row">
                     <div className="col-lg-6">
                        <div className="feature-item">
                           {/* <i className="fa fa-male text-primary" aria-hidden="true"></i> */}
                           <Inspector size={80} color={'#b9355a'}/>
                           <h3>Inspector </h3>
                           <p className="text-muted">Inspect Tickets for validation,
                              Visual Inspection,Issue Tickets, Passed instantly
                           </p>
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="feature-item">
                           {/* <i className="fa fa-print text-primary" aria-hidden="true"></i> */}
                           <Printer size={80} color={'#b9355a'}/>
                           <h3>Micro Printer</h3>
                           <p className="text-muted">Print Ticekts on the Micro blue tooth printer,
                              Sell ticket by Cash and Credit
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-lg-6">
                        <div className="feature-item">
                           {/* <i className="fa fa-barcode text-primary" aria-hidden="true"></i> */}
                           <Barcode size={80} color={'#b9355a'}/>
                           <h3>Barcode</h3>
                           <p className="text-muted">Instant Ticket transfer across the Buses/Depos etc..,
                              BarCode/QR Code scanner for validation 
                           </p>
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="feature-item">
                           {/* <i className="fa fa-key text-primary" aria-hidden="true"></i> */}
                           <Encryption size={80} color={'#b9355a'}/>
                           <h3>Encryption</h3>
                           <p className="text-muted">Encryption and Decryption of  Tickets using common keys</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section className="features" id="login">
      <LoginForm />
   </section>
   <Footer />
</div>
        )
    }

}

export default Home;