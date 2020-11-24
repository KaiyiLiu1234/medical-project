import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./person.css";
//import './kaiyi.css'
import kaiyi from "./img/KaiyiImage.png";
import newBackground from "./img/town.jpg";

function Kaiyi() {
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
          <h1>Kaiyi Liu</h1>
          <h3>
            <strong>Web Developer/Programmer</strong>
          </h3>
        </div>
      </div>

      <div className="container-fluid" style={{ marginBottom: "4%" }}>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img src={kaiyi} className="teamImage" alt=""></img>
          </div>
          <div className="col-lg-6">
            <p>
              Kaiyi is a fast learner and a hard worker. As a former Software
              Intern at JieCai Corporation and a former Software Engineer at
              NOVX Systems Inc., Kaiyi has solid experience in Web Development
              and a strong passion for Software Development. Kaiyi always seeks
              to further improve his craft and to further explore the many
              nuances in Computer Science. During his leisure time, Kaiyi enjoys
              working on side projects that interest him. For instance, apart
              from this website, Kaiyi is also working on a Covid-19 Relief Web
              Application to help store owners keep track of the number of
              customers are in their business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kaiyi;
