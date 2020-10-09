import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import youthCouncilLogo from './img/youthcouncil.jpg';
import './annie.css'
import annie from './img/AnnieImage.jpg';
import { Link } from 'react-router-dom';
import * as $ from 'jquery';
import backgroundImage from './img/background.jpg';
import tertiaryLogo from './img/tertiary.jpg';
import newBackground from './img/town.jpg';

function Annie() {
    var sectionStyle = {
        backgroundImage: `url(${newBackground})`,
      };
            
    return (
        <div id="wrapper">
            <div className="container-card" style={sectionStyle}> {/*container4 overlay3 centered teamImage*/}
                <div className="overlay"></div>
                <div className="centered">
                    <h1>Annie Li</h1>
                    <h3><strong>Co-Founder</strong></h3>
                </div>
            </div>

            <div className="container-fluid" style={{ marginBottom: '4%' }}>
                <div className="row align-items-center">
                <div className="col-lg-6">
                    <img src={annie} className="teamImage" alt=""></img>
                </div>
                <div className="col-lg-6">
                    <p>
                    Annie is a first-year student at McMaster University in the Health Sciences program. In high school, she was an active member of her school’s DECA Chapter, captain of the school’s swim team and served as the Head Prefect of her school’s Prefect Organization. In her local community, Annie volunteers at the Care Village at Southlake Hospital and the Peter Gilgan Centre for Research and Learning at SickKids Hospital. In her free time, she loves to go on hikes, paint and write songs on her ukelele.
                    </p>
                </div>
                </div>
            </div>
        </div>

    );
}

export default Annie;
