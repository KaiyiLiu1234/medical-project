import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./person.css";
//import './tanmay.css'
import tanmay from "./img/TanmayImage.jpg";
import newBackground from "./img/town.jpg";

function Tanmay() {
  var sectionStyle = {
    backgroundImage: `url(${newBackground})`,
  };

  return (
    <div id="wrapper">
      <div className="container-card" style={sectionStyle}>
        {" "}
        {/*container5, overlay6 centered2 teamImage2*/}
        <div className="overlay"></div>
        <div className="centered">
          <h1>Tanmay Shah</h1>
          <h3>
            <strong>Web/Graphics Designer</strong>
          </h3>
        </div>
      </div>

      <div className="container-fluid" style={{ marginBottom: "4%" }}>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img src={tanmay} className="teamImage" alt=""></img>
          </div>
          <div className="col-lg-6">
            <p>
              Tanmay is an avid web designer and programmer who studies at the
              University of Toronto, St. George Campus. During his free time,
              Tanmay enjoys studying new Computer Science concepts and helping
              organizations develop their websites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tanmay;
