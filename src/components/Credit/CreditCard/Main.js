// import PHBG1 from "../../../assets/images/backgrounds/-bg-1-1.jpg";
// import ActionBG1 from "../../../assets/images/backgrounds/call-to-action-bg-1-1.jpg";
import Head from "../../../assets/images/resources/page-header-bg-1-1.8c04a8e8460219ceeae5.jpg";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import secureLocalStorage from "react-secure-storage";

const CreditCard = () => {
  // const user = JSON.parse(secureLocalStorage.getItem("user"));

  const navigate = useNavigate();
  // const history = useHistory();

  const hanldeForm = () => {
    navigate("/creditcardform");
  };

  //for the authenctication it will check the token and see if user is login if it is then it will show creditcardpage
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
          style={{ backgroundImage: `url(${Head})` }}
        ></div>
        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li>
              <Link to="/credit-card">Home</Link>
            </li>
            {/* {user ? (
              <li>
                <Link to="/credit-card">Home</Link>
              </li>
            ) : (
              <li>
                <Link to="/">Home</Link>
              </li>
            )} */}
            <li>/</li>
            <li>
              <span>Credit Card</span>
            </li>
          </ul>
          <h2>Credit Card</h2>
        </div>
      </section>

      <section className="credit-card">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="credit-card__box">
                <div className="credit-card__box-image">
                  <img
                    src="assets/images/credit-card/credit-card-1-1.png"
                    onClick={hanldeForm}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <div className="credit-card__content">
                  {/* <h3><Link to="/credit-card-details">Visa Platinum Card</Link></h3> */}
                  <h3>
                    <Link to="/credit-card-details">Visa Platinum Card</Link>
                  </h3>
                  <p>
                    A Visa Platinum Card is a premium credit card that offers
                    exclusive benefits and perks to its cardholders. These cards
                    typically have higher credit limits
                  </p>
                  <Link to="/creditcardform" className="credit-card__link">
                    <i className="pylon-icon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="credit-card__box">
                <div className="credit-card__box-image">
                  <img
                    src="assets/images/credit-card/credit-card-1-2.png"
                    onClick={hanldeForm}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <div className="credit-card__content">
                  <h3>
                    <Link to="/credit-card-details">Visa Gold Card</Link>
                  </h3>
                  <p>
                    A Visa Gold Card is a premium credit card that offers
                    exclusive benefits and rewards to its cardholders. Similar
                    to the Visa Platinum Card
                  </p>
                  <Link to="/creditcardform" className="credit-card__link">
                    <i className="pylon-icon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="credit-card__box">
                <div className="credit-card__box-image">
                  <img
                    src="assets/images/credit-card/credit-card-1-3.png"
                    onClick={hanldeForm}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <div className="credit-card__content">
                  <h3>
                    <Link to="/credit-card-details">Visa classNameic Card</Link>
                  </h3>
                  <p>
                    A Visa Classic Card is a basic credit card that is widely
                    accepted worldwide.offers a lower credit limit and fewer
                    rewards compared to premium credit cards
                  </p>
                  <Link to="/creditcardform" className="credit-card__link">
                    <i className="pylon-icon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="credit-card__box">
                <div className="credit-card__box-image">
                  <img
                    src="assets/images/credit-card/credit-card-1-4.png"
                    onClick={hanldeForm}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <div className="credit-card__content">
                  <h3>
                    <Link to="/credit-card-details">Titanium Mastercard</Link>
                  </h3>
                  <p>
                    A Titanium Mastercard is a premium credit card that offers
                    exclusive benefits and rewards to its cardholders.
                  </p>
                  <Link to="/creditcardform" className="credit-card__link">
                    <i className="pylon-icon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="credit-card__box">
                <div className="credit-card__box-image">
                  <img
                    src="assets/images/credit-card/credit-card-1-5.png"
                    onClick={hanldeForm}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <div className="credit-card__content">
                  <h3>
                    <Link to="/credit-card-details">Titanium Mastercard</Link>
                  </h3>
                  <p>
                    A Titanium Mastercard is a type of credit card that offers
                    premium benefits and exclusive rewards to its users.
                  </p>
                  <Link to="/creditcardform" className="credit-card__link">
                    <i className="pylon-icon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="credit-card__box">
                <div className="credit-card__box-image">
                  <img
                    src="assets/images/credit-card/credit-card-1-6.png"
                    onClick={hanldeForm}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <div className="credit-card__content">
                  <h3>
                    <Link to="/credit-card-details">Express Card</Link>
                  </h3>
                  <p>
                    The Express Card is a credit card issued by American Express
                    that offers a range of benefits and rewards to cardholders.
                  </p>
                  <Link to="/creditcardform" className="credit-card__link">
                    <i className="pylon-icon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="call-to-action"
        style={{
          backgroundImage: `url(${"https://webdevcode.com/wp/pylon/live/wp-content/uploads/2020/12/funfact-bg-1-1.jpg"})`,
        }}
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
    </>
  );
};

export default CreditCard;
