import React, { useEffect, Component } from 'react';
import { NavDropdown, Navbar, Dropdown } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import './footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import logo from './img/logo.png';
import otherLogo from './img/redYouthCouncil.png';
import * as $ from 'jquery';


export default class Footer extends React.Component {

    render(){
        return (
            <footer class="footer-HfH">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <h6>ABOUT</h6>
                    <p id="paragraphStyle" className="text-justify"><strong>Health For Homeless</strong> is an intitative started by three motivated University students with the goal of raising the quality of health for all people, regardless of economic status.</p>
                  </div>
        
                  <div className="col-xs-6 col-md-3">
                    <h6>EXPLORE OUR WEBSITE</h6>
                    <ul className="footer-links">
                      <li><Link to="/"><span className="linkLabel">HOME PAGE</span></Link></li>
                      <li><Link to="/about"><span className="linkLabel">ABOUT US</span></Link></li>
                      <li><Link to="/initiatives"><span className="linkLabel">INITIATIVES</span></Link></li>
                    </ul>
                  </div>
        
                  <div className="col-xs-6 col-md-3">
                    <h6>REACH OUT TO US</h6>
                    <ul className="footer-links">
                    <li><a href="mailto:connect.hfh@gmail.com"><span className="linkLabel">connect.hfh@gmail.com</span></a></li>
                    {/* <li><span className="linkLabel">905-224-3421</span></li> */}
                    </ul>
                  </div>
                </div>
                <hr />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-sm-6 col-xs-12">
                    <p className="copyright-text">Copyright &copy;{new Date().getFullYear()} Health For Homeless | All rights reserved by Health For Homeless Team
                    </p>
                  </div>
        
                  <div className="col-md-4 col-sm-6 col-xs-12">
                    <ul className="social-icon-elements">
                    <li><a className="instagram" href="https://instagram.com/health.for.homeless?igshid=zz5qeky769h0"><i className="fa fa-instagram"></i></a></li>

                      {/* <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li> */}
                      {/* <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li> */}
                      {/* <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>    */}
                    </ul>
                  </div> 
                </div>
              </div>
        </footer>

        //    <div></div>        
        );
    }
}