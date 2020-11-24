import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import youthCouncilLogo from "./img/youthcouncil.jpg";
import "./home.css";
import imageOne from "./img/imageOne.jpg";
import { Link } from "react-router-dom";
import * as $ from "jquery";
import backgroundImage from "./img/background.jpg";
import tertiaryLogo from "./img/tertiary.jpg";
import newBackground from "./img/newBackground.jpg";
import classNames from "classnames";

function Home() {
  var sectionStyle = {
    backgroundImage: `url(${newBackground})`,
  };
  var a = 0;
  $(window).scroll(function () {
    if ($("#counter").length > 0) {
      var oTop = $("#counter").offset().top - window.innerHeight;
      if (a === 0 && $(window).scrollTop() > oTop) {
        $(".counter-value").each(function () {
          var $this = $(this),
            countTo = $this.attr("data-count");
          $({
            countNum: $this.text(),
          }).animate(
            {
              countNum: countTo,
            },
            {
              duration: 2000,
              easing: "swing",
              step: function () {
                $this.text(Math.floor(this.countNum));
              },
              complete: function () {
                $this.text(this.countNum);
              },
            }
          );
        });
        a = 1;
      }
    }
  });

  return (
    <div id="wrapper">
      <div className="container-header" style={sectionStyle}>
        <div className="overlay-header"></div>
        <div className="centered-header">
          <h1>Health is a right, not a privilege.</h1>
        </div>
      </div>

      <section className="pageSection">
        <div className="aboutSection">
          <h1>Our Mission</h1>
          <p>
            Health for Homeless strives to achieve health equity in Canada’s
            homeless community through advocating for issues surrounding health
            and wellness as well as implementing meaningful solutions that
            remove barriers to accessible healthcare.
          </p>
          <p id="temp-wrapper">
            <Link to="/about">
              <button
                id="readMoreButton"
                type="button"
                className="btn btn-outline-dark btn-sm additional-style-2"
              >
                READ MORE
              </button>
            </Link>
          </p>
        </div>
      </section>

      <section className="secondPageSection">
        <div className="initiativeSection">
          <h1>Our Initiatives</h1>
          <p>
            Health for Homeless is dedicated to organizing initiatives that
            simultaneously support the homeless community and involve local
            youth. Especially during the COVID-19 pandemic, the homeless
            community has faced many adversities pertaining to the accessibility
            to essential supplies.
          </p>
          <p id="temp-wrapper2">
            <Link to="/initiatives">
              <button
                id="readMoreButton2"
                type="button"
                className="btn btn-outline-dark btn-sm additional-style-2"
              >
                READ MORE
              </button>
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
