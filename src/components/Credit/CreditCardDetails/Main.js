import PHBG1 from "../../../assets/images/resources/page-header-bg-1-1.8c04a8e8460219ceeae5.jpg";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import secureLocalStorage from "react-secure-storage";

const CreditCardDeatils = () => {
  const navigate = useNavigate();
  //for the authenctication it will check the token and see if user is login if it is then it will show creditcarddetailpage
  useEffect(() => {
    const token = secureLocalStorage.getItem("user");
    if (!token) {
      // history.push("/");
      navigate("/");
    }
  }, [navigate]);
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
              <Link to="/credit-card">Home</Link>
            </li>
            <li>/</li>
            <li>
              <span>Credit Card Details</span>
            </li>
          </ul>
          <h2>Credit Card Details</h2>
        </div>
      </section>

      <section className="about-two credit-card__details">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 wow fadeInLeft" data-wow-duration="1500ms">
              <div className="about-two__image">
                <img
                  src="assets/images/credit-card/credit-card-d-1-5.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-two__content">
                <div className="block-title text-left">
                  <p>Visa Gold Card</p>
                  <h2>Visa Gold Card, More Than Just a Card!</h2>
                </div>
                <p>
                  A Visa Gold Card is a premium credit card that offers
                  exclusive benefits and rewards to its cardholders. Similar to
                  the Visa Platinum Card, the Visa Gold Card comes with a higher
                  credit limit, lower interest rates, and more rewards than
                  standard credit cards.
                </p>
                <ul className="list-unstyled about-two__list">
                  <li>
                    <i className="fa fa-check-circle"></i>
                    Visa Gold Card Shopping Offers
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i>
                    Rewards Points on International Spending
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i>
                    3% Cashback at Electronics Outlets
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i>
                    Purchase Fuel or Car Servicing at Any Fuel Outlet
                  </li>
                </ul>
                <div className="button-wrap">
                  <Link to="/creditcardform" className="thm-btn">
                    Apply For Card
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

      <section className="feature-three">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="feature-three__box">
                <div className="feature-three__box-inner">
                  <i className="pylon-icon-internet"></i>
                  <h3>
                    <Link to="#">Global Acceptability</Link>
                  </h3>
                  {/* <p>There many variation of pasages of lorem sum available.</p> */}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature-three__box">
                <div className="feature-three__box-inner">
                  <i className="pylon-icon-buying"></i>
                  <h3>
                    <Link to="#">Buy Now Pay Later</Link>
                  </h3>
                  {/* <p>There many variation of pasages of lorem sum available.</p> */}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature-three__box">
                <div className="feature-three__box-inner">
                  <i className="pylon-icon-online-payment"></i>
                  <h3>
                    <Link to="#">SMS & Internet Banking</Link>
                  </h3>
                  {/* <p>There many variation of pasages of lorem sum available.</p> */}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature-three__box">
                <div className="feature-three__box-inner">
                  <i className="pylon-icon-call-center"></i>
                  <h3>
                    <Link to="#">24/7 Customer Support</Link>
                  </h3>
                  {/* <p>There many variation of pasages of lorem sum available.</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreditCardDeatils;
