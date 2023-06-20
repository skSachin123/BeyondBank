import React, { useEffect, useState } from "react";
import CobrowseIO from "cobrowse-sdk-js";
import { Link, useNavigate } from "react-router-dom";
import PHBG1 from "../../../assets/images/backgrounds/page-header-bg-1-1.jpg";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import secureLocalStorage from "react-secure-storage";
import { Toaster } from "react-hot-toast";
import "./CreditCardForm.css";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import { AiOutlineClose } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import { useLocation } from "react-router-dom";

const CreditCardForm = () => {
  // const user = JSON.parse(secureLocalStorage.getItem("user"));
  const [cards, setCards] = React.useState("");
  const [slider1, setSlider1] = useState(1000);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [social, setSocial] = useState("");
  const [creditcardno, setCreditcardno] = useState("");
  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    social: "",
    creditcardno: "",
  });
  let location = useLocation();
  console.log(location);
  const [coBrowserShow, setCoBrowserShow] = useState({ show: false, code: "" });

  // const notify = () => toast("Wow so easy !");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      setFirstName("");
      setLastName("");
      setDob("");
      setEmail("");
      setCards("");
      setSocial("");
      setCreditcardno("");

      setSlider1(1000);
      toastsucess();
    }
  };
  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!firstName) {
      errors.firstName = "Please enter your first name.";
      isValid = false;
    }

    if (!lastName) {
      errors.lastName = "Please enter your last name.";
      isValid = false;
    }

    if (!dob) {
      errors.dob = "Please enter your date of birth.";
      isValid = false;
    }
    if (!social) {
      errors.social = "Please enter your Social Security Number.";
      isValid = false;
    }

    if (!email) {
      errors.email = "Please enter your email address.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Please enter a valid email address.";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  useEffect(() => {
    if (slider1 > 0) {
    }
  }, [slider1]);

  //toast succesfully
  const toastsucess = () => {
    toast.success(" Sucessfully Submitted!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  //code toast
  useEffect(() => {
    localStorage.setItem("location", JSON.stringify("CreditCardForm"));
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
              location: " CreditCardForm",
              cardType: location?.state?.cardType,
              customer_uniqueId: JSON.parse(localStorage.getItem("uniqueId")),
            },
          },
        }
      )
      .then((webchat) => {
        console.log("response of webchat", webchat);
      });
  }, []);
  const handleselectChange = (event) => {
    setCards(event.target.value);
  };

  const handleHelp = () => {
    CobrowseIO.license = "h5U9O61S0DG05Q";
    // CobrowseIO.license = "oAeUnkdrFSbzSQ";
    //CobrowseIO.license = "84u-nKuxk5bRFA";
    CobrowseIO.customData = {
      user_id: "12345",
      user_name: "example",
      user_email: "cobrowsing.avaya@hotmail.com",
      device_id: "device123",
      device_name: "windows123",
    };

    CobrowseIO.redactedViews = [
      'input[ name="creditcardno"],input[name="SSN"]',
    ];
    // CobrowseIO.client().then(function () {
    //   // create a code a display it to the user using your own UI
    //   CobrowseIO.createSessionCode().then(function (code) {
    //     // console.log("your code is", code);
    //   });
    // });
    CobrowseIO.client().then(function () {
      // create a code a display it to the user using your own UI
      CobrowseIO.createSessionCode().then(function (code) {
        // console.log("your code is", code);
        // toast.success(`Your Cobrowse 6 digit code is ${code}`, {
        //   // position: "top-right",
        //   // autoClose: 5000,
        //   // hideProgressBar: false,
        //   // closeOnClick: true,
        //   // pauseOnHover: true,
        //   // draggable: true,
        //   // progress: undefined,
        //   // theme: "light",
        //   position: "top-center",
        //   autoClose: 9999,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "colored",
        // });
        setCoBrowserShow({ show: true, code: code });
      });
    });

    CobrowseIO.start();
  };
  console.log(coBrowserShow);
  function handleSubmitForCreditCardForm(e) {
    e.preventDefault();
    // toast.success("successful");
  }
  function handleCloseCoBrowser(e) {
    e.preventDefault();
    setCoBrowserShow({ show: false, code: "" });
  }
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
      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      /> */}
      <ToastContainer />
      {/* <ToastContainer
        position="top-center"
        autoClose={9999}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      /> */}

      <section className="page-header">
        <div
          className="page-header__bg"
          style={{ backgroundImage: `url(${PHBG1})` }}
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
              <Link to="/credit-card">Home</Link>
            </li>
            <li>/</li>
            <li>
              <span>Credit Card Form</span>
            </li>
          </ul>
          <h2>Credit Card Form</h2>
        </div>
      </section>
      <section className="page-area-one">
        <div className="elementor-widget-wrap">
          <form onSubmit={handleSubmit}>
            <div className="contact-one__form">
              <div className="row mb-30">
                <div className="col-md-12">
                  <div className="block-title mb-20">
                    <p className="small-title mb-0">Personal Information</p>
                    <h3>Personal Details</h3>
                  </div>
                </div>
                <div className="col-md-6">
                  {/* <label className="small-title mb-0">First Name</label> */}
                  <label for="first-name" className="form-label">
                    <h6 class="text-muted "> First Name</h6>
                  </label>
                  {/* <span className="wpcf7-form-control-wrap"> */}
                  <input
                    type="text"
                    name="FirtName"
                    size="30"
                    id="firstname-input"
                    // placeholder="First Name"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                  />
                  {/* </span> */}
                  {formErrors.firstName && (
                    <div className="error">{formErrors.firstName}</div>
                  )}
                </div>
                <div className="col-md-6">
                  {/* <label className="small-title mb-0">Last Name</label> */}
                  <label for="last-name" className="form-label">
                    <h6 class="text-muted "> Last Name</h6>
                  </label>

                  {/* <span className="wpcf7-form-control-wrap LastName"> */}
                  <input
                    type="text"
                    name="LastName"
                    size="30"
                    id="lastname-input"
                    aria-required="true"
                    aria-invalid="false"
                    // placeholder="Last Name"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                  />
                  {/* </span> */}
                  {formErrors.lastName && (
                    <div className="error">{formErrors.lastName}</div>
                  )}
                </div>
                <div className="col-md-6">
                  <label className="small-title mb-0">
                    <h6 class="text-muted">Date of Birth</h6>
                  </label>
                  <br />
                  {/* <span className="wpcf7-form-control-wrap"> */}
                  <input
                    // type="date"
                    type="date"
                    name="Date"
                    size="30"
                    id="date-input"
                    placeholder=""
                    value={dob}
                    onChange={(event) => setDob(event.target.value)}
                  />
                  {/* </span> */}
                  {formErrors.dob && (
                    <div className="error">{formErrors.dob}</div>
                  )}
                </div>
                <div className="col-md-6">
                  <label className="small-title mb-0">
                    <h6 class="text-muted ">Email *</h6>
                  </label>
                  {/* <span className="wpcf7-form-control-wrap"> */}
                  <input
                    type="email"
                    name="email"
                    size="40"
                    id="email-input"
                    // placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  {/* </span> */}
                  {formErrors.email && (
                    <div className="error">{formErrors.email}</div>
                  )}
                </div>
              </div>
              <br />
              <div className="row mb-10" id="card-detail">
                <div className="col-md-12">
                  <div className="block-title mb-20">
                    <h6 className="small-title mb-0">Card Information</h6>
                    <h3>Card Details</h3>
                  </div>
                </div>

                <div className="col-md-6">
                  <div>
                    <FormControl
                      style={{
                        minWidth: "90%",
                      }}
                    >
                      <label className="small-title mb-0">
                        <h6 class="text-muted ">Card Type</h6>
                      </label>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={cards}
                        onChange={handleselectChange}
                        style={{
                          height: "70px",
                          background: "#eff2f6",
                          border: "2px solid darkgray",
                          // -webkit-transition:" 0.5s",
                          // transition: "0.5s",
                          // outline: "none",
                        }}
                      >
                        {/* <MenuItem>Choose...</MenuItem> */}
                        <MenuItem value={"Visa Platinum Card"}>
                          Visa Platinum Card
                        </MenuItem>
                        <MenuItem value={"Visa Gold Card"}>
                          Visa Gold Card
                        </MenuItem>
                        <MenuItem value={"Visa classNameic Card"}>
                          Visa classNameic Card
                        </MenuItem>
                        <MenuItem value={"Titanium Mastercard"}>
                          Titanium Mastercard
                        </MenuItem>
                        <MenuItem value={"Express Card"}>Express Card</MenuItem>
                      </Select>
                    </FormControl>
                  </div>

                  {/* {formErrors.firstName && (
                    <div className="error">{formErrors.firstName}</div>
                  )} */}
                </div>
                <div className="col-md-6">
                  <label className="small-title mb-0">
                    <h6 class="text-muted">Social Security Number</h6>
                  </label>

                  {/* <span className="wpcf7-form-control-wrap"> */}
                  <input
                    type="text"
                    name="SSN"
                    size="30"
                    id="firstname-input"
                    // placeholder="First Name"
                    value={social}
                    onChange={(event) => setSocial(event.target.value)}
                  />
                  {/* </span> */}
                  {/* {formErrors.firstName && (
                    <div className="error">{formErrors.firstName}</div>
                  )} */}
                </div>
                <div className="col-md-12 pr-5">
                  <label className="small-title mb-0">
                    <h6 class="text-muted ">Card Limit</h6>
                  </label>
                  <div className="d-flex justify-content-between">
                    <span>$1000</span>
                    <span>$50000</span>
                  </div>
                  <div className="input-box ">
                    <div className="range-slider-count" id="range-slider-count">
                      <input
                        type="range"
                        style={{ width: "100%" }}
                        min="1000"
                        max="50000"
                        value={slider1}
                        onChange={(e) => setSlider1(e.target.value)}
                      />
                    </div>
                    <span>{slider1}</span>
                  </div>
                </div>
              </div>
              <div className="d-flex position-relative submit-btn-class">
                <button
                  type="submit"
                  className="btn-submit1"
                  id="btn-submit-submit"
                >
                  Submit
                </button>
                {/* <img
                  src="assets/images/resources/Request Co-Browse.png"
                  alt=""
                  height="70"
                  onClick={handleHelp}
                  className="newbtn"
                /> */}
                <button
                  type="button"
                  className="btn-submit1"
                  onClick={handleHelp}
                  id="btn-submit-submit"
                >
                  {" "}
                  Need Help
                </button>

                <div
                  className={`ml-5 position-absolute ${
                    coBrowserShow?.show ? "d-block" : "d-none"
                  }`}
                  style={{ left: "42%" }}
                >
                  <Card className="custom-class" style={{ width: "24rem" }}>
                    <Card.Header
                      className="pl-3 text-white"
                      style={{ backgroundColor: "#0C2139" }}
                    >
                      <span>Start Co-browse with our Team</span>
                      <div
                        className="float-right cursor-pointer	"
                        onClick={handleCloseCoBrowser}
                      >
                        <AiOutlineClose />
                      </div>
                    </Card.Header>
                    <Card.Body>
                      <Card.Text className="pl-4 pt-2 pr-1 pb-2 text">
                        <p>
                          Please give this unique cobrowse code to support team
                          so they can access your screen{" "}
                        </p>
                        <h3 className="text-center px-2 letter-spacing">
                          {coBrowserShow?.code}
                        </h3>
                      </Card.Text>
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </form>
          <br />
          <br />

          {/* {Object.keys(formErrors).length === 0 && (
            <div className="success">
              <p>Form has been Submitted!</p>
            </div>
          )} */}

          {/* <button
            className="help-button"
            //style={"padding-right:30px;"}
            onClick={handleHelp}
          >
            <i>Co-Browse Help</i>
          </button> */}
          {/* <img
            src="assets/images/credit-card/Request Co-Browse.png"
            className="help-button"
            style={"padding-right:30px;"}
            onClick={handleHelp}
          ></img> */}
          {/* <img
            src="assets/images/resources/Request Co-Browse.png"
            alt=""
            className="help-button"
            onClick={handleHelp}
            width="8%"
          /> */}
        </div>
      </section>
    </>
  );
};

export default CreditCardForm;
