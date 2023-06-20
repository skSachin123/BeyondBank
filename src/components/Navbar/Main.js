import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import WOW from "wowjs";
import secureLocalStorage from "react-secure-storage";
import { TbPower } from "react-icons/tb";
const Navbar = () => {
  const [mobile, setmobile] = useState(false);
  const [homeDrop, sethomeDrop] = useState(false);
  const [headerDrop, setheaderDrop] = useState(false);
  const [aboutDrop, setaboutDrop] = useState(false);
  const [servicesDrop, setservicesDrop] = useState(false);
  const [newsDrop, setnewsDrop] = useState(false);
  const [pagesDrop, setpagesDrop] = useState(false);
  const [cardDrop, setcardDrop] = useState(false);
  const [search, setsearch] = useState(false);
  const location = useLocation();
  console.log(location);
  const path = location.pathname;
  const [menu, setmenu] = useState({});
  const navigate = useNavigate();
  const user1 = JSON.parse(secureLocalStorage.getItem("users"));
  const user = JSON.parse(localStorage.getItem("users"));

  console.log(user);
  const [isLoggedIn, setIsLoggedIn] = useState(
    // Boolean(secureLocalStorage.getItem("user"))
    secureLocalStorage.getItem("user")
  );

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

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  //Logout Functionality
  const handleLogOut = () => {
    // secureLocalStorage.removeItem("user");
    // navigate("/");

    //another code for logout to render in every component
    localStorage.removeItem("users");
    localStorage.removeItem("webChatSessionId");
    localStorage.removeItem("webChatAuthentication");
    secureLocalStorage.removeItem("user");

    window.initWebchat(
      "https://endpoint-trial.cognigy.ai/2a7dbd4efa25354aa8b6abb0b637629ee8fcd3aab960523599c5da1e0204f5a5",
      {
        settings: {
          disableBranding: "true",
          designTemplate: "2",
          startBehavior: "injection",
          getStartedText: "",
          getStartedData: {
            session_extref: "",
            authenticated: "no",
            locationpath: "landing-page",
            customer_uniqueId: "",
          },
        },
      }
    );
    setIsLoggedIn(false);
    navigate("/");
  };

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

  //useffect code for logout to render in every tab
  useEffect(() => {
    const handleStorageChange = () => {
      // setIsLoggedIn(Boolean(secureLocalStorage.getItem("user")));
      setIsLoggedIn(secureLocalStorage.getItem("user"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
  return (
    <>
      <div className="page-wrapper">
        <header className="main-header">
          <div className="topbar">
            <div className="container">
              <div className="topbar__left">
                <div className="topbar__social">
                  <Link to="#" className="fab fa-facebook-square"></Link>
                  <Link to="#" className="fab fa-twitter"></Link>
                  <Link to="#" className="fab fa-pinterest-p"></Link>
                  <Link to="#" className="fab fa-instagram"></Link>
                </div>
                {user?.firstName ? (
                  location?.pathname == "/Home3" ? (
                    <Link to="/">Home</Link>
                  ) : (
                    <Link to="/Home3">Dashboard</Link>
                  )
                ) : (
                  <Link to="/login">Login</Link>
                )}
                <Link to="#">Company News</Link>
                <Link to="#">FAQs</Link>
              </div>
              <div className="topbar__right">
                <Link to="#">
                  <i className="pylon-icon-email1"></i>avayahelp@gmail.com
                </Link>
                <Link to="#">
                  <i className="pylon-icon-clock2"></i>Mon - Fir 9:00 AM - 5:00
                  PM
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h5 className="mb pl-5 pt-2 ml-4" style={{ color: "#314C82" }}>
              {location?.pathname !== "/login" &&
                user?.firstName &&
                `Welcome ${user?.firstName}`}
            </h5>
          </div>
          {location?.pathname !== "/login" && location?.pathname !== "/" ? (
            <nav
              className={`main-menu ${
                sticky && "stricky-header stricked-menu stricky-fixed"
              } mt-n4`}
            >
              <div className="container">
                <div className="logo-box">
                  <Link to="/" aria-label="logo image">
                    {/* <img src="assets/images/logo-dark.png" width="155" alt="" /> */}
                    <img
                      src="assets/images/royal-bank-o.png"
                      width="200"
                      alt=""
                    />
                  </Link>
                  <span
                    onClick={() => setmobile(true)}
                    className="fa fa-bars mobile-nav__toggler"
                  ></span>
                </div>
                <ul className="main-menu__list">
                  <li className={`dropdown ${menu.about && "current"}`}>
                    {console.warn("Hello", isLoggedIn)}

                    <Link to="/credit-card">Credit Card</Link>

                    {/* {isLoggedIn ? (
                    <Link to="/credit-card">Home</Link>
                  ) : (
                    <Link to="/">Home</Link>
                  )} */}
                    {/* <ul>
                    <li>
                      <Link to="/home">Home One</Link>
                    </li>
                    <li>
                      <Link to="/home-02">Home Two</Link>
                    </li>
                    <li className={`dropdown ${menu.home && "current"}`}>
                      <Link to="#">Header Styles</Link>
                      <ul>
                        <li>
                          <Link to="/home">Header One</Link>
                        </li>
                        <li>
                          <Link to="/home-02">Header Two</Link>
                        </li>
                      </ul>
                    </li>
                  </ul> */}
                  </li>
                  <li className={`dropdown ${menu.home}`}>
                    <Link to="#">Benefits</Link>

                    {/* {isLoggedIn ? (
                    <Link to="/credit-card">Home</Link>
                  ) : (
                    <Link to="/">Home</Link>
                  )} */}
                    {/* <ul>
                    <li>
                      <Link to="/home">Home One</Link>
                    </li>
                    <li>
                      <Link to="/home-02">Home Two</Link>
                    </li>
                    <li className={`dropdown ${menu.home && "current"}`}>
                      <Link to="#">Header Styles</Link>
                      <ul>
                        <li>
                          <Link to="/home">Header One</Link>
                        </li>
                        <li>
                          <Link to="/home-02">Header Two</Link>
                        </li>
                      </ul>
                    </li>
                  </ul> */}
                  </li>
                  <li className={`dropdown ${menu.news && "current"}`}>
                    <Link to="#">Pay</Link>
                  </li>
                  {/* <li className={`dropdown ${menu.service && "current"}`}>
                  <Link to="#">Offer</Link>
                </li> */}
                  <li className={`dropdown ${menu.about && "current"}`}>
                    <Link to="#">Rewards</Link>
                  </li>
                  <li className={`dropdown ${menu.news && "current"}`}>
                    <Link to="#">Saving</Link>
                  </li>

                  {/* <li className={`dropdown ${menu.about && "current"}`}>
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
                </li> */}
                  <li className={`dropdown ${menu.pages && "current"}`}>
                    <Link to="#">Apply</Link>

                    <ul>
                      <li>
                        <Link to="/credit-card">Credit Card</Link>
                      </li>
                      <li>
                        <Link to="#">Personal Loan</Link>
                      </li>
                      <li>
                        <Link to="#">Car Loan</Link>
                      </li>
                      <li>
                        <Link to="#">Home Loan</Link>
                      </li>
                    </ul>
                  </li>
                  {/* <li className="search-btn search-toggler">
                  <Link to="#" onClick={() => setsearch(true)}>
                    <i className="pylon-icon-magnifying-glass"></i>
                  </Link>
                </li> */}
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
                {/* code for logout button for rendering  
              {secureLocalStorage.getItem("user") ? (
                <TbPower
                  size={"2.7rem"}
                  className="Tbpower-icon"
                  title="Logout"
                  onClick={handleLogOut}
                >
                  <span className="Tbpower-icon-title">
                    <title>Logout</title>
                  </span>
                </TbPower>
              ) : null} */}
                {user?.firstName && location?.pathname !== "/login" ? (
                  <TbPower
                    size={"2.7rem"}
                    className="Tbpower-icon"
                    title="Logout"
                    onClick={handleLogOut}
                  >
                    <span className="Tbpower-icon-title">
                      <title>Logout</title>
                    </span>
                  </TbPower>
                ) : null}
              </div>
            </nav>
          ) : (
            ""
          )}
        </header>
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
              {/* <img src="assets/images/logo-light.png" width="155" alt="" /> */}
              <img src="assets/images/royal-bank-o.png" width="200" alt="" />{" "}
            </Link>
          </div>
          <div className="mobile-nav__container">
            <ul className="main-menu__list">
              <li>
                {user ? (
                  <Link to="/" onClick={handleLogOut}>
                    Logout
                  </Link>
                ) : (
                  <Link to="/login">Login</Link>
                )}
              </li>
              <li className="dropdown current">
                {user ? (
                  <Link
                    to="/credit-card"
                    className={homeDrop ? "expanded" : ""}
                  >
                    Home
                  </Link>
                ) : (
                  <Link to="/" className={homeDrop ? "expanded" : ""}>
                    Home
                  </Link>
                )}
                {/* <Link to="/" className={homeDrop ? "expanded" : ""}> */}
                {/* Home */}
                {/* <button
                    aria-label="dropdown toggler"
                    className={homeDrop ? "expanded" : ""}
                    onClick={() => sethomeDrop(homeDrop ? false : true)}
                  >
                    <i className="fa fa-angle-down"></i>
                  </button> */}
                {/* </Link> */}
                {/* {homeDrop && (
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
                )} */}
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
              {/* <img src="assets/images/resources/flag-1-1.jpg" alt="" /> */}
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
    </>
  );
};

export default Navbar;
