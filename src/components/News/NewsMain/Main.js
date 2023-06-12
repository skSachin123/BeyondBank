import PHBG1 from "../../../assets/images/backgrounds/page-header-bg-1-1.jpg";
import { Link } from "react-router-dom";
import React from "react";

const NewsMain = () => {
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
              <span>News</span>
            </li>
          </ul>
          <h2>News</h2>
        </div>
      </section>

      <section className="blog-page pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-30">
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
            <div className="col-lg-4 col-md-6 mb-30">
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
                    <img src="assets/images/blog/blog-author-1-1.png" alt="" />
                    Christine Eve
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-30">
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
                    <img src="assets/images/blog/blog-author-1-1.png" alt="" />
                    Christine Eve
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-30">
              <div className="blog-card">
                <div className="blog-card__image">
                  <span>20 Sep</span>
                  <img src="assets/images/blog/blog-1-4.png" alt="" />
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
            <div className="col-lg-4 col-md-6 mb-30">
              <div className="blog-card">
                <div className="blog-card__image">
                  <span>20 Sep</span>
                  <img src="assets/images/blog/blog-1-5.png" alt="" />
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
            <div className="col-lg-4 col-md-6 mb-30">
              <div className="blog-card">
                <div className="blog-card__image">
                  <span>20 Sep</span>
                  <img src="assets/images/blog/blog-1-6.png" alt="" />
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
          </div>
          <ul className="list-unstyled post-pagination d-flex justify-content-center align-items-center">
            <li>
              <Link to="#">
                <i className="far fa-angle-left"></i>
              </Link>
            </li>
            <li>
              <Link to="#">01</Link>
            </li>
            <li>
              <Link to="#">02</Link>
            </li>
            <li>
              <Link to="#">03</Link>
            </li>
            <li>
              <Link to="#">
                <i className="far fa-angle-right"></i>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default NewsMain;
