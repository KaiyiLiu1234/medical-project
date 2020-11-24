/* eslint-disable react/jsx-no-duplicate-props */
import React, { useEffect, Component } from "react";
import { NavDropdown, Navbar, Dropdown } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import "./header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";
import otherLogo from "./img/redYouthCouncil.png";
import * as $ from "jquery";

export default class Nav extends React.Component {
  selectedLogo = logo;
  constructor(props) {
    super(props);
    this.listener = null;
  }

  state = {
    showHighLightInitiative: false,
    showHighLightAbout: false,
    showHighLightHome: false,
    topOfPage: "top",
  };

  handleShowHighLightInitiativeToggle = () => {
    this.setState({
      showHighLightInitiative: !this.state.showHighLightInitiative,
    });
  };

  handleShowHighLightAboutToggle = () => {
    this.setState({ showHighLightAbout: !this.state.showHighLightAbout });
  };

  handleShowHighLightHomeToggle = () => {
    this.setState({ showHighLightHome: !this.state.showHighLightHome });
  };

  componentDidMount() {
    this.listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled > 15) {
        if (this.state.status !== "bottom") {
          this.setState({ topOfPage: "bottom" });
          $("#Nav").addClass("bottom");
        }
      } else {
        if (this.state.status !== "top") {
          this.setState({ topOfPage: "top" });
          $("#Nav").removeClass("bottom");
        }
      }
    });
  }

  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }

  render() {
    return (
      <div
        id="Nav"
        style={{
          backgroundColor:
            this.state.topOfPage === "top" ? "transparent" : "white",
          transition: "all 1.0s",
          position: "fixed",
        }}
        className="NavBar"
      >
        <a href="/" className="NavBar-Logo">
          <img id="logo" src={this.selectedLogo} alt="HfH Logo" />
        </a>

        <nav id="secondaryBar">
          <div id="container-element">
            <div className="btn-group">
              <button
                id="sandwichButton"
                className="btn dropdown-toggle"
                data-toggle="dropdown"
              >
                <img
                  id="menubar"
                  src="https://img.icons8.com/material-rounded/36/000000/menu.png"
                  alt=""
                />
              </button>
              <div className="dropdown-menu">
                <Link to="/">
                  <li
                    onMouseEnter={this.handleShowHighLightHomeToggle}
                    class="dropdown-item"
                    onMouseLeave={this.handleShowHighLightHomeToggle}
                    className={`item${
                      this.state.showHighLightHome
                        ? " entrance designStyle"
                        : " exit designStyle"
                    }`}
                    style={{
                      transition: "all 0.8s",
                    }}
                  >
                    HOME
                  </li>
                </Link>

                <Link to="/about">
                  <li
                    onMouseEnter={this.handleShowHighLightAboutToggle}
                    class="dropdown-item"
                    onMouseLeave={this.handleShowHighLightAboutToggle}
                    className={`item${
                      this.state.showHighLightAbout
                        ? " entrance designStyle"
                        : " exit designStyle"
                    }`}
                    style={{
                      transition: "all 0.8s",
                    }}
                  >
                    ABOUT US
                  </li>
                </Link>

                <Link to="/initiatives">
                  <li
                    onMouseEnter={this.handleShowHighLightInitiativeToggle}
                    class="dropdown-item"
                    onMouseLeave={this.handleShowHighLightInitiativeToggle}
                    className={`item${
                      this.state.showHighLightInitiative
                        ? " entrance designStyle"
                        : " exit designStyle"
                    }`}
                    style={{
                      transition: "all 0.8s",
                    }}
                  >
                    INITIATIVES
                  </li>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <nav
          id="privaryNav"
          className="navbar navbar-light navbar-expand-lg bg-aqua sticky-top"
        >
          <ul className="navbar-links primaryBar">
            <Link to="/initiatives">
              <li
                onMouseEnter={this.handleShowHighLightInitiativeToggle}
                onMouseLeave={this.handleShowHighLightInitiativeToggle}
                className={`${
                  this.state.topOfPage === "top"
                    ? `item${
                        this.state.showHighLightInitiative
                          ? " enter "
                          : " leave "
                      }`
                    : `element${
                        this.state.showHighLightInitiative
                          ? " noChange"
                          : " changeFontColor"
                      }`
                }`}
                style={{
                  transition: "all 0.8s",
                }}
              >
                INITIATIVES
              </li>
            </Link>

            <Link to="/about">
              <li
                onMouseEnter={this.handleShowHighLightAboutToggle}
                onMouseLeave={this.handleShowHighLightAboutToggle}
                className={`${
                  this.state.topOfPage === "top"
                    ? `item${
                        this.state.showHighLightAbout ? " enter " : " leave "
                      }`
                    : `element${
                        this.state.showHighLightAbout
                          ? " noChange"
                          : " changeFontColor"
                      }`
                }`}
                style={{
                  transition: "all 0.8s",
                }}
              >
                ABOUT US
              </li>
            </Link>

            <Link to="/">
              <li
                onMouseEnter={this.handleShowHighLightHomeToggle}
                onMouseLeave={this.handleShowHighLightHomeToggle}
                className={`${
                  this.state.topOfPage === "top"
                    ? `item${
                        this.state.showHighLightHome ? " enter " : " leave "
                      }`
                    : `element${
                        this.state.showHighLightHome
                          ? " noChange"
                          : " changeFontColor"
                      }`
                }`}
                style={{
                  transition: "all 0.8s",
                }}
              >
                HOME
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
}
