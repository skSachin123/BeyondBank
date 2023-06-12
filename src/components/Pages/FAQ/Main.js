import PHBG1 from "../../../assets/images/backgrounds/page-header-bg-1-1.jpg";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const FAQ = () => {
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
              <span>FAQ's</span>
            </li>
          </ul>
          <h2>FAQ's</h2>
        </div>
      </section>

      <section className="faq-one faq-one__faq-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
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
                <li>
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
                <li>
                  <h2
                    className={`para-title ${activeFaq.d && "active"}`}
                    onClick={() =>
                      setActiveFaq(activeFaq.d ? { d: false } : { d: true })
                    }
                  >
                    <span
                      className="collapsed"
                      data-toggle="collapse"
                      data-target="#collapseFour"
                      aria-expanded="false"
                      role="button"
                      aria-controls="collapseFour"
                    >
                      {activeFaq.d ? (
                        <i className="far fa-minus"></i>
                      ) : (
                        <i className="far fa-plus"></i>
                      )}
                      Want to invest and don’t have money?
                    </span>
                  </h2>
                  <div
                    id="collapseFour"
                    className="collapse"
                    aria-labelledby="collapseFour"
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
                    className={`para-title ${activeFaq.e && "active"}`}
                    onClick={() =>
                      setActiveFaq(activeFaq.e ? { e: false } : { e: true })
                    }
                  >
                    <span
                      className="collapsed"
                      data-toggle="collapse"
                      data-target="#collapseFive"
                      aria-expanded="false"
                      role="button"
                      aria-controls="collapseFive"
                    >
                      {activeFaq.e ? (
                        <i className="far fa-minus"></i>
                      ) : (
                        <i className="far fa-plus"></i>
                      )}
                      Want to invest and don’t have money?
                    </span>
                  </h2>
                  <div
                    id="collapseFive"
                    className="collapse"
                    aria-labelledby="collapseFive"
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
                    className={`para-title ${activeFaq.f && "active"}`}
                    onClick={() =>
                      setActiveFaq(activeFaq.f ? { f: false } : { f: true })
                    }
                  >
                    <span
                      className="collapsed"
                      data-toggle="collapse"
                      data-target="#collapseSix"
                      aria-expanded="false"
                      role="button"
                      aria-controls="collapseSix"
                    >
                      {activeFaq.f ? (
                        <i className="far fa-minus"></i>
                      ) : (
                        <i className="far fa-plus"></i>
                      )}
                      Want to invest and don’t have money?
                    </span>
                  </h2>
                  <div
                    id="collapseSix"
                    className="collapse"
                    aria-labelledby="collapseSix"
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
            <div className="col-lg-4">
              <div className="faq-one__box">
                <img
                  src="assets/images/resources/faq-box-1-1.png"
                  className="img-fluid"
                  alt=""
                />
                <div className="main-header__info">
                  <div className="main-header__info-phone">
                    <i className="pylon-icon-tech-support"></i>
                    <div className="main-header__info-phone-content">
                      <span>Call Anytime</span>
                      <h3>
                        <Link to="tel:92-666-888-0000">92 666 888 0000</Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
