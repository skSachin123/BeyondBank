import ActionBG1 from "../../../assets/images/backgrounds/call-to-action-bg-1-1.jpg";
import PHBG1 from "../../../assets/images/backgrounds/page-header-bg-1-1.jpg";
import VBG1 from "../../../assets/images/backgrounds/video-bg-1-1.jpg";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Work = () => {
  const [ytShow, setytShow] = useState(false);
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
              <span>How It Works</span>
            </li>
          </ul>
          <h2>How It Works</h2>
        </div>
      </section>

      <section className="feature-three">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="feature-three__box">
                <div className="feature-three__box-inner">
                  <i className="pylon-icon-point-of-sale"></i>
                  <h3>
                    <Link to="#">Get Quote</Link>
                  </h3>
                  <p>There many variation of pasages of lorem sum available.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature-three__box">
                <div className="feature-three__box-inner">
                  <i className="pylon-icon-consumer-behavior"></i>
                  <h3>
                    <Link to="#">Meet Agent</Link>
                  </h3>
                  <p>There many variation of pasages of lorem sum available.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature-three__box">
                <div className="feature-three__box-inner">
                  <i className="pylon-icon-assets"></i>
                  <h3>
                    <Link to="#">Quick Decision</Link>
                  </h3>
                  <p>There many variation of pasages of lorem sum available.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature-three__box">
                <div className="feature-three__box-inner">
                  <i className="pylon-icon-investment"></i>
                  <h3>
                    <Link to="#">Get Funding</Link>
                  </h3>
                  <p>There many variation of pasages of lorem sum available.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="video-two">
        <div
          className="video-two__bg"
          style={{ backgroundImage: `url(${VBG1})` }}
        ></div>
        <div className="container">
          <Link
            to="#"
            onClick={() => setytShow(true)}
            className="video-one__btn video-popup"
          >
            <i className="fa fa-play"></i>
          </Link>
          <h3>We Can Give Best Facilities For Business</h3>
        </div>
      </section>

      <section className="how-works">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <img
                src="assets/images/resources/how-works.jpg"
                className="how-works__image"
                alt=""
              />
            </div>
            <div className="col-lg-7">
              <div
                className="how-works__content wow fadeInRight"
                data-wow-duration="1500ms"
              >
                <div className="block-title text-left">
                  <p>How Process Works</p>
                  <h2>A Quick Payment Transparent Process</h2>
                </div>
                <p className="block-text">
                  There are many variations of pass of lorem ipsum but the
                  majority have suffered alteration in some form. Injected
                  humour randomised words which.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="call-to-action"
        style={{ backgroundImage: `url(${ActionBG1})` }}
      >
        <div className="container">
          <div className="left-content">
            <p>
              <span>Simple</span>
              <span>Transparent</span>
              <span>Secure</span>
            </p>
            <h3>Get a Business Loans Quickly</h3>
          </div>
          <div className="right-content">
            <Link to="#" className="thm-btn">
              Apply For Loan
            </Link>
          </div>
        </div>
      </section>

      {ytShow && (
        <>
          <div
            class="mfp-bg mfp-fade mfp-ready"
            style={{ height: "3378px", position: "absolute" }}
          ></div>
          <div
            class="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-fade mfp-ready"
            tabindex="-1"
            style={{ top: "900px", position: "absolute", height: "590px" }}
          >
            <div class="mfp-container mfp-s-ready mfp-iframe-holder">
              <div class="mfp-content">
                <div class="mfp-iframe-scaler">
                  <button
                    title="Close (Esc)"
                    type="button"
                    class="mfp-close"
                    onClick={() => setytShow(false)}
                  >
                    ×
                  </button>
                  <iframe
                    class="mfp-iframe"
                    src="//www.youtube.com/embed/fKjTmTVqnG8?autoplay=1"
                    frameborder="0"
                    allowFullscreen=""
                  ></iframe>
                </div>
              </div>
              <div class="mfp-preloader">Loading...</div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Work;
