// import BGPH1 from '../../assets/images/main-slider/main-slider-1-1.jpg'
// import BGPH2 from '../../assets/images/main-slider/main-slider-1-2.jpg'
// import TrustBG1 from '../../assets/images/shapes/trust-bg-1-1.png'
// import FunFactBG1 from '../../assets/images/backgrounds/funfact-bg-1-1.jpg'
// import ActionBG1 from '../../assets/images/backgrounds/call-to-action-bg-1-1.jpg'
// import AnimatedNumber from "animated-number-react"
// import { Navigation, Autoplay , Pagination } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Link }  from 'react-router-dom'
// import React ,{ useState , useEffect } from 'react'

// const Main = () => {
//     const [loanAmt, setloanAmt] = useState(0)
//     const [loanMonth, setloanMonth] = useState(0)
//     const [interestRate, setinterestRate] = useState(0)
//     const [emiVal, setEmival] = useState()
//     const [TotalVal, setTotalVal] = useState()
//     const [slider1, setSlider1] = useState(1000)
//     const [slider2, setSlider2] = useState(1)

//     useEffect(() => {
//         if (slider1 > 0 && slider2 > 0) {
//             emiCalculate()
//         }
//     }, [slider1, slider2])

//     const emiCalculate = () => {
//         const interestRate = 15;
//         const interestRatePercent = parseInt(interestRate, 10) / 100;
//         const totalPay = slider1 * interestRatePercent + parseInt(slider1, 10);
//         const monthlyPay = totalPay / parseInt(slider2,10);

//         setEmival(monthlyPay)
//         setTotalVal(totalPay)

//     }

//   return (
//     <>

//         <div className="stricky-header stricked-menu main-menu">
//             <div className="sticky-header__content"></div>
//         </div>

//         <section className="main-slider">
//             <Swiper
//                 className="swiper-container thm-swiper__slider"
//                 modules={[Navigation, Autoplay]}
//                 slidesPerView={1}
//                 loop={true}
//                 navigation={{
//                     nextEl: "#main-slider__swiper-button-next",
//                     prevEl: "#main-slider__swiper-button-prev"
//                 }}
//                 autoplay={{delay:5000}}
//                 >
//                 <div className="swiper-wrapper">
//                     <SwiperSlide>
//                     <div className="swiper-slide">
//                         <div className="image-layer" style={{ backgroundImage: `url(${BGPH1})`}}></div>
//                         <div className="container">
//                             <div className="row">
//                                 <div className="col-xl-6 col-lg-6">
//                                     <p>Simple & Secure Payment Process</p>
//                                     <h2>Connecting
//                                         All Your Loan
//                                         Needs</h2>
//                                     <Link to="#" className=" thm-btn">Apply For Loan</Link>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     </SwiperSlide>
//                     <SwiperSlide>
//                     <div className="swiper-slide">
//                         <div className="image-layer" style={{ backgroundImage: `url(${BGPH2})`}}></div>
//                         <div className="container">
//                             <div className="row">
//                                 <div className="col-xl-6 col-lg-6">
//                                     <p>Simple & Secure Payment Process</p>
//                                     <h2>Connecting
//                                         All Your Loan
//                                         Needs</h2>
//                                     <Link to="#" className=" thm-btn">Apply For Loan</Link>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     </SwiperSlide>
//                     <SwiperSlide>
//                     <div className="swiper-slide">
//                         <div className="image-layer" style={{ backgroundImage: `url(${BGPH1})`}}></div>
//                         <div className="container">
//                             <div className="row">
//                                 <div className="col-xl-6 col-lg-6">
//                                     <p>Simple & Secure Payment Process</p>
//                                     <h2>Connecting
//                                         All Your Loan
//                                         Needs</h2>
//                                     <Link to="#" className=" thm-btn">Apply For Loan</Link>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     </SwiperSlide>
//                 </div>

//                 <div className="main-slider__nav">
//                     <div className="swiper-button-prev" id="main-slider__swiper-button-next"><i className="pylon-icon-left-arrow"></i></div>
//                     <div className="swiper-button-next" id="main-slider__swiper-button-prev"><i className="pylon-icon-right-arrow"></i></div>
//                 </div>

//             </Swiper>
//             <div className="feature-two">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-duration="1500ms">
//                             <div className="feature-two__box">
//                                 <i className="pylon-icon-consumer-behavior"></i>
//                                 <p>Quick Payment
//                                     Process</p>
//                             </div>
//                         </div>
//                         <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-duration="1500ms">
//                             <div className="feature-two__box">
//                                 <i className="pylon-icon-point-of-sale"></i>
//                                 <p>No Prepayment
//                                     Fees</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>

//         <section className="about-one">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-6">
//                         <div className="about-one__content">
//                             <div className="block-title text-left">
//                                 <p>Company Introductions</p>
//                                 <h2>Our Loans will Fill Your Dreams</h2>
//                             </div>
//                             <p className="about-one__text">Lorem ipsum is simply dolor sit amet, consectetur adipisicing text elit.</p>
//                             <p>There are many variations of passages of lorem ipsum available the majority have suffered alteration in some form by injected humour. Duis aute irure dolor lipsum is simply free text available in the local markets in reprehenderit.</p>
//                         </div>
//                     </div>
//                     <div className="col-lg-6">
//                         <form action="#" id="loan-calculator" data-interest-rate="15" className="about-one__form wow fadeInRight" data-wow-duration="1500ms">
//                             <h3>How Much You Need</h3>
//                             <div className="about-one__form-content">
//                                 <div className="input-box__top">
//                                     <span>$1000</span>
//                                     <span>$40000</span>
//                                 </div>
//                                 <div className="input-box">
//                                     <div className="range-slider-count" id="range-slider-count">
//                                     <input type="range" className="w-100" min="1000" max="40000" value={slider1} onChange={(e)=>setSlider1(e.target.value)}/>
//                                     </div>
//                                     <span>{slider1}</span>
//                                     <input type="hidden" value="" id="min-value-rangeslider-count" />
//                                     <input type="hidden" value="" id="max-value-rangeslider-count" />
//                                 </div>
//                                 <div className="input-box__top">
//                                     <span>1 Month</span>
//                                     <span>12 Months</span>
//                                 </div>
//                                 <div className="input-box">
//                                     <div className="range-slider-month" id="range-slider-month">
//                                     <input type="range" className="w-100" min="1" max="12" value={slider2} onChange={(e)=>setSlider2(e.target.value)}/>
//                                     </div>
//                                     <span>{slider2}</span>
//                                     <input type="hidden" value="" id="min-value-rangeslider-month" />
//                                     <input type="hidden" value="" id="max-value-rangeslider-month" />
//                                 </div>
//                                 <p>
//                                     <span>Pay Monthly</span>
//                                     <b>$<i id="loan-monthly-pay">{emiVal}</i></b>
//                                 </p>
//                                 <p>
//                                     <span>Term of Use</span>
//                                     <b><i id="loan-month">{slider2}</i> Months</b>
//                                 </p>
//                                 <p>
//                                     <span>Total Pay Back</span>
//                                     <b>$<i id="loan-total">{TotalVal}</i></b>
//                                 </p>
//                                 <button type="submit" className="thm-btn">Apply For Loan</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </section>

//         <section className="service-one">
//             <div className="container">
//                 <div className="block-title text-center">
//                     <p>What We’re Offering</p>
//                     <h2>All Loans Services</h2>
//                 </div>
//                 <div className="row">
//                     <div className="col-lg-4">
//                         <div className="service-one__card">
//                             <div className="service-one__image">
//                                 <img src="assets/images/services/services-1-1.png" alt="" />
//                             </div>
//                             <div className="service-one__content">
//                                 <h3><Link to="/servicedetails">Personal Loan</Link></h3>
//                                 <p>There are many variations of passages of lorem ipsum available the majority have some.</p>
//                                 <Link to="/servicedetails" className="pylon-icon-right-arrow service-one__link"></Link>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-4">
//                         <div className="service-one__card">
//                             <div className="service-one__image">
//                                 <img src="assets/images/services/services-1-2.png" alt="" />
//                             </div>
//                             <div className="service-one__content">
//                                 <h3><Link to="/servicedetails">Education Loan</Link></h3>
//                                 <p>There are many variations of passages of lorem ipsum available the majority have some.</p>
//                                 <Link to="/servicedetails" className="pylon-icon-right-arrow service-one__link"></Link>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-4">
//                         <div className="service-one__card">
//                             <div className="service-one__image">
//                                 <img src="assets/images/services/services-1-3.png" alt="" />
//                             </div>
//                             <div className="service-one__content">
//                                 <h3><Link to="/servicedetails">Business Loan</Link></h3>
//                                 <p>There are many variations of passages of lorem ipsum available the majority have some.</p>
//                                 <Link to="/servicedetails" className="pylon-icon-right-arrow service-one__link"></Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>

//         <section className="feature-one">
//             <img src="assets/images/shapes/feature-shape-1-1.png" alt="" className="feature-one__shape-1" />
//             <img src="assets/images/shapes/feature-shape-1-2.png" alt="" className="feature-one__shape-2" />
//             <img src="assets/images/shapes/feature-shape-1-3.png" alt="" className="feature-one__shape-3" />
//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-6">
//                         <div className="block-title text-left">
//                             <p>Get to Know About</p>
//                             <h2>Flexible and Quick Business Loans</h2>
//                         </div>
//                     </div>
//                     <div className="col-lg-6">
//                         <p className="block-text">There are many variations of passages of available but the majority have suffered alteration in some form, by injected humou or randomised words which don't look even slightly believable.</p>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-lg-4">
//                         <div className="feature-one__box">
//                             <i className="pylon-icon-assets"></i>
//                             <p>Very Low Rates on
//                                 All Loans</p>
//                         </div>
//                     </div>
//                     <div className="col-lg-4">
//                         <div className="feature-one__box">
//                             <i className="pylon-icon-verification"></i>
//                             <p>99.9% Success Rate
//                                 Guarantee</p>
//                         </div>
//                     </div>
//                     <div className="col-lg-4">
//                         <div className="feature-one__box">
//                             <i className="pylon-icon-finance"></i>
//                             <p>Flexible with Your
//                                 Repayments</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>

//         <section className="trusted-company">
//             <div className="trusted-company__bg" style={{ backgroundImage: `url(${TrustBG1})`}}></div>
//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-6">
//                         <div className="trusted-company__content">
//                             <div className="block-title text-left">
//                                 <p>Trusted Company</p>
//                                 <h2>Most of the People Trust on Us</h2>
//                             </div>
//                             <div className="trusted-company__image">
//                                 <img src="assets/images/resources/trust-1-1.png" alt="" />
//                                 <p>There are many variations of passages of lorem ipsum available the majority have suffered alteration in some form by injected humour. Duis aute irure dolor lipsum is simply.</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-6">
//                         <div className="trusted-company__box-wrap">
//                             <div className="trusted-company__box">
//                                 <span>01</span>
//                                 <p>Solutions for small business
//                                     and big companies</p>
//                             </div>
//                             <div className="trusted-company__box">
//                                 <span>02</span>
//                                 <p>Take our loans and pay for
//                                     your studies</p>
//                             </div>
//                             <div className="trusted-company__box">
//                                 <span>03</span>
//                                 <p>Get special loans for more
//                                     needs in 2 hours</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>

//         <section className="funfact-one">
//             <div className="funfact-one__bg" style={{ backgroundImage: `url(${FunFactBG1})`}}></div>
//             <div className="container">
//                 <div className="row">
//                     <div className="col-md-6 col-lg-3">
//                         <div className="funfact-one__box">
//                             <h3><span className="odometer" data-count="99"><AnimatedNumber value={99} duration={9000} formatValue={(v) => Math.round(v)} /></span>%</h3>
//                             <p>We Approve Loans</p>
//                         </div>
//                     </div>
//                     <div className="col-md-6 col-lg-3">
//                         <div className="funfact-one__box">
//                             <h3>$<span className="odometer" data-count="90"><AnimatedNumber value={90} duration={9000} formatValue={(v) => Math.round(v)} /></span>k</h3>
//                             <p>Daily Payments</p>
//                         </div>
//                     </div>
//                     <div className="col-md-6 col-lg-3">
//                         <div className="funfact-one__box">
//                             <h3><span className="odometer" data-count="8900"><AnimatedNumber value={8900} duration={9000} formatValue={(v) => Math.round(v)} /></span></h3>
//                             <p>Happy Customers</p>
//                         </div>
//                     </div>
//                     <div className="col-md-6 col-lg-3">
//                         <div className="funfact-one__box">
//                             <h3><span className="odometer" data-count="346"><AnimatedNumber value={346} duration={9000} formatValue={(v) => Math.round(v)} /></span></h3>
//                             <p>Staff Members</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>

//         <section className="testimonials-one">
//             <div className="container">
//                 <div className="block-title text-center">
//                     <p>Customers Testimonials</p>
//                     <h2>Customers Testimonials</h2>
//                 </div>
//                 <Swiper className="thm-swiper__slider swiper-container"
//                     modules={[ Pagination, Autoplay]}
//                     spaceBetween={0}
//                     slidesPerView={1}
//                     loop={true}
//                     autoplay={{delay:5000}}
//                     pagination={{
//                         el: '.testimonials-one__swiper-pagination',
//                         type: 'bullets',
//                         clickable: true

//                     }}
//                     breakpoints={{
//                         "376": {
//                             "spaceBetween": 30,
//                             "slidesPerView": 1,
//                             "slidesPerGroup": 1
//                         },
//                         "576": {
//                             "spaceBetween": 30,
//                             "slidesPerView": 1,
//                             "slidesPerGroup": 1
//                         },
//                         "768": {
//                             "spaceBetween": 30,
//                             "slidesPerView": 2,
//                             "slidesPerGroup": 2
//                         },
//                         "992": {
//                             "spaceBetween": 30,
//                             "slidesPerView": 3,
//                             "slidesPerGroup": 3
//                         },
//                         "1200": {
//                             "spaceBetween": 30,
//                             "slidesPerView": 3,
//                             "slidesPerGroup": 3
//                         }

//                         }}
//                     >
//                     <div className="swiper-wrapper">
//                         <SwiperSlide>
//                         <div className="swiper-slide">
//                             <div className="testimonials-one__box">
//                                 <p><span>I was very impresed by the company service lore ipsum is simply free text used by copy typing refreshing. Neque porro est dolorem ipsum quia.</span></p>
//                                 <div className="testimonials-one__box-info">
//                                     <img src="assets/images/resources/testimonials-1-1.png" alt="" />
//                                     <h3>Clyde Williamson</h3>
//                                     <span>Analytics</span>
//                                 </div>
//                             </div>
//                         </div>
//                         </SwiperSlide>
//                         <SwiperSlide>
//                         <div className="swiper-slide">
//                             <div className="testimonials-one__box">
//                                 <p><span>I was very impresed by the company service lore ipsum is simply free text used by copy typing refreshing. Neque porro est dolorem ipsum quia.</span></p>
//                                 <div className="testimonials-one__box-info">
//                                     <img src="assets/images/resources/testimonials-1-2.png" alt="" />
//                                     <h3>Vernon Ray</h3>
//                                     <span>Analytics</span>
//                                 </div>
//                             </div>
//                         </div>
//                         </SwiperSlide>
//                         <SwiperSlide>
//                         <div className="swiper-slide">
//                             <div className="testimonials-one__box">
//                                 <p><span>I was very impresed by the company service lore ipsum is simply free text used by copy typing refreshing. Neque porro est dolorem ipsum quia.</span></p>
//                                 <div className="testimonials-one__box-info">
//                                     <img src="assets/images/resources/testimonials-1-3.png" alt="" />
//                                     <h3>Gary Dawson</h3>
//                                     <span>Analytics</span>
//                                 </div>
//                             </div>
//                         </div>
//                         </SwiperSlide>
//                         <SwiperSlide>
//                         <div className="swiper-slide">
//                             <div className="testimonials-one__box">
//                                 <p><span>I was very impresed by the company service lore ipsum is simply free text used by copy typing refreshing. Neque porro est dolorem ipsum quia.</span></p>
//                                 <div className="testimonials-one__box-info">
//                                     <img src="assets/images/resources/testimonials-1-1.png" alt="" />
//                                     <h3>Clyde Williamson</h3>
//                                     <span>Analytics</span>
//                                 </div>
//                             </div>
//                         </div>
//                         </SwiperSlide>
//                         <SwiperSlide>
//                         <div className="swiper-slide">
//                             <div className="testimonials-one__box">
//                                 <p><span>I was very impresed by the company service lore ipsum is simply free text used by copy typing refreshing. Neque porro est dolorem ipsum quia.</span></p>
//                                 <div className="testimonials-one__box-info">
//                                     <img src="assets/images/resources/testimonials-1-2.png" alt="" />
//                                     <h3>Vernon Ray</h3>
//                                     <span>Analytics</span>
//                                 </div>
//                             </div>
//                         </div>
//                         </SwiperSlide>
//                         <SwiperSlide>
//                         <div className="swiper-slide">
//                             <div className="testimonials-one__box">
//                                 <p><span>I was very impresed by the company service lore ipsum is simply free text used by copy typing refreshing. Neque porro est dolorem ipsum quia.</span></p>
//                                 <div className="testimonials-one__box-info">
//                                     <img src="assets/images/resources/testimonials-1-3.png" alt="" />
//                                     <h3>Gary Dawson</h3>
//                                     <span>Analytics</span>
//                                 </div>
//                             </div>
//                         </div>
//                         </SwiperSlide>
//                         <SwiperSlide>
//                         <div className="swiper-slide">
//                             <div className="testimonials-one__box">
//                                 <p><span>I was very impresed by the company service lore ipsum is simply free text used by copy typing refreshing. Neque porro est dolorem ipsum quia.</span></p>
//                                 <div className="testimonials-one__box-info">
//                                     <img src="assets/images/resources/testimonials-1-1.png" alt="" />
//                                     <h3>Clyde Williamson</h3>
//                                     <span>Analytics</span>
//                                 </div>
//                             </div>
//                         </div>
//                         </SwiperSlide>
//                         <SwiperSlide>
//                         <div className="swiper-slide">
//                             <div className="testimonials-one__box">
//                                 <p><span>I was very impresed by the company service lore ipsum is simply free text used by copy typing refreshing. Neque porro est dolorem ipsum quia.</span></p>
//                                 <div className="testimonials-one__box-info">
//                                     <img src="assets/images/resources/testimonials-1-2.png" alt="" />
//                                     <h3>Vernon Ray</h3>
//                                     <span>Analytics</span>
//                                 </div>
//                             </div>
//                         </div>
//                         </SwiperSlide>
//                         <SwiperSlide>
//                         <div className="swiper-slide">
//                             <div className="testimonials-one__box">
//                                 <p><span>I was very impresed by the company service lore ipsum is simply free text used by copy typing refreshing. Neque porro est dolorem ipsum quia.</span></p>
//                                 <div className="testimonials-one__box-info">
//                                     <img src="assets/images/resources/testimonials-1-3.png" alt="" />
//                                     <h3>Gary Dawson</h3>
//                                     <span>Analytics</span>
//                                 </div>
//                             </div>
//                         </div>
//                         </SwiperSlide>
//                     </div>

//                     <div className="testimonials-one__swiper-pagination swiper-pagination"></div>
//                 </Swiper>
//             </div>
//         </section>

//         <section className="why-choose">
//             <img src="assets/images/shapes/why-choose-shape-1-1.png" className="why-choose__shape-1" alt="" />
//             <img src="assets/images/shapes/why-choose-shape-1-2.png" className="why-choose__shape-2" alt="" />
//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-6">
//                         <div className="why-choose__image">
//                             <p><i className="pylon-icon-investment"></i>26 years of working experience</p>
//                             <img src="assets/images/resources/why-choose-1-1.png" alt="" />
//                         </div>
//                     </div>
//                     <div className="col-lg-6">
//                         <div className="why-choose__content">
//                             <div className="block-title text-left">
//                                 <p>Our Benfits</p>
//                                 <h2>Why Choose Us?</h2>
//                             </div>
//                             <p>There are many variations of passages. Lorem Ipsum available, but the majority have suffered.</p>
//                             <div className="row">
//                                 <div className="col-md-6">
//                                     <div className="why-choose__box">
//                                         <h3><i className="fa fa-caret-right"></i>Professional Team</h3>
//                                         <p>Lorem ipsum dolor sit is amet, consectetur notted.</p>
//                                     </div>
//                                 </div>
//                                 <div className="col-md-6">
//                                     <div className="why-choose__box">
//                                         <h3><i className="fa fa-caret-right"></i>Quick Payments</h3>
//                                         <p>Lorem ipsum dolor sit is amet, consectetur notted.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="why-choose__progress">
//                                 <div className="why-choose__progress-top">
//                                     <h3>Loan Process</h3>
//                                     <span>90%</span>
//                                 </div>
//                                 <div className="why-choose__progress-bar">
//                                     <span style={{width: '90%'}} className="wow slideInLeft" data-wow-duration="1500ms"></span>
//                                 </div>
//                             </div>
//                             <div className="why-choose__progress">
//                                 <div className="why-choose__progress-top">
//                                     <h3>Consultancy</h3>
//                                     <span>76%</span>
//                                 </div>
//                                 <div className="why-choose__progress-bar">
//                                     <span style={{width: '76%'}} className="wow slideInLeft" data-wow-duration="1500ms"></span>
//                                 </div>
//                             </div>

//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </section>

//         <section className="blog-home pt-120 pb-90">
//             <div className="container">
//                 <div className="block-title text-center">
//                     <p>Directly From the Blog</p>
//                     <h2>News & Articles</h2>
//                 </div>
//                 <div className="row">
//                     <div className="col-lg-4 wow fadeInUp" data-wow-duration="1500ms">
//                         <div className="blog-card">
//                             <div className="blog-card__image">
//                                 <span>20 Sep</span>
//                                 <img src="assets/images/blog/blog-1-1.png" alt="" />
//                             </div>
//                             <div className="blog-card__content">
//                                 <div className="blog-card__meta">
//                                     <Link to="#"><i className="fa fa-tags"></i>Loan</Link>
//                                     <Link to="#"><i className="fa fa-comments"></i>2 Comments</Link>
//                                 </div>
//                                 <h3><Link to="/newsdetails">Changing & grow your business faster</Link></h3>
//                                 <div className="blog-card__author">
//                                     <img src="assets/images/blog/blog-author-1-1.png" alt="" />Christine Eve
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 wow fadeInUp" data-wow-duration="1500ms">
//                         <div className="blog-card">
//                             <div className="blog-card__image">
//                                 <span>20 Sep</span>
//                                 <img src="assets/images/blog/blog-1-2.png" alt="" />
//                             </div>
//                             <div className="blog-card__content">
//                                 <div className="blog-card__meta">
//                                     <Link to="#"><i className="fa fa-tags"></i>Loan</Link>
//                                     <Link to="#"><i className="fa fa-comments"></i>2 Comments</Link>
//                                 </div>
//                                 <h3><Link to="/newsdetails">Changing & grow your business faster</Link></h3>
//                                 <div className="blog-card__author">
//                                     <img src="assets/images/blog/blog-author-1-2.png" alt="" />Christine Eve
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 wow fadeInUp" data-wow-duration="1500ms">
//                         <div className="blog-card">
//                             <div className="blog-card__image">
//                                 <span>20 Sep</span>
//                                 <img src="assets/images/blog/blog-1-3.png" alt="" />
//                             </div>
//                             <div className="blog-card__content">
//                                 <div className="blog-card__meta">
//                                     <Link to="#"><i className="fa fa-tags"></i>Loan</Link>
//                                     <Link to="#"><i className="fa fa-comments"></i>2 Comments</Link>
//                                 </div>
//                                 <h3><Link to="/newsdetails">Changing & grow your business faster</Link></h3>
//                                 <div className="blog-card__author">
//                                     <img src="assets/images/blog/blog-author-1-3.png" alt="" />Christine Eve
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>

//         <div className="client-carousel pt-120 pb-120 client-carousel__has-border-top">
//             <div className="container">
//                 <Swiper className="thm-swiper__slider swiper-container"
//                     modules={[Autoplay]}
//                     spaceBetween={0}
//                     slidesPerView={1}
//                     loop={true}
//                     autoplay={{delay:5000}}
//                     breakpoints={{
//                         "376": {
//                             "spaceBetween": 30,
//                             "slidesPerView": 2
//                         },
//                         "576": {
//                             "spaceBetween": 30,
//                             "slidesPerView": 3
//                         },
//                         "768": {
//                             "spaceBetween": 30,
//                             "slidesPerView": 3
//                         },
//                         "992": {
//                             "spaceBetween": 30,
//                             "slidesPerView": 4
//                         },
//                         "1200": {
//                             "spaceBetween": 30,
//                             "slidesPerView": 5
//                         }
//                     }}>
//                     <div className="swiper-wrapper">
//                         <SwiperSlide>
//                         <div className="swiper-slide">
//                             <img src="assets/images/resources/brand-1-1.png" alt="" />
//                         </div>
//                         </SwiperSlide>
//                         <SwiperSlide>
//                         <div className="swiper-slide">
//                             <img src="assets/images/resources/brand-1-1.png" alt="" />
//                         </div>
//                         </SwiperSlide>
//                         <SwiperSlide>
//                         <div className="swiper-slide">
//                             <img src="assets/images/resources/brand-1-1.png" alt="" />
//                         </div>
//                         </SwiperSlide>
//                         <SwiperSlide>
//                         <div className="swiper-slide">
//                             <img src="assets/images/resources/brand-1-1.png" alt="" />
//                         </div>
//                         </SwiperSlide>
//                         <SwiperSlide>
//                         <div className="swiper-slide">
//                             <img src="assets/images/resources/brand-1-1.png" alt="" />
//                         </div>
//                         </SwiperSlide>
//                         <SwiperSlide>
//                         <div className="swiper-slide">
//                             <img src="assets/images/resources/brand-1-1.png" alt="" />
//                         </div>
//                         </SwiperSlide>
//                         <SwiperSlide>
//                         <div className="swiper-slide">
//                             <img src="assets/images/resources/brand-1-1.png" alt="" />
//                         </div>
//                         </SwiperSlide>
//                         <SwiperSlide>
//                         <div className="swiper-slide">
//                             <img src="assets/images/resources/brand-1-1.png" alt="" />
//                         </div>
//                         </SwiperSlide>
//                         <SwiperSlide>
//                         <div className="swiper-slide">
//                             <img src="assets/images/resources/brand-1-1.png" alt="" />
//                         </div>
//                         </SwiperSlide>
//                         <SwiperSlide>
//                         <div className="swiper-slide">
//                             <img src="assets/images/resources/brand-1-1.png" alt="" />
//                         </div>
//                         </SwiperSlide>
//                     </div>
//                 </Swiper>
//             </div>
//         </div>

//         <section className="call-to-action" style={{ backgroundImage: `url(${ActionBG1})`}}>
//             <div className="container">
//                 <div className="left-content">
//                     <p><span>Simple</span><span>Transparent</span><span>Secure</span></p>
//                     <h3>Get a Business Loans Quickly</h3>
//                 </div>
//                 <div className="right-content">
//                     <Link to="#" className="thm-btn">Apply For Loan</Link>
//                 </div>
//             </div>
//         </section>

//     </>
//   )
// }

// export default Main

import BGPH1 from "../../assets/images/main-slider/main-slider-1-1.jpg";
import BGPH2 from "../../assets/images/main-slider/main-slider-1-2.jpg";
import TrustBG1 from "../../assets/images/shapes/trust-bg-1-1.png";
import FunFactBG1 from "../../assets/images/backgrounds/funfact-bg-1-1.jpg";
import ActionBG1 from "../../assets/images/backgrounds/call-to-action-bg-1-1.jpg";
import AnimatedNumber from "animated-number-react";
import { Navigation, Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
// import Button from "react-bootstrap/Button";
import secureLocalStorage from "react-secure-storage";
import { chat } from "../Chat/chat";

const Main = () => {
  const user = JSON.parse(secureLocalStorage.getItem("user"));

  const [loanAmt, setloanAmt] = useState(0);
  const [loanMonth, setloanMonth] = useState(0);
  const [interestRate, setinterestRate] = useState(0);
  const [emiVal, setEmival] = useState();
  const [TotalVal, setTotalVal] = useState();
  const [slider1, setSlider1] = useState(1000);
  const [slider2, setSlider2] = useState(1);
  // const [users, setUsers] = useState(null);
  const navigate = useNavigate();

  // const handleLogOut = () => {
  //   secureLocalStorage.removeItem("user");
  //   // window.location.href = "/";
  //   navigate("/");
  //   // setUsers(null)
  // };

  useEffect(() => {
    if (slider1 > 0 && slider2 > 0) {
      emiCalculate();
    }
  }, [slider1, slider2]);

  // useEffect(() => {
  //   const storeUser = secureLocalStorage.getItem("user");
  //   if (storeUser) {
  //     setUsers(JSON.parse(storeUser));
  //   }
  // }, []);

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
      <section className="main-slider">
        <Swiper
          className="swiper-container thm-swiper__slider"
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: "#main-slider__swiper-button-next",
            prevEl: "#main-slider__swiper-button-prev",
          }}
          autoplay={{ delay: 5000 }}
        >
          <div className="swiper-wrapper">
            <SwiperSlide>
              <div className="swiper-slide">
                <div
                  className="image-layer"
                  style={{
                    backgroundImage: `url("https://mediacity.co.in/pylon/static/media/main-slider-1-2.14e4023aa1337a560fe2.jpg")`,
                  }}
                ></div>
                <div className="container">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <p>Simple & Secure Payment Process</p>
                      <h2>Connecting All Your Loan Needs</h2>
                      <Link to="#" className=" thm-btn">
                        Apply For Loan
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div
                  className="image-layer"
                  style={{
                    backgroundImage: `url("https://mediacity.co.in/pylon/static/media/main-slider-1-1.080073f2792f5ce85406.jpg")`,
                  }}
                ></div>
                <div className="container">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <p>Simple & Secure Payment Process</p>
                      <h2>Connecting All Your Loan Needs</h2>
                      <Link to="#" className=" thm-btn">
                        Apply For Loan
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div
                  className="image-layer"
                  style={{
                    backgroundImage: `url("https://mediacity.co.in/pylon/static/media/main-slider-1-2.14e4023aa1337a560fe2.jpg")`,
                  }}
                ></div>
                <div className="container">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <p>Simple & Secure Payment Process</p>
                      <h2>Connecting All Your Loan Needs</h2>
                      <Link to="#" className=" thm-btn">
                        Apply For Loan
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>

          <div className="main-slider__nav">
            <div
              className="swiper-button-prev"
              id="main-slider__swiper-button-next"
            >
              <i className="pylon-icon-left-arrow"></i>
            </div>
            <div
              className="swiper-button-next"
              id="main-slider__swiper-button-prev"
            >
              <i className="pylon-icon-right-arrow"></i>
            </div>
          </div>
        </Swiper>
        <div className="feature-two">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-duration="1500ms"
              >
                <div className="feature-two__box">
                  <i className="pylon-icon-consumer-behavior"></i>
                  <p>Quick Payment Process</p>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-duration="1500ms"
              >
                <div className="feature-two__box">
                  <i className="pylon-icon-point-of-sale"></i>
                  <p>No Prepayment Fees</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-one__content">
                <div className="block-title text-left">
                  <p>Company Introductions</p>
                  <h2>Our Loans will Fill Your Dreams</h2>
                </div>
                {/* <p className="about-one__text">
                  Lorem ipsum is simply dolor sit amet, consectetur adipisicing
                  text elit.
                </p> */}
                {/* <p>
                  There are many variations of passages of lorem ipsum available
                  the majority have suffered alteration in some form by injected
                  humour. Duis aute irure dolor lipsum is simply free text
                  available in the local markets in reprehenderit.
                </p> */}
                <p>
                  Our loans are designed to help you achieve your dreams,
                  whether it's buying a new home, starting a business, or
                  pursuing higher education. We understand that sometimes you
                  need financial assistance to reach your goals, and that's
                  where we come in. Our loan programs are tailored to fit your
                  specific needs and offer competitive rates, flexible repayment
                  terms, and excellent customer service. With our loans, you can
                  be confident that you have the support you need to make your
                  dreams a reality. So, whether you're looking to buy your first
                  home or launch your own business, let us help you take the
                  next step towards achieving your dreams.
                </p>
              </div>
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

      <section className="service-one">
        <div className="container">
          <div className="block-title text-center">
            <p>What We’re Offering</p>
            <h2>All Loans Services</h2>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="service-one__card">
                <div className="service-one__image">
                  <img
                    src="assets/images/services/Changing and grow.jpg"
                    alt=""
                  />
                </div>
                <div className="service-one__content">
                  <h3>
                    <Link to="/servicedetails">Personal Loan</Link>
                  </h3>
                  {/* <p>
                    There are many variations of passages of lorem ipsum
                    available the majority have some.
                  </p> */}
                  <p>
                    Personal loans can be a valuable financial tool for those
                    who need access to funds quickly and manageable repayment
                    plan.
                  </p>
                  <Link
                    to="/servicedetails"
                    className="pylon-icon-right-arrow service-one__link"
                  ></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-one__card">
                <div className="service-one__image">
                  <img
                    src="assets/images/services/Changing and grow2.jpg"
                    alt=""
                  />
                </div>
                <div className="service-one__content">
                  <h3>
                    <Link to="/servicedetails">Education Loan</Link>
                  </h3>
                  {/* <p>
                    There are many variations of passages of lorem ipsum
                    available the majority have some.
                  </p> */}
                  <p>
                    Education loans can be a valuable tool for those who want to
                    invest in their education and secure a brighter future for
                    themselves.
                  </p>
                  <Link
                    to="/servicedetails"
                    className="pylon-icon-right-arrow service-one__link"
                  ></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-one__card">
                <div className="service-one__image">
                  <img
                    src="assets/images/services/Changing and grow3.jpg"
                    alt=""
                  />
                </div>
                <div className="service-one__content">
                  <h3>
                    <Link to="/servicedetails">Business Loan</Link>
                  </h3>
                  {/* <p>
                    There are many variations of passages of lorem ipsum
                    available the majority have some.
                  </p> */}
                  <p>
                    Business loans fuel business growth by providing financial
                    support for essential investments such as equipment,
                    inventory.
                  </p>
                  <Link
                    to="/servicedetails"
                    className="pylon-icon-right-arrow service-one__link"
                  ></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-one">
        <img
          src="assets/images/shapes/feature-shape-1-1.png"
          alt=""
          className="feature-one__shape-1"
        />
        <img
          src="assets/images/shapes/feature-shape-1-2.png"
          alt=""
          className="feature-one__shape-2"
        />
        <img
          src="assets/images/shapes/feature-shape-1-3.png"
          alt=""
          className="feature-one__shape-3"
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="block-title text-left">
                <p>Get to Know About</p>
                <h2>Flexible and Quick Business Loans</h2>
              </div>
            </div>
            <div className="col-lg-6">
              {/* <p className="block-text">
                There are many variations of passages of available but the
                majority have suffered alteration in some form, by injected
                humou or randomised words which don't look even slightly
                believable.
              </p> */}
              <p className="block-text">
                Flexible and quick business loans can be an excellent option for
                businesses that need access to funds quickly and with minimal
                hassle. However, it's essential to research and compare
                different loan options to find the best fit for your business's
                specific needs and financial situation.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="feature-one__box">
                <i className="pylon-icon-assets"></i>
                <p>Very Low Rates on All Loans</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="feature-one__box">
                <i className="pylon-icon-verification"></i>
                <p>99.9% Success Rate Guarantee</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="feature-one__box">
                <i className="pylon-icon-finance"></i>
                <p>Flexible with Your Repayments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trusted-company">
        <div
          className="trusted-company__bg"
          style={{ backgroundImage: `url(${TrustBG1})` }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="trusted-company__content">
                <div className="block-title text-left">
                  <p>Trusted Company</p>
                  <h2>Most of the People Trust on Us</h2>
                </div>
                <div className="trusted-company__image">
                  <img src="assets/images/resources/trust-1-1.png" alt="" />
                  {/* <p>
                    There are many variations of passages of lorem ipsum
                    available the majority have suffered alteration in some form
                    by injected humour. Duis aute irure dolor lipsum is simply.
                  </p> */}
                  <p>
                    With a track record of excellence and a reputation for
                    trustworthiness, we are proud to be a trusted company that
                    our customers can rely on for their business needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="trusted-company__box-wrap">
                <div className="trusted-company__box">
                  <span>01</span>
                  <p>Solutions for small business and big companies</p>
                </div>
                <div className="trusted-company__box">
                  <span>02</span>
                  <p>Take our loans and pay for your studies</p>
                </div>
                <div className="trusted-company__box">
                  <span>03</span>
                  <p>Get special loans for more needs in 2 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="funfact-one">
        <div
          className="funfact-one__bg"
          style={{
            backgroundImage: `url(${"https://webdevcode.com/wp/pylon/live/wp-content/uploads/2020/12/funfact-bg-1-1.jpg"})`,
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="funfact-one__box">
                <h3>
                  <span className="odometer" data-count="99">
                    <AnimatedNumber
                      value={99}
                      duration={9000}
                      formatValue={(v) => Math.round(v)}
                    />
                  </span>
                  %
                </h3>
                <p>We Approve Loans</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="funfact-one__box">
                <h3>
                  $
                  <span className="odometer" data-count="90">
                    <AnimatedNumber
                      value={90}
                      duration={9000}
                      formatValue={(v) => Math.round(v)}
                    />
                  </span>
                  k
                </h3>
                <p>Daily Payments</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="funfact-one__box">
                <h3>
                  <span className="odometer" data-count="8900">
                    <AnimatedNumber
                      value={8900}
                      duration={9000}
                      formatValue={(v) => Math.round(v)}
                    />
                  </span>
                </h3>
                <p>Happy Customers</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="funfact-one__box">
                <h3>
                  <span className="odometer" data-count="346">
                    <AnimatedNumber
                      value={346}
                      duration={9000}
                      formatValue={(v) => Math.round(v)}
                    />
                  </span>
                </h3>
                <p>Staff Members</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-one">
        <div className="container">
          <div className="block-title text-center">
            <p>Customers Testimonials</p>
            <h2>Customers Testimonials</h2>
          </div>
          <Swiper
            className="thm-swiper__slider swiper-container"
            modules={[Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000 }}
            pagination={{
              el: ".testimonials-one__swiper-pagination",
              type: "bullets",
              clickable: true,
            }}
            breakpoints={{
              376: {
                spaceBetween: 30,
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              576: {
                spaceBetween: 30,
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              768: {
                spaceBetween: 30,
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              992: {
                spaceBetween: 30,
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
              1200: {
                spaceBetween: 30,
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
            }}
          >
            <div className="swiper-wrapper">
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="testimonials-one__box">
                    <p>
                      <span>
                        "I've been with this bank for years and their customer
                        service is always top-notch and i like service."
                      </span>
                    </p>
                    <div className="testimonials-one__box-info">
                      <img
                        src="assets/images/resources/testimonials-1-1.png"
                        alt=""
                      />
                      <h3>Clyde Williamson</h3>
                      <span>Analytics</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="testimonials-one__box">
                    <p>
                      <span>
                        "I had an issue with my account and the bank was quick
                        to resolve it and make things right."
                      </span>
                    </p>
                    <div className="testimonials-one__box-info">
                      <img
                        src="assets/images/resources/testimonials-1-2.png"
                        alt=""
                      />
                      <h3>Vernon Ray</h3>
                      <span>Analytics</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="testimonials-one__box">
                    <p>
                      <span>
                        "I appreciate and liked the personal attention I receive
                        from the staff at my local branch."
                      </span>
                    </p>
                    <div className="testimonials-one__box-info">
                      <img
                        src="assets/images/resources/testimonials-1-3.png"
                        alt=""
                      />
                      <h3>Gary Dawson</h3>
                      <span>Analytics</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="testimonials-one__box">
                    <p>
                      <span>
                        "I appreciate personalized attention receive from staff
                        at my local branch."
                      </span>
                    </p>
                    <div className="testimonials-one__box-info">
                      <img
                        src="assets/images/resources/testimonials-1-1.png"
                        alt=""
                      />
                      <h3>Clyde Williamson</h3>
                      <span>Analytics</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="testimonials-one__box">
                    <p>
                      <span>
                        "I feel secure knowing my money is in this bank - they
                        take security seriously."
                      </span>
                    </p>
                    <div className="testimonials-one__box-info">
                      <img
                        src="assets/images/resources/testimonials-1-2.png"
                        alt=""
                      />
                      <h3>Vernon Ray</h3>
                      <span>Analytics</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="testimonials-one__box">
                    <p>
                      <span>
                        "I appreciate the low fees and competitive interest
                        rates offered by this bank."
                      </span>
                    </p>
                    <div className="testimonials-one__box-info">
                      <img
                        src="assets/images/resources/testimonials-1-3.png"
                        alt=""
                      />
                      <h3>Gary Dawson</h3>
                      <span>Analytics</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="testimonials-one__box">
                    <p>
                      <span>
                        "I recently took out a loan with this bank and the
                        process was smooth and hassle-free."
                      </span>
                    </p>
                    <div className="testimonials-one__box-info">
                      <img
                        src="assets/images/resources/testimonials-1-1.png"
                        alt=""
                      />
                      <h3>Clyde Williamson</h3>
                      <span>Analytics</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="testimonials-one__box">
                    <p>
                      <span>
                        "The online banking platform is incredibly user-friendly
                        and makes managing my finances a breeze."
                      </span>
                    </p>
                    <div className="testimonials-one__box-info">
                      <img
                        src="assets/images/resources/testimonials-1-2.png"
                        alt=""
                      />
                      <h3>Vernon Ray</h3>
                      <span>Analytics</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="testimonials-one__box">
                    <p>
                      <span>
                        "I was able to easily open a new account and the staff
                        was helpful in answering all my questions."
                      </span>
                    </p>
                    <div className="testimonials-one__box-info">
                      <img
                        src="assets/images/resources/testimonials-1-3.png"
                        alt=""
                      />
                      <h3>Gary Dawson</h3>
                      <span>Analytics</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>

            <div className="testimonials-one__swiper-pagination swiper-pagination"></div>
          </Swiper>
        </div>
      </section>

      <section className="why-choose">
        <img
          src="assets/images/shapes/why-choose-shape-1-1.png"
          className="why-choose__shape-1"
          alt=""
        />
        <img
          src="assets/images/shapes/why-choose-shape-1-2.png"
          className="why-choose__shape-2"
          alt=""
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="why-choose__image">
                <p>
                  <i className="pylon-icon-investment"></i>26 years of working
                  experience
                </p>
                <img
                  src="assets/images/resources/why-choose-3-new.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="why-choose__content">
                <div className="block-title text-left">
                  <p>Our Benfits</p>
                  <h2>Why Choose Us?</h2>
                </div>
                <p>
                  We're the best choice for quality, reliability, and customer
                  satisfaction
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="why-choose__box">
                      <h3>
                        <i className="fa fa-caret-right"></i>Professional Team
                      </h3>
                      <p>
                        Our professional team is the backbone of our company, We
                        are proud to have such a talented and dedicated group of
                        individuals working with us.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="why-choose__box">
                      <h3>
                        <i className="fa fa-caret-right"></i>Quick Payments
                      </h3>
                      <p>
                        Our quick payment options processing systems are
                        designed to provide our clients with a hassle-free
                        payment experience.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="why-choose__progress">
                  <div className="why-choose__progress-top">
                    <h3>Loan Process</h3>
                    <span>90%</span>
                  </div>
                  <div className="why-choose__progress-bar">
                    <span
                      style={{ width: "90%" }}
                      className="wow slideInLeft"
                      data-wow-duration="1500ms"
                    ></span>
                  </div>
                </div>
                <div className="why-choose__progress">
                  <div className="why-choose__progress-top">
                    <h3>Consultancy</h3>
                    <span>76%</span>
                  </div>
                  <div className="why-choose__progress-bar">
                    <span
                      style={{ width: "76%" }}
                      className="wow slideInLeft"
                      data-wow-duration="1500ms"
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-home pt-120 pb-90">
        <div className="container">
          <div className="block-title text-center">
            <p>Directly From the Blog</p>
            <h2>News & Articles</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 wow fadeInUp" data-wow-duration="1500ms">
              <div className="blog-card">
                <div className="blog-card__image">
                  <span>20 Sep</span>
                  <img src="assets/images/blog/blog4.jpg" alt="" />
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
                    <Link to="/newsdetails">
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
            <div className="col-lg-4 wow fadeInUp" data-wow-duration="1500ms">
              <div className="blog-card">
                <div className="blog-card__image">
                  <span>20 Sep</span>
                  <img src="assets/images/blog/blog5.jpg" alt="" />
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
                    <Link to="/newsdetails">
                      Changing & grow your business faster
                    </Link>
                  </h3>
                  <div className="blog-card__author">
                    <img src="assets/images/blog/blog-author-1-2.png" alt="" />
                    Christine Eve
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-duration="1500ms">
              <div className="blog-card">
                <div className="blog-card__image">
                  <span>20 Sep</span>
                  <img src="assets/images/blog/blog6.jpg" alt="" />
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
                    <Link to="/newsdetails">
                      Changing & grow your business faster
                    </Link>
                  </h3>
                  <div className="blog-card__author">
                    <img src="assets/images/blog/blog-author-1-3.png" alt="" />
                    Christine Eve
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="client-carousel pt-120 pb-120 client-carousel__has-border-top">
        <div className="container">
          <Swiper
            className="thm-swiper__slider swiper-container"
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              376: {
                spaceBetween: 30,
                slidesPerView: 2,
              },
              576: {
                spaceBetween: 30,
                slidesPerView: 3,
              },
              768: {
                spaceBetween: 30,
                slidesPerView: 3,
              },
              992: {
                spaceBetween: 30,
                slidesPerView: 4,
              },
              1200: {
                spaceBetween: 30,
                slidesPerView: 5,
              },
            }}
          >
            <div className="swiper-wrapper">
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide> */}
      {/* <SwiperSlide> */}
      {/* <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div> */}

      <section
        className="call-to-action"
        style={{
          backgroundImage: `url(${"https://webdevcode.com/wp/pylon/live/wp-content/uploads/2020/12/call-to-action-bg-1-1.jpg"})`,
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

export default Main;
