import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './initiatives.css'
import backgroundImage from './img/initiativePageBackground.jpg';
import designImage from './img/initiativePage.jpg';

function Initiatives() {
    var sectionStyle = {
        backgroundImage: `url(${backgroundImage})`,
    };
    return (
        <div className="main-body">
            <div className="container-heading" style={sectionStyle}>
                <div className="overlay-initiative"></div>
                <div className="centered"><h2>Our Initiatives</h2></div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <h2 className="main_2">We Aspire to Provide the Support and Resources That the
        Homeless Critically Need</h2>
                        <h4 className="main_3">With meaningful partnerships with shelters, our series of
                        initiatives are directed towards closing the healthcare gap. Our first
                        objective is to create 80 care packages which will be delivered to the Red
        Door Family Shelter which incorporates the items as shown.</h4>
                    </div>
                    <div className="col-lg-6">
                        <img src={designImage} alt="" className="floating_img" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Initiatives;
