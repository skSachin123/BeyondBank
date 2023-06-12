import PHBG1 from "../../../assets/images/backgrounds/page-header-bg-1-1.jpg";
import { Link } from "react-router-dom";
import React from "react";

const Service = () => {
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
              <span>Services</span>
            </li>
          </ul>
          <h2>Services</h2>
        </div>
      </section>

      <section className="service-page pt-120 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-60">
              <div className="service-one__card">
                <div className="service-one__image">
                  <img src="assets/images/services/services-1-1.png" alt="" />
                </div>
                <div className="service-one__content">
                  <h3>
                    <Link to="service-details.html">Personal Loan</Link>
                  </h3>
                  <p>
                    There are many variations of passages of lorem ipsum
                    available the majority have some.
                  </p>
                  <Link
                    to="service-details.html"
                    className="pylon-icon-right-arrow service-one__link"
                  ></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-60">
              <div className="service-one__card">
                <div className="service-one__image">
                  <img src="assets/images/services/services-1-2.png" alt="" />
                </div>
                <div className="service-one__content">
                  <h3>
                    <Link to="service-details.html">Education Loan</Link>
                  </h3>
                  <p>
                    There are many variations of passages of lorem ipsum
                    available the majority have some.
                  </p>
                  <Link
                    to="service-details.html"
                    className="pylon-icon-right-arrow service-one__link"
                  ></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-60">
              <div className="service-one__card">
                <div className="service-one__image">
                  <img src="assets/images/services/services-1-3.png" alt="" />
                </div>
                <div className="service-one__content">
                  <h3>
                    <Link to="service-details.html">Business Loan</Link>
                  </h3>
                  <p>
                    There are many variations of passages of lorem ipsum
                    available the majority have some.
                  </p>
                  <Link
                    to="service-details.html"
                    className="pylon-icon-right-arrow service-one__link"
                  ></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-60">
              <div className="service-one__card">
                <div className="service-one__image">
                  <img src="assets/images/services/services-1-4.png" alt="" />
                </div>
                <div className="service-one__content">
                  <h3>
                    <Link to="service-details.html">Property Loan</Link>
                  </h3>
                  <p>
                    There are many variations of passages of lorem ipsum
                    available the majority have some.
                  </p>
                  <Link
                    to="service-details.html"
                    className="pylon-icon-right-arrow service-one__link"
                  ></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-60">
              <div className="service-one__card">
                <div className="service-one__image">
                  <img src="assets/images/services/services-1-5.png" alt="" />
                </div>
                <div className="service-one__content">
                  <h3>
                    <Link to="service-details.html">Wedding Loan</Link>
                  </h3>
                  <p>
                    There are many variations of passages of lorem ipsum
                    available the majority have some.
                  </p>
                  <Link
                    to="service-details.html"
                    className="pylon-icon-right-arrow service-one__link"
                  ></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-60">
              <div className="service-one__card">
                <div className="service-one__image">
                  <img src="assets/images/services/services-1-6.png" alt="" />
                </div>
                <div className="service-one__content">
                  <h3>
                    <Link to="service-details.html">Car Loan</Link>
                  </h3>
                  <p>
                    There are many variations of passages of lorem ipsum
                    available the majority have some.
                  </p>
                  <Link
                    to="service-details.html"
                    className="pylon-icon-right-arrow service-one__link"
                  ></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
