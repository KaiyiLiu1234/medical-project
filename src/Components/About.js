import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./img/wilder.jpg"
import { Link } from 'react-router-dom';
import './about.css'
import backgroundImage from './img/town.jpg';
import annieImage from './img/AnnieImage.jpg';
import kanishImage from './img/KanishImage.jpg';
import nicholasImage from './img/NickImage.jpeg';
import kaiyiImage from './img/KaiyiImage.png';
import tanmayImage from './img/TanmayImage.jpg';

function About() {
    var sectionStyle = {
        backgroundImage: `url(${backgroundImage})`,
    };
    return (
        <div id="wrapper">
            <div class="container3" style={sectionStyle}>
                <div class="overlay2"></div>
                <div class="centered3"><h2>Our Team and About Us</h2></div>
                <div class="rectangle2"></div>
            </div>
            <section class="thirdSection">
                <div class="about">
                    <h1>Our Mission Statement and Manifesto</h1>
                    <p>
                        As the COVID-19 pandemic spread across the globe and injected itself into all aspects of Canadian life, we, like many others our age, experienced a feeling of hopelessness and an inability to contribute. What could three 18-year old students do to help in the fight against a disease that had taken the lives of thousands to date? It seemed as though many organizations with plenty of resources and personnel were already tackling all facets of the issue. However, as the spread of the virus worsened, we often heard and read of the impact the virus was having on the homeless community, one of the most vulnerable demographics for this disease. Upon further inspection, we learnt of the pre-existing issues that the homeless population faces, such as a lack of resources for shelters and a worsening mental health crisis, which have only been exacerbated by the pandemic. Upon realizing this lack of public support, we decided to form Health For Homeless in order to address the issues surrounding health and wellness in the homeless community.
                    </p>
                </div>
            </section>
            
            <section className="fourthSection">
                <div className="team">

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1 className="title">Our Team</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="backgroundCard">
                                    <div className="card-items">
                                    <img src={kanishImage} alt="" className="ImageStyle" />
                                    <div className="titles">
                                        <h3><strong>Kanish Baskaran</strong></h3>
                                        <h6>Co-Founder</h6>
                                    </div>
                                    <div className="social-links">
                                        <a href="https://www.facebook.com/kanish.baskar.7" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook social-icon-facebook"></i></a>
                                        <a href="https://www.instagram.com/kanishbaskaran/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram social-icon-design"></i></a>
                                        <a href="https://www.linkedin.com/in/kanishbaskaran/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin social-icon-design"></i></a>
                                        <p></p>
                                    </div>
                                    <Link to="/kanish"><button className="readMoreStyle">Read More</button></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="backgroundCard">
                                <div className="card-items">
                                    <img src={annieImage} alt="" className="ImageStyle" />
                                    <div className="titles">
                                        <h3><strong>Annie Li</strong></h3>
                                        <h6>Co-Founder</h6>
                                    </div>
                                    <div className="social-links">
                                        <a href="https://www.facebook.com/annie.li.961556" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook social-icon-facebook"></i></a>
                                        <a href="https://www.instagram.com/_annieli_/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram social-icon-design"></i></a>
                                        <a href="https://www.linkedin.com/in/li-annie" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin social-icon-design"></i></a>
                                        <p></p>
                                    </div>
                                    <Link to="/annie"><button className="readMoreStyle">Read More</button></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="backgroundCard">
                                <div className="card-items">
                                    <img src={nicholasImage} alt="" className="ImageStyle" />
                                    <div className="titles">
                                        <h3><strong>Nicholas Hamzea</strong></h3>
                                        <h6>Co-Founder</h6>
                                    </div>
                                    <div className="social-links">
                                        <a href="https://www.facebook.com/nicholas.hamzea" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook social-icon-facebook"></i></a>
                                        <a href="https://www.instagram.com/nicholashamzea/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram social-icon-design"></i></a>
                                        <a href="https://www.linkedin.com/in/nicholashamzea/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin social-icon-design"></i></a>
                                        <p></p>
                                    </div>
                                    <Link to="/nicholas"><button className="readMoreStyle">Read More</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">

                            <div className="col-lg-4">
                                <div className="backgroundCard">
                                <div className="card-items">
                                    <img src={kaiyiImage} alt="" className="ImageStyle" />
                                    <div className="titles">
                                        <h3><strong>Kaiyi Liu</strong></h3>
                                        <h6>Web Developer/Programmer</h6>
                                    </div>
                                    <div className="social-links">
                                        <a href="https://www.facebook.com/kaiyi.liu.399" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook social-icon-facebook"></i></a>
                                        <a href="https://www.instagram.com/kaiyeet.34/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram social-icon-design"></i></a>
                                        <a href="https://www.linkedin.com/in/kaiyi-liu/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin social-icon-design"></i></a>
                                        <p></p>
                                    </div>
                                    <Link to="/kaiyi" ><button className="readMoreStyle">Read More</button></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="backgroundCard">
                                <div className="card-items">
                                    <img src={tanmayImage} alt="" className="ImageStyle" />
                                    <div className="titles">
                                        <h3><strong>Tanmay Shah</strong></h3>
                                        <h6>Web/Graphics Designer</h6>
                                    </div>
                                    <div className="social-links">
                                        <a href="https://www.facebook.com/tanmay.shah.16" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook social-icon-facebook"></i></a>
                                        <a href="https://www.instagram.com/tanmay_shah123/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram social-icon-design"></i></a>
                                        <a href="https://www.linkedin.com/in/tanmay-shah-00613a1b6/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin social-icon-design"></i></a>
                                        <p></p>
                                    </div>
                                    <Link to="/tanmay"><button className="readMoreStyle">Read More</button></Link>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
