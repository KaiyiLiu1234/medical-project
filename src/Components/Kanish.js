import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './kanish.css'
import kanish from './img/KanishImage.jpg';
import newBackground from './img/town.jpg';

function Kanish() {
    var sectionStyle = {
        backgroundImage: `url(${newBackground})`,
      };
            
    return (
        <div id="wrapper">
            <div className="container-card" style={sectionStyle}> {/*container5, overlay6 centered2 teamImage2*/}
                <div className="overlay"></div>
                <div className="centered">
                    <h1>Kanish Baskaran</h1>
                    <h3><strong>Co-Founder</strong></h3>
                </div>
            </div>

            <div className="container-fluid" style={{ marginBottom: '4%' }}>
                <div className="row align-items-center">
                <div className="col-lg-6">
                    <img src={kanish} className="teamImage" alt=""></img>
                </div>
                <div className="col-lg-6">
                    <p>
                    Kanish is a Health Sciences student at McMaster University. His non-academic pursuits include working as a swim instructor, teaching martial arts and playing musical instruments. At school, he was a member of the HOSA and Debate clubs for 3 years. He is passionate about giving back to his community including volunteering at Markhaven home for the elderly and working to produce PPE equipment with the 3D PPE for GTA team. In his free time, he enjoys playing board games with friends and watching movies. 
                    </p>
                </div>
                </div>
            </div>
        </div>

    );
}

export default Kanish;
