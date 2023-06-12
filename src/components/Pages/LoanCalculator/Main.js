import PHBG1 from "../../../assets/images/backgrounds/page-header-bg-1-1.jpg";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const LoanCalculator = () => {
  const [loanAmt, setloanAmt] = useState(0);
  const [loanMonth, setloanMonth] = useState(0);
  const [interestRate, setinterestRate] = useState(0);
  const [emiVal, setEmival] = useState();
  const [TotalVal, setTotalVal] = useState();
  const [slider1, setSlider1] = useState(1000);
  const [slider2, setSlider2] = useState(1);

  useEffect(() => {
    if (slider1 > 0 && slider2 > 0) {
      emiCalculate();
    }
  }, [slider1, slider2]);

  const emiCalculate = () => {
    const interestRate = 15;
    const interestRatePercent = parseInt(interestRate, 10) / 100;
    const totalPay = slider1 * interestRatePercent + parseInt(slider1, 10);
    const monthlyPay = totalPay / parseInt(slider2, 10);

    setEmival(monthlyPay);
    setTotalVal(totalPay);
  };

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
              <span>Loan Calculator</span>
            </li>
          </ul>
          <h2>Loan Calculator</h2>
        </div>
      </section>

      <section className="contact-two">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <form action="#" className="contact-one__form">
                <div className="block-title text-left">
                  <p>Contact With Us</p>
                  <h2>Leave a Message</h2>
                </div>
                <p>
                  There are many variations of passages of available but the
                  majority have suffered alteration in some form.
                </p>
                <div className="row low-gutters">
                  <div className="col-md-6">
                    <input type="text" placeholder="Your Name" name="name" />
                  </div>
                  <div className="col-md-6">
                    <input type="text" placeholder="Your Email" name="email" />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      name="phone"
                    />
                  </div>
                  <div className="col-md-6">
                    <input type="text" placeholder="Subject" name="subject" />
                  </div>
                  <div className="col-md-12">
                    <textarea
                      name="message"
                      placeholder="Write Message"
                    ></textarea>
                    <button className="thm-btn" type="submit">
                      Send A Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6">
              <form
                action="#"
                id="loan-calculator"
                data-interest-rate="15"
                className="about-one__form wow fadeInRight"
                data-wow-duration="1500ms"
              >
                <h3>How Much You Need</h3>
                <div className="about-one__form-content">
                  <div className="input-box__top">
                    <span>$1000</span>
                    <span>$40000</span>
                  </div>
                  <div className="input-box">
                    <div className="range-slider-count" id="range-slider-count">
                      <input
                        type="range"
                        className="w-100"
                        min="1000"
                        max="40000"
                        value={slider1}
                        onChange={(e) => setSlider1(e.target.value)}
                      />
                    </div>
                    <span>{slider1}</span>
                    <input
                      type="hidden"
                      value=""
                      id="min-value-rangeslider-count"
                    />
                    <input
                      type="hidden"
                      value=""
                      id="max-value-rangeslider-count"
                    />
                  </div>
                  <div className="input-box__top">
                    <span>1 Month</span>
                    <span>12 Months</span>
                  </div>
                  <div className="input-box">
                    <div className="range-slider-month" id="range-slider-month">
                      <input
                        type="range"
                        className="w-100"
                        min="1"
                        max="12"
                        value={slider2}
                        onChange={(e) => setSlider2(e.target.value)}
                      />
                    </div>
                    <span>{slider2}</span>
                    <input
                      type="hidden"
                      value=""
                      id="min-value-rangeslider-month"
                    />
                    <input
                      type="hidden"
                      value=""
                      id="max-value-rangeslider-month"
                    />
                  </div>
                  <p>
                    <span>Pay Monthly</span>
                    <b>
                      $<i id="loan-monthly-pay">{emiVal}</i>
                    </b>
                  </p>
                  <p>
                    <span>Term of Use</span>
                    <b>
                      <i id="loan-month">{slider2}</i> Months
                    </b>
                  </p>
                  <p>
                    <span>Total Pay Back</span>
                    <b>
                      $<i id="loan-total">{TotalVal}</i>
                    </b>
                  </p>
                  <button type="submit" className="thm-btn">
                    Apply For Loan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoanCalculator;
