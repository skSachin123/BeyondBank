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

  const handleForm = (value) => {
    navigate("/creditcardform", {
      state: {
        cardType: value,
      },
    });
  };

  //for the authenctication it will check the token and see if user is login if it is then it will show creditcardpage
  useEffect(() => {
    const token = secureLocalStorage.getItem("user");
    if (!token) {
      // history.push("/");
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    localStorage.setItem("location", JSON.stringify("Credit Card"));
    window
      .initWebchat(
        "https://endpoint-trial.cognigy.ai/2a7dbd4efa25354aa8b6abb0b637629ee8fcd3aab960523599c5da1e0204f5a5",
        {
          settings: {
            disableBranding: "true",
            designTemplate: "2",
            startBehavior: "injection",
            getStartedText: "",
            getStartedData: {
              session_extref: JSON.parse(
                localStorage.getItem("webChatSessionId")
              ),
              authenticated: "yes",
              location: "Credit Card",
              cardType: "",
              customer_uniqueId: JSON.parse(localStorage.getItem("uniqueId")),
            },
          },
        }
      )
      .then((webchat) => {
        console.log("response of webchat", webchat);
      });
  }, []);

  const creditCardData = [
    {
      image: "assets/images/credit-card/credit-card-1-1.png",
      title: "Visa Platinum Card",
      description:
        " A Visa Platinum Card is a premium credit card that offers exclusive benefits and perks to its cardholders. These cards typically have higher credit limits",
    },
    {
      image: "assets/images/credit-card/credit-card-1-2.png",
      title: "Visa Gold Card",
      description:
        "A Visa Gold Card is a premium credit card that offers exclusive benefits and rewards to its cardholders. Similar to the Visa Platinum Card ",
    },
    {
      image: "assets/images/credit-card/credit-card-1-3.png",
      title: "Visa classNameic Card",
      description:
        " A Visa Classic Card is a basic credit card that is widely accepted worldwide.offers a lower credit limit and fewer rewards compared to premium credit cards",
    },
    {
      image: "assets/images/credit-card/credit-card-1-4.png",
      title: "Titanium Mastercard",
      description:
        " A Titanium Mastercard is a premium credit card that offers exclusive benefits and rewards to its cardholders.",
    },
    {
      image: "assets/images/credit-card/credit-card-1-5.png",
      title: "Titanium Mastercard",
      description:
        "A Titanium Mastercard is a type of credit card that offers premium benefits and exclusive rewards to its users.",
    },
    {
      image: "assets/images/credit-card/credit-card-1-6.png",
      title: "Express Card",
      description:
        " The Express Card is a credit card issued by American Express that offers a range of benefits and rewards to cardholders.",
    },
  ];

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
            {creditCardData?.map((creditcard, i) => (
              <>
                <div className="col-lg-4 col-md-6">
                  <div className="credit-card__box">
                    <div className="credit-card__box-image">
                      <img
                        src={creditcard?.image}
                        onClick={() => handleForm(creditcard?.title)}
                        style={{ cursor: "pointer" }}
                        alt=""
                      />
                    </div>
                    <div className="credit-card__content">
                      <h3>
                        <Link to="/credit-card-details">
                          {creditcard?.title}
                        </Link>
                      </h3>
                      <p>{creditcard?.description}</p>
                      <Link to="/creditcardform" className="credit-card__link">
                        <i className="pylon-icon-right-arrow"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            ))}
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
