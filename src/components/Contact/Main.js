import PHBG1 from "../../assets/images/backgrounds/page-header-bg-1-1.jpg";
import { Link } from "react-router-dom";
import React from "react";
import secureLocalStorage from "react-secure-storage";

const Contact = () => {
  // const user = JSON.parse(secureLocalStorage.getItem("user"));
  return (
    <>
      <div className="stricky-header stricked-menu main-menu">
        <div className="sticky-header__content"></div>
      </div>

      <section className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage: `url("https://mediacity.co.in/pylon/static/media/page-header-bg-1-1.8c04a8e8460219ceeae5.jpg")`,
          }}
        ></div>
        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            {/* {user ? (
              <li>
                <Link to="/credit-card">Home</Link>
              </li>
            ) : (
              <li>
                <Link to="/">Home</Link>
              </li>
            )} */}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>/</li>
            <li>
              {/* <span> */}
              Contact
              {/* </span> */}
            </li>
          </ul>
          <h2>Contact</h2>
        </div>
      </section>
      <section className="contact-one">
        <div className="container">
          <div className="block-title text-center">
            <p>Contact With Us</p>
            <h2>Leave a Message</h2>
          </div>
          <div className="row">
            <div className="col-lg-5">
              <div className="contact-one__content">
                <p>
                  There are many variations of but the majority have suffered
                  alteration in some form.
                </p>
                <div className="contact-one__box">
                  <i className="pylon-icon-telephone"></i>
                  <div className="contact-one__box-content">
                    <h4>Call Anytime</h4>
                    <Link to="#">92 666 888 0000</Link>
                  </div>
                </div>
                <div className="contact-one__box">
                  <i className="pylon-icon-email1"></i>
                  <div className="contact-one__box-content">
                    <h4>Write Email</h4>
                    <Link to="#">needhelp@company.com</Link>
                  </div>
                </div>
                <div className="contact-one__box">
                  <i className="pylon-icon-pin1"></i>
                  <div className="contact-one__box-content">
                    <h4>Visit Office</h4>
                    <Link to="#">80 Broklyn Golden Street, USA</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <form
                action="contact-us.php"
                method="post"
                className="contact-one__form"
              >
                <div className="row low-gutters">
                  <div className="col-md-6">
                    <input
                      type="text"
                      placeholder="Your Name"
                      name="name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      placeholder="Your Email"
                      name="email"
                      required
                    />
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
          </div>
        </div>
      </section>
      <div className="google-map__home-two">
        <iframe
          title="template google map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
          className="map__home-two"
          allowFullscreen
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
