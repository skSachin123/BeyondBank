import PHBG1 from "../../../assets/images/backgrounds/page-header-bg-1-1.jpg";
import { Link } from "react-router-dom";
import React from "react";

const NewsDetails = () => {
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
              <span>News Details</span>
            </li>
          </ul>
          <h2>News Details</h2>
        </div>
      </section>

      <section className="blog-details pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-card__image">
                <span>20 Sep</span>
                <img src="assets/images/blog/blog-d-1-1.jpg" alt="" />
              </div>
              <div className="blog-card__meta">
                <Link to="#">
                  <i className="fa fa-tags"></i>Loan
                </Link>
                <Link to="#">
                  <i className="fa fa-comments"></i>2 Comments
                </Link>
              </div>
              <div className="blog-details__content">
                <h3>Changing & grow your business faster</h3>
                <p>
                  Lorem ipsum dolor sit amet, conse ctetur adipisicing elit sed
                  do eiusm od tempor ut labore. Proin gravida nibh vel velit
                  auctor aliquet. Aenean sollicitudin, lorem quis bibendum
                  auctornisi elit consequat ipsum. Lorem ipsum is simply free
                  text used by copytyping refreshing. Neque porro est qui
                  dolorem ipsum quia quaed inventore veritatis et quasi
                  architecto beatae vitae dicta sunt explicabo. Aelltes port
                  lacus quis enim var sed efficitur turpis gilla sed sit amet
                  finibus eros. Lorem Ipsum is simply dummy text of the printing
                  and typesetting industry. Lorem Ipsum has been the ndustry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries. Lorem
                  Ipsum is simply dummy text of the new design printng and type
                  setting Ipsum Take a look at our round up of the best shows
                  coming soon to your telly box has been the is industrys. Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has industr standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of.
                </p>

                <p>
                  Neque porro est qui dolorem ipsum quia quaed inventore
                  veritatis et quasi architecto beatae vitae dicta sunt
                  explicabo. Aelltes port lacus quis enim var sed efficitur
                  turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply
                  dummy text of the printing.
                </p>
              </div>
              <div className="blog-details__bottom">
                <div className="blog-details__tags">
                  <span>Tags:</span>
                  <Link to="#">Mortage,</Link>
                  <Link to="#">Car Loan,</Link>
                  <Link to="#">Businsess</Link>
                </div>
                <div className="blog-details__social team-details__social">
                  <Link to="#" className="fab fa-facebook-square"></Link>
                  <Link to="#" className="fab fa-twitter"></Link>
                  <Link to="#" className="fab fa-pinterest-p"></Link>
                  <Link to="#" className="fab fa-instagram"></Link>
                </div>
              </div>
              <div className="blog-details__author">
                <img src="assets/images/blog/author-1-1.jpg" alt="" />
                <div className="blog-details__author-content">
                  <h3>Christine Eve</h3>
                  <p>
                    Lorem ipsum is simply free text used by copytyping
                    refreshing. Neque porro est qui dolorem ipsum quia quaed
                    veritatis et quasi architecto.
                  </p>
                </div>
              </div>
              <div className="blog-comment">
                <h2 className="blog-details__box-title">2 Comments</h2>
                <div className="blog-comment__box">
                  <img src="assets/images/blog/comment-1-1.png" alt="" />
                  <div className="blog-comment__box-content">
                    <div className="blog-comment__box-top">
                      <h3>David Cooper</h3>
                      <span>20 Oct, 2020</span>
                      <Link to="#" className="thm-btn">
                        Reply
                      </Link>
                    </div>
                    <p>
                      Lorem ipsum is simply free text used by copytyping
                      refreshing. Neque porro est qui dolorem ipsum quia quaed
                      inventore veritatis et quasi architecto beatae vitae dicta
                      sunt explicabo.
                    </p>
                  </div>
                </div>
                <div className="blog-comment__box">
                  <img src="assets/images/blog/comment-1-2.png" alt="" />
                  <div className="blog-comment__box-content">
                    <div className="blog-comment__box-top">
                      <h3>Shane Clayton</h3>
                      <span>20 Oct, 2020</span>
                      <Link to="#" className="thm-btn">
                        Reply
                      </Link>
                    </div>
                    <p>
                      Lorem ipsum is simply free text used by copytyping
                      refreshing. Neque porro est qui dolorem ipsum quia quaed
                      inventore veritatis et quasi architecto beatae vitae dicta
                      sunt explicabo.
                    </p>
                  </div>
                </div>
              </div>
              <div className="blog-comment-form">
                <h2 className="blog-details__box-title">Leave a Comment</h2>
                <form action="#" className="contact-one__form">
                  <div className="row low-gutters">
                    <div className="col-md-6">
                      <input type="text" placeholder="Your Name" name="name" />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        placeholder="Your Email"
                        name="email"
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
            <div className="col-lg-4">
              <div className="blog-sidebar">
                <div className="blog-sidebar__box blog-sidebar__search">
                  <input type="text" placeholder="Search" />
                  <button type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
                <div className="blog-sidebar__box blog-sidebar__post">
                  <h3 className="blog-sidebar__box-title">Recent Posts</h3>
                  <ul className="list-unstyled footer-widget__post-list">
                    <li>
                      <img src="assets/images/blog/lp-1-1.png" alt="" />
                      <div className="footer-widget__post-list-content">
                        <span>16 Oct, 2020</span>
                        <h3>
                          <Link to="/news-details">
                            We’re Providing the Quality Services
                          </Link>
                        </h3>
                      </div>
                    </li>
                    <li>
                      <img src="assets/images/blog/lp-1-2.png" alt="" />
                      <div className="footer-widget__post-list-content">
                        <span>16 Oct, 2020</span>
                        <h3>
                          <Link to="/news-details">
                            We’re Providing the Quality Services
                          </Link>
                        </h3>
                      </div>
                    </li>
                    <li>
                      <img src="assets/images/blog/lp-1-3.png" alt="" />
                      <div className="footer-widget__post-list-content">
                        <span>16 Oct, 2020</span>
                        <h3>
                          <Link to="/news-details">
                            We’re Providing the Quality Services
                          </Link>
                        </h3>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="blog-sidebar__box blog-sidebar__category service-sidebar__category">
                  <h3 className="blog-sidebar__box-title">All Categories</h3>
                  <ul className="list-unstyled service-sidebar__category-list">
                    <li>
                      <Link to="#">Personal Loan</Link>
                    </li>
                    <li>
                      <Link to="#">Education Loan</Link>
                    </li>
                    <li>
                      <Link to="#">Business Loan</Link>
                    </li>
                    <li>
                      <Link to="#">Property Loan</Link>
                    </li>
                    <li>
                      <Link to="#">Wedding Loan</Link>
                    </li>
                    <li>
                      <Link to="#">Car Loan</Link>
                    </li>
                  </ul>
                </div>
                <div className="blog-sidebar__box blog-sidebar__tags">
                  <h3 className="blog-sidebar__box-title">Tags</h3>
                  <ul className="list-unstyled blog-sidebar__tags-list">
                    <li>
                      <Link to="#">Mortage,</Link>
                    </li>
                    <li>
                      <Link to="#">Business,</Link>
                    </li>
                    <li>
                      <Link to="#">Financial,</Link>
                    </li>
                    <li>
                      <Link to="#">Car Loan,</Link>
                    </li>
                    <li>
                      <Link to="#">Banking,</Link>
                    </li>
                    <li>
                      <Link to="#">Business Loans,</Link>
                    </li>
                    <li>
                      <Link to="#">Profits,</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsDetails;
