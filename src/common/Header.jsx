import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import Home from '../components/Home';

function Header() {
    return (
        <Router>
            <div>
                <div id="preloader-active">
                    <div className="preloader d-flex align-items-center justify-content-center">
                        <div className="preloader-inner position-relative">
                            <div className="preloader-circle"></div>
                            <div className="preloader-img pere-text">
                                <img src="assets/img/logo/loder.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <header>
                    <div className="header-area">
                        <div className="main-header  header-sticky">
                            <div className="container-fluid">
                                <div className="row align-items-center">
                                    <div className="col-xl-2 col-lg-2 col-md-1">
                                        <div className="logo">
                                            <a href="index.html">
                                                <img src="assets/img/logo/logo.png" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xl-10 col-lg-10 col-md-10">
                                        <div className="menu-main d-flex align-items-center justify-content-end">
                                            <div className="main-menu f-right d-none d-lg-block">
                                                <nav>
                                                    <ul id="navigation">
                                                        <li>
                                                            <a href="index.html">Home</a>
                                                        </li>
                                                        <li>
                                                            <a href="about.html">About</a>
                                                        </li>
                                                        <li>
                                                            <a href="services.html">Services</a>
                                                        </li>
                                                        <li>
                                                            <a href="portfolio.html">Portfolio</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Page</a>
                                                            <ul className="submenu">
                                                                <li>
                                                                    <a href="blog.html">Blog</a>
                                                                </li>
                                                                <li>
                                                                    <a href="blog_details.html">Blog Details</a>
                                                                </li>
                                                                <li>
                                                                    <a href="elements.html">Element</a>
                                                                </li>
                                                                <li>
                                                                    <a href="portfolio_details.html">
                                                                        Portfolio Details
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="contact.html">Contact</a>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                            <div className="header-right-btn f-right d-none d-xl-block ml-20">
                                                <a href="#" className="btn header-btn">
                                                    Get Free Consultent
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="mobile_menu d-block d-lg-none"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <Routes>
                    <Route path="/" element={<Home />}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default Header;
