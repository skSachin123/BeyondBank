import PHBG1 from "../../../assets/images/backgrounds/page-header-bg-1-1.jpg";
import { Link } from "react-router-dom";
import React from "react";

const Team = () => {
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
              <span>Team Members</span>
            </li>
          </ul>
          <h2>Team Members</h2>
        </div>
      </section>

      <section className="team-page pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="team-one__card mb-30">
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
                  <h3>Willie Ray</h3>
                  <span>Expert Agent</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="team-one__card mb-30">
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
                  <h3>Carlos Bailey</h3>
                  <span>Expert Agent</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="team-one__card mb-30">
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
                  <h3>Sallie Grant</h3>
                  <span>Expert Agent</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="team-one__card mb-30">
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
                  <h3>Hallie Moss</h3>
                  <span>Expert Agent</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="team-one__card mb-30">
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
                  <h3>Bobby Jenkins</h3>
                  <span>Expert Agent</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="team-one__card mb-30">
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
                  <h3>Nina Oliver</h3>
                  <span>Expert Agent</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
