import PHBG1 from "../../../assets/images/backgrounds/page-header-bg-1-1.jpg";
import SSBAR1 from "../../../assets/images/services/service-sidebar-1-1.jpg";
import { Link } from "react-router-dom";
import React, { useState } from "react";
const ServiceDetails = () => {
  const [activeFaq, setActiveFaq] = useState({ b: true });
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
              <span>Services Details</span>
            </li>
          </ul>
          <h2>Services Details</h2>
        </div>
      </section>

      <section className="service-details faq-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="service-sidebar">
                <div className="service-sidebar__category">
                  <h3>All Categories</h3>
                  <ul className="list-unstyled service-sidebar__category-list">
                    <li>
                      <Link to="#">Personal Loan</Link>
                    </li>
                    <li>
                      <Link to="#">Education Loan</Link>
                    </li>
                    <li>
                      <Link to="#">Business Loan</Link>
                    </li>
                    <li>
                      <Link to="#">Property Loan</Link>
                    </li>
                    <li>
                      <Link to="#">Wedding Loan</Link>
                    </li>
                    <li>
                      <Link to="#">Car Loan</Link>
                    </li>
                  </ul>
                </div>
                <div className="service-sidebar__call">
                  <div
                    className="service-sidebar__call-bg"
                    style={{ backgroundImage: `url(${SSBAR1})` }}
                  ></div>
                  <i className="pylon-icon-tech-support"></i>
                  <h3>
                    <Link to="#">92 666 888 0000</Link>
                  </h3>
                  <p>
                    Lorem ipsum is simply free text used by copytyping porro est
                    qui dolo.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="service-details__content">
                <div className="service-details__image">
                  <img
                    src="assets/images/services/service-d-1-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <h3>Education Loan</h3>
                <p>
                  Lorem ipsum is simply free text used by copytyping refreshing.
                  Neque porro est qui dolorem ipsum quia quaed inventore
                  veritatis et quasi architecto beatae vitae dicta sunt
                  explicabo. Aelltes port lacus quis enim var sed efficitur
                  turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the ndustry standard dummy text ever since the
                  1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </p>
                <p>
                  It has survived not only five centuries. Lorem Ipsum is simply
                  dummy text of the new design printng and type setting Ipsum
                  take a look at our round. When an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting.
                </p>
                <div className="row">
                  <div className="col-xl-6">
                    <img
                      src="assets/images/services/service-d-1-2.jpg"
                      alt=""
                      className="service-details__content-image img-fluid"
                    />
                  </div>
                  <div className="col-xl-6">
                    <h4>Loan Requirements</h4>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum.
                    </p>
                    <ul className="list-unstyled about-two__list service-details__list">
                      <li>
                        <i className="fa fa-check-circle"></i>
                        Refresing to get such a personal touch
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i>
                        Duis aute irure dolor in in voluptate
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i>
                        Velit esse cillum eu fugiat pariatur
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i>
                        Duis aute irure dolor in in voluptate
                      </li>
                    </ul>
                  </div>
                </div>
                <ul
                  id="accordion"
                  className="mb-0 wow fadeInUp list-unstyled"
                  data-wow-duration="1500ms"
                >
                  <li>
                    <h2
                      className={`para-title ${activeFaq.a && "active"}`}
                      onClick={() =>
                        setActiveFaq(activeFaq.a ? { a: false } : { a: true })
                      }
                    >
                      <span
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        {activeFaq.a ? (
                          <i className="far fa-minus"></i>
                        ) : (
                          <i className="far fa-plus"></i>
                        )}
                        Need a lower monthly payment plan?
                      </span>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      role="button"
                      aria-labelledby="collapseTwo"
                      data-parent="#accordion"
                    >
                      <p>
                        There are many variations of the have suffer in some fo
                        injected humour, or words believable. Lorem ipsum dolor
                        sit amet, consectetur adip isicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                  </li>
                  <li className="active">
                    <h2
                      className={`para-title ${activeFaq.b && "active"}`}
                      onClick={() =>
                        setActiveFaq(activeFaq.b ? { b: false } : { b: true })
                      }
                    >
                      <span
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        {activeFaq.b ? (
                          <i className="far fa-minus"></i>
                        ) : (
                          <i className="far fa-plus"></i>
                        )}
                        Want to study at prestigious university?
                      </span>
                    </h2>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="collapseOne"
                      data-parent="#accordion"
                    >
                      <p>
                        There are many variations of the have suffer in some fo
                        injected humour, or words believable. Lorem ipsum dolor
                        sit amet, consectetur adip isicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                  </li>
                  <li>
                    <h2
                      className={`para-title ${activeFaq.c && "active"}`}
                      onClick={() =>
                        setActiveFaq(activeFaq.c ? { c: false } : { c: true })
                      }
                    >
                      <span
                        className="collapsed"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        role="button"
                        aria-controls="collapseThree"
                      >
                        {activeFaq.c ? (
                          <i className="far fa-minus"></i>
                        ) : (
                          <i className="far fa-plus"></i>
                        )}
                        Want to invest and don’t have money?
                      </span>
                    </h2>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="collapseThree"
                      data-parent="#accordion"
                    >
                      <p>
                        There are many variations of the have suffer in some fo
                        injected humour, or words believable. Lorem ipsum dolor
                        sit amet, consectetur adip isicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;
