import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import youthCouncilLogo from "./img/youthcouncil.jpg";
import "./person.css";
//import './nick.css'
import nick from "./img/NickImage.jpeg";
import { Link } from "react-router-dom";
import * as $ from "jquery";
import backgroundImage from "./img/background.jpg";
import tertiaryLogo from "./img/tertiary.jpg";
import newBackground from "./img/town.jpg";

function Nick() {
  var sectionStyle = {
    backgroundImage: `url(${newBackground})`,
  };

  return (
    <div id="wrapper">
      <div className="container-card" style={sectionStyle}>
        <div className="overlay"></div>
        <div className="centered">
          <h1>Nicholas Hamzea</h1>
          <h3>
            <strong>Co-Founder</strong>
          </h3>
        </div>
      </div>

      <div className="container-fluid" style={{ marginBottom: "4%" }}>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img src={nick} className="teamImage" alt=""></img>
          </div>
          <div className="col-lg-6">
            <p>
              Nicholas is currently enrolled in Western University in the
              Medical Sciences program. Within his school, he was a HOSA member
              and served on student council for 2 years as the External Affairs
              Officer and Vice President. Outside of school, he volunteers with
              the Holland Bloorview Kids’ Rehabilitation Hospital in the
              Therapeutic Recreation unit, is a Medical First Responder at St.
              John Ambulance, and is the 2019-2020 YRDSB Student Trustee. In his
              free time, he enjoys watching movies and participating in
              community events.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nick;
