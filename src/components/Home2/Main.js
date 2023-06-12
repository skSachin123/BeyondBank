import BGMS1 from "../../assets/images/main-slider/main-slider-2-1.jpg";
import BGMS2 from "../../assets/images/main-slider/main-slider-2-2.jpg";
import ActionBG1 from "../../assets/images/backgrounds/call-to-action-bg-1-1.jpg";
import TrustBG1 from "../../assets/images/shapes/trust-bg-1-1.png";
import VBG1 from "../../assets/images/resources/video-1-1.jpg";
import TEAMBG1 from "../../assets/images/backgrounds/team-bg-1-1.jpg";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import WOW from "wowjs";

const Home2 = () => {
  const [mobile, setmobile] = useState(false);
  const [ytShow, setytShow] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [homeDrop, sethomeDrop] = useState(false);
  const [headerDrop, setheaderDrop] = useState(false);
  const [aboutDrop, setaboutDrop] = useState(false);
  const [servicesDrop, setservicesDrop] = useState(false);
  const [newsDrop, setnewsDrop] = useState(false);
  const [pagesDrop, setpagesDrop] = useState(false);
  const [cardDrop, setcardDrop] = useState(false);
  const [search, setsearch] = useState(false);
  const [activeFaq, setActiveFaq] = useState({ b: true });
  const location = useLocation();
  const path = location.pathname;
  const [menu, setmenu] = useState({});

  const activeMenu = () => {
    if (path === "/" || path === "/home-02") {
      setmenu({ home: true });
    } else if (path === "team" || path === "/team-details") {
      setmenu({ about: true });
    } else if (path === "/service" || path === "/service-details") {
      setmenu({ service: true });
    } else if (
      path === "/work" ||
      path === "/loan-calculator" ||
      path === "/credit-card" ||
      path === "/faqs" ||
      path === "/testimonial"
    ) {
      setmenu({ pages: true });
    } else if (path === "/shops" || path === "/shopdetails") {
      setmenu({ shop: true });
    } else if (path === "/news-main" || path === "/news-details") {
      setmenu({ news: true });
    } else if (path === "/contact") {
      setmenu({ contact: true });
    } else {
      setmenu({ home: true });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
    new WOW.WOW({
      live: false,
    }).init();
    activeMenu();
  }, [path]);
  const isSticky = () => {
    const scrollTop = window.scrollY;
    scrollTop >= 141 ? setSticky(true) : setSticky(false);
  };
  return (
    <>
      <header className="main-header main-header__two">
        <nav
          className={`main-menu main-menu__two ${
            sticky &&
            "stricky-header stricked-menu main-menu main-menu__two stricky-fixed"
          }`}
        >
          <div className="container">
            <div className="logo-box">
              <Link to="/" aria-label="logo image">
                <img src="assets/images/logo-light.png" width="155" alt="" />
              </Link>
              <span
                onClick={() => setmobile(true)}
                className="fa fa-bars mobile-nav__toggler"
              ></span>
            </div>
            <ul className="main-menu__list">
              <li className={`dropdown ${menu.home && "current"}`}>
                <Link to="/">Home</Link>
                <ul>
                  <li>
                    <Link to="/">Home One</Link>
                  </li>
                  <li>
                    <Link to="/Home-02">Home Two</Link>
                  </li>
                  <li className={`dropdown ${menu.home && "current"}`}>
                    <Link to="#">Header Styles</Link>
                    <ul>
                      <li>
                        <Link to="/">Header One</Link>
                      </li>
                      <li>
                        <Link to="/Home-02">Header Two</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className={`dropdown ${menu.about && "current"}`}>
                <Link to="#">About</Link>
                <ul>
                  <li>
                    <Link to="/team">Team</Link>
                  </li>
                  <li>
                    <Link to="/team-details">Team Details</Link>
                  </li>
                </ul>
              </li>
              <li className={`dropdown ${menu.service && "current"}`}>
                <Link to="/service">Services</Link>
                <ul>
                  <li>
                    <Link to="/service">Services</Link>
                  </li>
                  <li>
                    <Link to="/service-details">Service Details</Link>
                  </li>
                </ul>
              </li>
              <li className={`dropdown ${menu.news && "current"}`}>
                <Link to="/news-main">News</Link>
                <ul>
                  <li>
                    <Link to="/news-main">News</Link>
                  </li>
                  <li>
                    <Link to="/news-details">News Details</Link>
                  </li>
                </ul>
              </li>
              <li className={`dropdown ${menu.pages && "current"}`}>
                <Link to="#">Pages</Link>
                <ul>
                  <li>
                    <Link to="/work">How It Works</Link>
                  </li>
                  <li>
                    <Link to="/loan-calculator">Loan Calculator</Link>
                  </li>
                  <li className={`dropdown ${menu.pages && "current"}`}>
                    <Link to="/credit-card">Credit Card</Link>
                    <ul>
                      <li>
                        <Link to="/credit-card">Credit Card</Link>
                      </li>
                      <li>
                        <Link to="/credit-card-details">
                          Credit Card Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/faqs">FAQ</Link>
                  </li>
                  <li>
                    <Link to="/testimonial">Testimonials</Link>
                  </li>
                </ul>
              </li>
              <li className={`dropdown ${menu.contact && "current"}`}>
                <Link to="/contact">Contact</Link>
              </li>
              <li className="search-btn search-toggler">
                <Link to="#" onClick={() => setsearch(true)}>
                  <i className="pylon-icon-magnifying-glass"></i>
                </Link>
              </li>
            </ul>

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
        </nav>
      </header>

      <div className="stricky-header stricked-menu main-menu main-menu__two">
        <div className="sticky-header__content"></div>
      </div>

      <section className="main-slider main-slider__two">
        <Swiper
          className="swiper-container thm-swiper__slider"
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: "#main-slider__swiper-button-next",
            prevEl: "#main-slider__swiper-button-prev",
          }}
          autoplay={{ delay: 5000 }}
        >
          <div className="swiper-wrapper">
            <SwiperSlide>
              <div className="swiper-slide">
                <div
                  className="image-layer"
                  style={{ backgroundImage: `url(${BGMS1})` }}
                ></div>
                <div className="container">
                  <div className="row">
                    <div className="col-xl-8 col-lg-8">
                      <p>Welcome to Pylon Company</p>
                      <h2>Building A Brigther Financial Future</h2>
                      <div className="button-wrap">
                        <Link to="#" className=" thm-btn">
                          Apply For Loan
                        </Link>
                        <Link to="#" className=" thm-btn">
                          Contact Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div
                  className="image-layer"
                  style={{ backgroundImage: `url(${BGMS2})` }}
                ></div>
                <div className="container">
                  <div className="row">
                    <div className="col-xl-8 col-lg-8">
                      <p>Welcome to Pylon Company</p>
                      <h2>Building A Brigther Financial Future</h2>
                      <div className="button-wrap">
                        <Link to="#" className=" thm-btn">
                          Apply For Loan
                        </Link>
                        <Link to="#" className=" thm-btn">
                          Contact Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div
                  className="image-layer"
                  style={{ backgroundImage: `url(${BGMS1})` }}
                ></div>
                <div className="container">
                  <div className="row">
                    <div className="col-xl-8 col-lg-8">
                      <p>Simple & Secure Payment Process</p>
                      <h2>Connecting All Your Loan Needs</h2>
                      <div className="button-wrap">
                        <Link to="#" className=" thm-btn">
                          Apply For Loan
                        </Link>
                        <Link to="#" className=" thm-btn">
                          Contact Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
          <div className="main-slider__nav">
            <div
              className="swiper-button-prev"
              id="main-slider__swiper-button-next"
            >
              <i className="pylon-icon-left-arrow"></i>
            </div>
            <div
              className="swiper-button-next"
              id="main-slider__swiper-button-prev"
            >
              <i className="pylon-icon-right-arrow"></i>
            </div>
          </div>
        </Swiper>
      </section>

      <section className="service-two">
        <img
          src="assets/images/shapes/service-shape-1-1.png"
          className="service-two__shape-1"
          alt=""
        />
        <img
          src="assets/images/shapes/service-shape-1-2.png"
          className="service-two__shape-2"
          alt=""
        />
        <img
          src="assets/images/shapes/service-shape-1-3.png"
          className="service-two__shape-3"
          alt=""
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-4 wow fadeInUp" data-wow-duration="1500ms">
              <div className="service-two__card">
                <i className="pylon-icon-consumer-behavior"></i>
                <h3>
                  <Link to="/service-details">Quick Payment Process</Link>
                </h3>
                <p>
                  There are many variations of passages of but the majority have
                  in some.
                </p>
                <Link to="/service-details" className="service-two__card-link">
                  <i className="pylon-icon-right-arrow"></i>Read More
                </Link>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-duration="1500ms">
              <div className="service-two__card">
                <i className="pylon-icon-point-of-sale"></i>
                <h3>
                  <Link to="/service-details">No Prepayment Fees</Link>
                </h3>
                <p>
                  There are many variations of passages of but the majority have
                  in some.
                </p>
                <Link to="/service-details" className="service-two__card-link">
                  <i className="pylon-icon-right-arrow"></i>Read More
                </Link>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-duration="1500ms">
              <div className="service-two__card">
                <i className="pylon-icon-strategy"></i>
                <h3>
                  <Link to="/service-details">Safe & Secure Process</Link>
                </h3>
                <p>
                  There are many variations of passages of but the majority have
                  in some.
                </p>
                <Link to="/service-details" className="service-two__card-link">
                  <i className="pylon-icon-right-arrow"></i>Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-two">
        <img
          src="assets/images/shapes/about-shape-1-1.png"
          className="about-two__shape-1"
          alt=""
        />
        <img
          src="assets/images/shapes/about-shape-1-2.png"
          className="about-two__shape-2"
          alt=""
        />
        <img
          src="assets/images/shapes/about-shape-1-3.png"
          className="about-two__shape-3"
          alt=""
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 wow fadeInLeft" data-wow-duration="1500ms">
              <div className="about-two__image">
                <img src="assets/images/resources/about-2-1.png" alt="" />
                <div className="about-two__box">
                  <i className="pylon-icon-assets"></i>
                  <h3>26 Years of Expericence</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-two__content">
                <div className="block-title text-left">
                  <p>Company Introductions</p>
                  <h2>A Quick, Secure & Transparent Process</h2>
                </div>
                <p>
                  There are many variations of passages of lorem ipsum available
                  the majority have suffered alteration in some form by injected
                  humour. Duis aute irure dolor lipsum is simply free text
                  available in the local markets in reprehenderit.
                </p>
                <ul className="list-unstyled about-two__list">
                  <li>
                    <i className="fa fa-check-circle"></i>
                    We’ve less paper work
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i>
                    We offer any type of loans
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i>
                    We’ve less process fees
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i>
                    We process quickly
                  </li>
                </ul>
                <div className="button-wrap">
                  <Link to="#" className="thm-btn">
                    Discover More
                  </Link>
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

      <section className="service-one service-one__home-two">
        <img
          src="assets/images/shapes/service-shape-2-1.png"
          alt=""
          className="service-one__home-two__shape-1"
        />
        <img
          src="assets/images/shapes/service-shape-2-2.png"
          alt=""
          className="service-one__home-two__shape-2"
        />
        <img
          src="assets/images/shapes/service-shape-2-3.png"
          alt=""
          className="service-one__home-two__shape-3"
        />
        <div className="container">
          <div className="block-title text-center">
            <p>What We’re Offering</p>
            <h2>All Loans Services</h2>
          </div>
          <div className="row">
            <div
              className="col-lg-4 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="000ms"
            >
              <div className="service-one__card">
                <div className="service-one__image">
                  <img src="assets/images/services/services-1-1.png" alt="" />
                </div>
                <div className="service-one__content">
                  <h3>
                    <Link to="/service-details">Personal Loan</Link>
                  </h3>
                  <p>
                    There are many variations of passages of lorem ipsum
                    available the majority have some.
                  </p>
                  <Link
                    to="/service-details"
                    className="pylon-icon-right-arrow service-one__link"
                  ></Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="100ms"
            >
              <div className="service-one__card">
                <div className="service-one__image">
                  <img src="assets/images/services/services-1-2.png" alt="" />
                </div>
                <div className="service-one__content">
                  <h3>
                    <Link to="/service-details">Education Loan</Link>
                  </h3>
                  <p>
                    There are many variations of passages of lorem ipsum
                    available the majority have some.
                  </p>
                  <Link
                    to="/service-details"
                    className="pylon-icon-right-arrow service-one__link"
                  ></Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="200ms"
            >
              <div className="service-one__card">
                <div className="service-one__image">
                  <img src="assets/images/services/services-1-3.png" alt="" />
                </div>
                <div className="service-one__content">
                  <h3>
                    <Link to="/service-details">Business Loan</Link>
                  </h3>
                  <p>
                    There are many variations of passages of lorem ipsum
                    available the majority have some.
                  </p>
                  <Link
                    to="/service-details"
                    className="pylon-icon-right-arrow service-one__link"
                  ></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="video-one">
        <div className="container">
          <div
            className="video-one__box wow fadeInUp"
            data-wow-duration="1500ms"
          >
            <div
              className="video-one__box-bg"
              style={{ backgroundImage: `url(${VBG1})` }}
            ></div>
            <Link
              to="#"
              onClick={() => setytShow(true)}
              className="video-one__btn video-popup"
            >
              <i className="fa fa-play"></i>
            </Link>
            <h3>We Can Give Best Facilities For Business</h3>
          </div>
        </div>
      </section>

      <section className="faq-one">
        <div
          className="faq-one__bg"
          style={{ backgroundImage: `url(${TrustBG1})` }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="faq-one__content">
                <div className="block-title text-left">
                  <p>What We’re Offering</p>
                  <h2>Business Loans for a Daily Expenses</h2>
                </div>
                <p>
                  There are many variations of passages of lorem ipsum available
                  the majority have suffered alteration in some form by injected
                  humour. Duis aute irure dolor lipsum is simply. quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
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
                      sit amet, consectetur adip isicing elit.
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
                      sit amet, consectetur adip isicing elit.
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
                      sit amet, consectetur adip isicing elit.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="team-home">
        <img
          src="assets/images/shapes/team-shape-1-1.png"
          alt=""
          className="team-home__shape-1"
        />
        <img
          src="assets/images/shapes/team-shape-1-2.png"
          alt=""
          className="team-home__shape-2"
        />
        <div
          className="team-home__bg"
          style={{ backgroundImage: `url(${TEAMBG1})` }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="team-home__content">
                <div className="block-title text-left">
                  <p>Professional & Experts</p>
                  <h2>Meet the Best Agents</h2>
                </div>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </p>
                <div className="team-home__nav">
                  <div
                    className="swiper-button-prev"
                    id="team-home__swiper-button-next"
                  >
                    <i className="pylon-icon-left-arrow"></i>
                  </div>
                  <div
                    className="swiper-button-next"
                    id="team-home__swiper-button-prev"
                  >
                    <i className="pylon-icon-right-arrow"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="team-home__carousel-wrap ">
          <Swiper
            className="thm-swiper__slider swiper-container"
            modules={[Navigation, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000 }}
            navigation={{
              nextEl: "#team-home__swiper-button-next",
              prevEl: "#team-home__swiper-button-prev",
            }}
            breakpoints={{
              0: {
                spaceBetween: 0,
                slidesPerView: 1,
              },
              376: {
                spaceBetween: 0,
                slidesPerView: 1,
              },
              576: {
                spaceBetween: 30,
                slidesPerView: 2,
              },
              768: {
                spaceBetween: 30,
                slidesPerView: 2,
              },
              992: {
                spaceBetween: 30,
                slidesPerView: 2,
              },
              1200: {
                spaceBetween: 30,
                slidesPerView: 3,
              },
            }}
          >
            <div className="swiper-wrapper">
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="team-one__card">
                    <div className="team-one__image">
                      <img src="assets/images/team/team-1-1.png" alt="" />
                    </div>
                    <div className="team-one__content">
                      <div className="team-one__social">
                        <Link to="#" className="fab fa-facebook-square"></Link>
                        <Link to="#" className="fab fa-twitter"></Link>
                        <Link to="#" className="fab fa-pinterest-p"></Link>
                        <Link to="#" className="fab fa-instagram"></Link>
                      </div>
                      <h3>Jerome Lindsey</h3>
                      <span>Expert Agent</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="team-one__card">
                    <div className="team-one__image">
                      <img src="assets/images/team/team-1-2.png" alt="" />
                    </div>
                    <div className="team-one__content">
                      <div className="team-one__social">
                        <Link to="#" className="fab fa-facebook-square"></Link>
                        <Link to="#" className="fab fa-twitter"></Link>
                        <Link to="#" className="fab fa-pinterest-p"></Link>
                        <Link to="#" className="fab fa-instagram"></Link>
                      </div>
                      <h3>Ian Barker</h3>
                      <span>Expert Agent</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="team-one__card">
                    <div className="team-one__image">
                      <img src="assets/images/team/team-1-3.png" alt="" />
                    </div>
                    <div className="team-one__content">
                      <div className="team-one__social">
                        <Link to="#" className="fab fa-facebook-square"></Link>
                        <Link to="#" className="fab fa-twitter"></Link>
                        <Link to="#" className="fab fa-pinterest-p"></Link>
                        <Link to="#" className="fab fa-instagram"></Link>
                      </div>
                      <h3>Nannie Robinson</h3>
                      <span>Expert Agent</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="team-one__card">
                    <div className="team-one__image">
                      <img src="assets/images/team/team-1-4.png" alt="" />
                    </div>
                    <div className="team-one__content">
                      <div className="team-one__social">
                        <Link to="#" className="fab fa-facebook-square"></Link>
                        <Link to="#" className="fab fa-twitter"></Link>
                        <Link to="#" className="fab fa-pinterest-p"></Link>
                        <Link to="#" className="fab fa-instagram"></Link>
                      </div>
                      <h3>Rebecca Bass</h3>
                      <span>Expert Agent</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="team-one__card">
                    <div className="team-one__image">
                      <img src="assets/images/team/team-1-5.png" alt="" />
                    </div>
                    <div className="team-one__content">
                      <div className="team-one__social">
                        <Link to="#" className="fab fa-facebook-square"></Link>
                        <Link to="#" className="fab fa-twitter"></Link>
                        <Link to="#" className="fab fa-pinterest-p"></Link>
                        <Link to="#" className="fab fa-instagram"></Link>
                      </div>
                      <h3>Antonio Rogers</h3>
                      <span>Expert Agent</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="team-one__card">
                    <div className="team-one__image">
                      <img src="assets/images/team/team-1-6.png" alt="" />
                    </div>
                    <div className="team-one__content">
                      <div className="team-one__social">
                        <Link to="#" className="fab fa-facebook-square"></Link>
                        <Link to="#" className="fab fa-twitter"></Link>
                        <Link to="#" className="fab fa-pinterest-p"></Link>
                        <Link to="#" className="fab fa-instagram"></Link>
                      </div>
                      <h3>Fred Little</h3>
                      <span>Expert Agent</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </section>

      <section className="blog-home pt-120 pb-90">
        <div className="container">
          <div className="block-title text-center">
            <p>Directly From the Blog</p>
            <h2>News & Articles</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 wow fadeInUp" data-wow-duration="1500ms">
              <div className="blog-card">
                <div className="blog-card__image">
                  <span>20 Sep</span>
                  <img src="assets/images/blog/blog-1-1.png" alt="" />
                </div>
                <div className="blog-card__content">
                  <div className="blog-card__meta">
                    <Link to="#">
                      <i className="fa fa-tags"></i>Loan
                    </Link>
                    <Link to="#">
                      <i className="fa fa-comments"></i>2 Comments
                    </Link>
                  </div>
                  <h3>
                    <Link to="/news-details">
                      Changing & grow your business faster
                    </Link>
                  </h3>
                  <div className="blog-card__author">
                    <img src="assets/images/blog/blog-author-1-1.png" alt="" />
                    Christine Eve
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-duration="1500ms">
              <div className="blog-card">
                <div className="blog-card__image">
                  <span>20 Sep</span>
                  <img src="assets/images/blog/blog-1-2.png" alt="" />
                </div>
                <div className="blog-card__content">
                  <div className="blog-card__meta">
                    <Link to="#">
                      <i className="fa fa-tags"></i>Loan
                    </Link>
                    <Link to="#">
                      <i className="fa fa-comments"></i>2 Comments
                    </Link>
                  </div>
                  <h3>
                    <Link to="/news-details">
                      Changing & grow your business faster
                    </Link>
                  </h3>
                  <div className="blog-card__author">
                    <img src="assets/images/blog/blog-author-1-2.png" alt="" />
                    Christine Eve
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-duration="1500ms">
              <div className="blog-card">
                <div className="blog-card__image">
                  <span>20 Sep</span>
                  <img src="assets/images/blog/blog-1-3.png" alt="" />
                </div>
                <div className="blog-card__content">
                  <div className="blog-card__meta">
                    <Link to="#">
                      <i className="fa fa-tags"></i>Loan
                    </Link>
                    <Link to="#">
                      <i className="fa fa-comments"></i>2 Comments
                    </Link>
                  </div>
                  <h3>
                    <Link to="/news-details">
                      Changing & grow your business faster
                    </Link>
                  </h3>
                  <div className="blog-card__author">
                    <img src="assets/images/blog/blog-author-1-3.png" alt="" />
                    Christine Eve
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="google-map__home-two">
        <iframe
          title="template google map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
          className="map__home-two"
          allowFullScreen
        ></iframe>
      </div>
      <div className="client-carousel pt-120 pb-120  ">
        <div className="container">
          <Swiper
            className="thm-swiper__slider swiper-container"
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              0: {
                spaceBetween: 30,
                slidesPerView: 2,
              },
              375: {
                spaceBetween: 30,
                slidesPerView: 2,
              },
              575: {
                spaceBetween: 30,
                slidesPerView: 3,
              },
              767: {
                spaceBetween: 50,
                slidesPerView: 4,
              },
              991: {
                spaceBetween: 50,
                slidesPerView: 5,
              },
              1199: {
                spaceBetween: 100,
                slidesPerView: 5,
              },
            }}
          >
            <div className="swiper-wrapper">
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>

      <div className={`mobile-nav__wrapper ${mobile ? "expanded" : ""}`}>
        <div
          className="mobile-nav__overlay mobile-nav__toggler"
          onClick={() => setmobile(false)}
        ></div>
        <div className="mobile-nav__content">
          <span
            className="mobile-nav__close mobile-nav__toggler"
            onClick={() => setmobile(false)}
          >
            <i className="far fa-times"></i>
          </span>

          <div className="logo-box">
            <Link to="/" aria-label="logo image">
              <img src="assets/images/logo-light.png" width="155" alt="" />
            </Link>
          </div>
          <div className="mobile-nav__container">
            <ul className="main-menu__list">
              <li className="dropdown current">
                <Link to="#" className={homeDrop ? "expanded" : ""}>
                  Home
                  <button
                    aria-label="dropdown toggler"
                    className={homeDrop ? "expanded" : ""}
                    onClick={() => sethomeDrop(homeDrop ? false : true)}
                  >
                    <i className="fa fa-angle-down"></i>
                  </button>
                </Link>
                {homeDrop && (
                  <ul style={{ display: "block" }}>
                    <li className="current">
                      <Link to="/" onClick={() => setmobile(false)}>
                        Home One
                      </Link>
                    </li>
                    <li>
                      <Link to="/home-02" onClick={() => setmobile(false)}>
                        Home Two
                      </Link>
                    </li>
                    <li className="dropdown">
                      <Link to="#" className={headerDrop ? "expanded" : ""}>
                        Header Styles
                        <button
                          aria-label="dropdown toggler"
                          className={headerDrop ? "expanded" : ""}
                          onClick={() =>
                            setheaderDrop(headerDrop ? false : true)
                          }
                        >
                          <i className="fa fa-angle-down"></i>
                        </button>
                      </Link>
                      {headerDrop && (
                        <ul style={{ display: "block" }}>
                          <li className="current">
                            <Link to="/" onClick={() => setmobile(false)}>
                              Header One
                            </Link>
                          </li>
                          <li>
                            <Link to="/home2" onClick={() => setmobile(false)}>
                              Header Two
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                )}
              </li>

              <li className="dropdown">
                <Link to="#" className={aboutDrop ? "expanded" : ""}>
                  About
                  <button
                    aria-label="dropdown toggler"
                    className={aboutDrop ? "expanded" : ""}
                    onClick={() => setaboutDrop(aboutDrop ? false : true)}
                  >
                    <i className="fa fa-angle-down"></i>
                  </button>
                </Link>
                {aboutDrop && (
                  <ul style={{ display: "block" }}>
                    <li>
                      <Link to="/team" onClick={() => setmobile(false)}>
                        Team
                      </Link>
                    </li>
                    <li>
                      <Link to="/team-details" onClick={() => setmobile(false)}>
                        TeamDetails
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li className="dropdown">
                <Link to="#" className={servicesDrop ? "expanded" : ""}>
                  Services
                  <button
                    aria-label="dropdown toggler"
                    className={servicesDrop ? "expanded" : ""}
                    onClick={() => setservicesDrop(servicesDrop ? false : true)}
                  >
                    <i className="fa fa-angle-down"></i>
                  </button>
                </Link>
                {servicesDrop && (
                  <ul style={{ display: "block" }}>
                    <li>
                      <Link to="/service" onClick={() => setmobile(false)}>
                        Service
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/service-details"
                        onClick={() => setmobile(false)}
                      >
                        Service Details
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li className="dropdown">
                <Link to="#" className={newsDrop ? "expanded" : ""}>
                  News
                  <button
                    aria-label="dropdown toggler"
                    className={newsDrop ? "expanded" : ""}
                    onClick={() => setnewsDrop(newsDrop ? false : true)}
                  >
                    <i className="fa fa-angle-down"></i>
                  </button>
                </Link>
                {newsDrop && (
                  <ul style={{ display: "block" }}>
                    <li>
                      <Link to="/newsmain" onClick={() => setmobile(false)}>
                        News
                      </Link>
                    </li>
                    <li>
                      <Link to="/newsdetails" onClick={() => setmobile(false)}>
                        News Details
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li className="dropdown">
                <Link to="#" className={pagesDrop ? "expanded" : ""}>
                  Pages
                  <button
                    aria-label="dropdown toggler"
                    className={pagesDrop ? "expanded" : ""}
                    onClick={() => setpagesDrop(pagesDrop ? false : true)}
                  >
                    <i className="fa fa-angle-down"></i>
                  </button>
                </Link>
                {pagesDrop && (
                  <ul style={{ display: "block" }}>
                    <li>
                      <Link to="/work" onClick={() => setmobile(false)}>
                        How it works
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/loan-calculator"
                        onClick={() => setmobile(false)}
                      >
                        Loan Calculator
                      </Link>
                    </li>
                    <li className="dropdown">
                      <Link to="#" className={cardDrop ? "expanded" : ""}>
                        Credit Card
                        <button
                          aria-label="dropdown toggler"
                          className={cardDrop ? "expanded" : ""}
                          onClick={() => setcardDrop(cardDrop ? false : true)}
                        >
                          <i className="fa fa-angle-down"></i>
                        </button>
                      </Link>
                      {cardDrop && (
                        <ul style={{ display: "block" }}>
                          <li>
                            <Link
                              to="/credit-card"
                              onClick={() => setmobile(false)}
                            >
                              Credit Card
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/credit-card-details"
                              onClick={() => setmobile(false)}
                            >
                              Credit Card Details
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li>
                      <Link to="/faqs" onClick={() => setmobile(false)}>
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link to="/testimonials" onClick={() => setmobile(false)}>
                        Testimonials
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <Link to="/contact" onClick={() => setmobile(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="pylon-icon-email1"></i>
              <Link to="mailto:needhelp@azino.com">needhelp@pylon.com</Link>
            </li>
            <li>
              <i className="pylon-icon-telephone"></i>
              <Link to="tel:666-888-0000">666 888 0000</Link>
            </li>
          </ul>
          <div className="mobile-nav__top">
            <div className="mobile-nav__language">
              <img src="assets/images/resources/flag-1-1.jpg" alt="" />
              <label className="sr-only" htmlFor="language-select">
                select language
              </label>
              <select className="selectpicker" id="language-select">
                <option value="english">English</option>
                <option value="arabic">Arabic</option>
              </select>
            </div>
            <div className="mobile-nav__social">
              <Link to="#" aria-label="twitter">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="#" aria-label="facebook">
                <i className="fab fa-facebook-square"></i>
              </Link>
              <Link to="#" aria-label="pinterest">
                <i className="fab fa-pinterest-p"></i>
              </Link>
              <Link to="#" aria-label="instagram">
                <i className="fab fa-instagram"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={`search-popup ${search && "active"}`}>
        <div
          className="search-popup__overlay search-toggler"
          onClick={() => setsearch(false)}
        ></div>
        <div className="search-popup__content">
          <form action="#">
            <label htmlFor="search" className="sr-only">
              search here
            </label>
            <input type="text" id="search" placeholder="Search Here..." />
            <button
              type="submit"
              aria-label="search submit"
              className="thm-btn"
            >
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </div>

      {ytShow && (
        <>
          <div
            className="mfp-bg mfp-fade mfp-ready"
            style={{ height: "7617px", position: "absolute" }}
          ></div>
          <div
            className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-fade mfp-ready"
            tabindex="-1"
            style={{ top: "3300px", position: "absolute", height: "590px" }}
          >
            <div className="mfp-container mfp-s-ready mfp-iframe-holder">
              <div className="mfp-content">
                <div className="mfp-iframe-scaler">
                  <button
                    title="Close (Esc)"
                    type="button"
                    className="mfp-close"
                    onClick={() => setytShow(false)}
                  >
                    ×
                  </button>
                  <iframe
                    className="mfp-iframe"
                    src="//www.youtube.com/embed/fKjTmTVqnG8?autoplay=1"
                    frameborder="0"
                    allowFullScreen=""
                  ></iframe>
                </div>
              </div>
              <div className="mfp-preloader">Loading...</div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home2;
