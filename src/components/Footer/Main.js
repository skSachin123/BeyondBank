import { Link } from "react-router-dom";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget footer-widget__about">
                <Link to="/">
                  {/* <img src="assets/images/logo-light.png" width="155" alt="" /> */}
                  <img
                    src="assets/images/royal-bank-w.png"
                    width="155"
                    alt=""
                  />
                </Link>
                <p style={{ fontSize: "13.5px" }}>
                  Beyond Bank's commitment to providing exceptional service,
                  innovative solutions, and responsible corporate practices has
                  helped it establish a strong reputation as a trusted financial
                  partner for customers around the world.
                </p>
                <div className="footer-widget__about-phone">
                  <i className="pylon-icon-tech-support"></i>
                  <div className="footer-widget__about-phone-content">
                    <span>Call Anytime</span>
                    <h3>
                      <Link to="tel:92-666-888-0000">92 666 888 0000</Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-widget footer-widget__link">
                <h3 className="footer-widget__title">Explore</h3>
                <ul className="list-unstyled footer-widget__link-list">
                  <li>
                    <Link to="#">About</Link>
                  </li>
                  <li>
                    <Link to="#">Our Services</Link>
                  </li>
                  <li>
                    <Link to="#">Latest News</Link>
                  </li>
                  <li>
                    <Link to="#">Testimonials</Link>
                  </li>
                  <li>
                    <Link to="#">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget footer-widget__post">
                <h3 className="footer-widget__title">Latest News</h3>
                <ul className="list-unstyled footer-widget__post-list">
                  <li>
                    <img
                      src="assets/images/resources/footer-post-1-1.png"
                      alt=""
                    />
                    <div className="footer-widget__post-list-content">
                      <span>16 Oct, 2020</span>
                      <h3>
                        <Link to="/newsdetails">
                          We’re Providing the Quality Services
                        </Link>
                      </h3>
                    </div>
                  </li>
                  <li>
                    <img
                      src="assets/images/resources/footer-post-1-2.png"
                      alt=""
                    />
                    <div className="footer-widget__post-list-content">
                      <span>16 Oct, 2020</span>
                      <h3>
                        <Link to="/newsdetails">
                          We’re Providing the Quality Services
                        </Link>
                      </h3>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="footer-widget footer-widget__contact">
                <h3>Contact</h3>
                <ul className="list-unstyled footer-widget__contact-list">
                  <li>
                    <Link to="#">
                      <i className="pylon-icon-email1"></i>avayahelp@gmail.com
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="pylon-icon-clock2"></i>Mon - Fir 9:00 AM -
                      5:00 PM
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="pylon-icon-pin1"></i>80 Broklyn Golden
                      Street, New York. USA
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="bottom-footer">
        <div className="container">
          <p>© Copyright 2020 by Company.com</p>

          <div className="bottom-footer__social">
            <Link to="#" className="fab fa-facebook-square"></Link>
            <Link to="#" className="fab fa-twitter"></Link>
            <Link to="#" className="fab fa-pinterest-p"></Link>
            <Link to="#" className="fab fa-instagram"></Link>
          </div>
        </div>
      </div>
      {/* <Link
        to="#"
        data-target="html"
        className="scroll-to-target scroll-to-top"
      >
        <i className="fa fa-angle-up"></i>
      </Link> */}
    </>
  );
};

export default Footer;
