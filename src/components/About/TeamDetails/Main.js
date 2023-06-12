import PHBG1 from "../../../assets/images/backgrounds/page-header-bg-1-1.jpg";
import { Link } from "react-router-dom";
import React from "react";

const TeamDetails = () => {
  return (
    <>
      <div className="stricky-header stricked-menu main-menu">
        <div className="sticky-header__content"></div>
      </div>

      <section className="page-header">
        <div
          className="page-header__bg"
          style={{ backgroundImage: `url(${PHBG1})` }}
        ></div>
        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>/</li>
            <li>
              <span>Team Details</span>
            </li>
          </ul>
          <h2>Team Details</h2>
        </div>
      </section>
      <section className="team-details">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                src="assets/images/team/team-s-1-1.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-6">
              <div className="team-details__content">
                <h2>Christine Eve</h2>
                <span>Senior Manager</span>
                <p>
                  There are many variations of passages of available but the
                  majority have suffered alteration in some form, by injected
                  humou or randomised words which don't look even slightly
                  believable.
                </p>
                <div className="why-choose__progress">
                  <div className="why-choose__progress-top">
                    <h3>Loan Process</h3>
                    <span>90%</span>
                  </div>
                  <div className="why-choose__progress-bar">
                    <span
                      style={{ width: "90%" }}
                      className="wow slideInLeft"
                      data-wow-duration="1500ms"
                    ></span>
                  </div>
                </div>
                <div className="why-choose__progress">
                  <div className="why-choose__progress-top">
                    <h3>Consultancy</h3>
                    <span>76%</span>
                  </div>
                  <div className="why-choose__progress-bar">
                    <span
                      style={{ width: "76%" }}
                      className="wow slideInLeft"
                      data-wow-duration="1500ms"
                    ></span>
                  </div>
                </div>
                <div className="team-details__certificates">
                  <img
                    src="assets/images/team/team-certificate-1-1.jpg"
                    alt=""
                  />
                  <img
                    src="assets/images/team/team-certificate-1-2.jpg"
                    alt=""
                  />
                </div>
                <div className="team-details__social">
                  <Link to="#" className="fab fa-facebook-square"></Link>
                  <Link to="#" className="fab fa-twitter"></Link>
                  <Link to="#" className="fab fa-pinterest-p"></Link>
                  <Link to="#" className="fab fa-instagram"></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamDetails;
