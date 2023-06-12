import PHBG1 from "../../../assets/images/backgrounds/page-header-bg-1-1.jpg";
import { Link } from "react-router-dom";
import React from "react";

const Testimonial = () => {
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
              <span>Testimonials</span>
            </li>
          </ul>
          <h2>Testimonials</h2>
        </div>
      </section>

      <section className="testimonials-page pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 ">
              <div className="testimonials-one__box">
                <p>
                  <span>
                    I was very impresed by the company service lore ipsum is
                    simply free text used by copy typing refreshing. Neque porro
                    est dolorem ipsum quia.
                  </span>
                </p>
                <div className="testimonials-one__box-info">
                  <img
                    src="assets/images/resources/testimonials-1-1.png"
                    alt=""
                  />
                  <h3>Ethel Collier</h3>
                  <span>Analytics</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 ">
              <div className="testimonials-one__box">
                <p>
                  <span>
                    I was very impresed by the company service lore ipsum is
                    simply free text used by copy typing refreshing. Neque porro
                    est dolorem ipsum quia.
                  </span>
                </p>
                <div className="testimonials-one__box-info">
                  <img
                    src="assets/images/resources/testimonials-1-2.png"
                    alt=""
                  />
                  <h3>Frances Gross</h3>
                  <span>Analytics</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 ">
              <div className="testimonials-one__box">
                <p>
                  <span>
                    I was very impresed by the company service lore ipsum is
                    simply free text used by copy typing refreshing. Neque porro
                    est dolorem ipsum quia.
                  </span>
                </p>
                <div className="testimonials-one__box-info">
                  <img
                    src="assets/images/resources/testimonials-1-3.png"
                    alt=""
                  />
                  <h3>Mayme Lowe</h3>
                  <span>Analytics</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 ">
              <div className="testimonials-one__box">
                <p>
                  <span>
                    I was very impresed by the company service lore ipsum is
                    simply free text used by copy typing refreshing. Neque porro
                    est dolorem ipsum quia.
                  </span>
                </p>
                <div className="testimonials-one__box-info">
                  <img
                    src="assets/images/resources/testimonials-1-4.png"
                    alt=""
                  />
                  <h3>James Garrett</h3>
                  <span>Analytics</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 ">
              <div className="testimonials-one__box">
                <p>
                  <span>
                    I was very impresed by the company service lore ipsum is
                    simply free text used by copy typing refreshing. Neque porro
                    est dolorem ipsum quia.
                  </span>
                </p>
                <div className="testimonials-one__box-info">
                  <img
                    src="assets/images/resources/testimonials-1-5.png"
                    alt=""
                  />
                  <h3>Mina McCoy</h3>
                  <span>Analytics</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 ">
              <div className="testimonials-one__box">
                <p>
                  <span>
                    I was very impresed by the company service lore ipsum is
                    simply free text used by copy typing refreshing. Neque porro
                    est dolorem ipsum quia.
                  </span>
                </p>
                <div className="testimonials-one__box-info">
                  <img
                    src="assets/images/resources/testimonials-1-6.png"
                    alt=""
                  />
                  <h3>Estelle Carr</h3>
                  <span>Analytics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
