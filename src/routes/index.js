import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

import Navbar from "../components/Navbar/Main";
import Footer from "../components/Footer/Main";
import Home from "../components/Home/Main";
import Home2 from "../components/Home2/Main";
import Team from "../components/About/Team/Main";
import TeamDetails from "../components/About/TeamDetails/Main";
import Service from "../components/Services/Service/Main";
import ServiceDetails from "../components/Services/ServiceDetails/Main";
import NewsMain from "../components/News/NewsMain/Main";
import NewsDetails from "../components/News/NewsDetails/Main";
import Work from "../components/Pages/Work/Main";
import LoanCalculator from "../components/Pages/LoanCalculator/Main";
import CreditCard from "../components/Credit/CreditCard/Main";
import CreditCardDetails from "../components/Credit/CreditCardDetails/Main";
import FAQ from "../components/Pages/FAQ/Main";
import Testimonials from "../components/Pages/Testimonial/Main";
import Contact from "../components/Contact/Main";
import Login from "../components/LoginForm/Login";
import Home3 from "../components/Home3/Main";
import CreditCardForm from "../components/Credit/CreditForm/CreditCardForm";
import secureLocalStorage from "react-secure-storage";

const Routing = () => {
  const [homepage, sethomepage] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedInU, setIsLoggedInU] = useState(false);
  useEffect(() => {
    // Check if the user is logged in by retrieving their details from local storage
    const user = JSON.parse(secureLocalStorage.getItem("user"));
    if (user && user.isLoggedInU) {
      setIsLoggedInU(true);
    }
  }, []);

  // const isLoggedInUser = !!secureLocalStorage.getItem("user");

  useEffect(() => {
    const user = secureLocalStorage.getItem("user");
    if (user) {
      setLoggedIn(true);
    }
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleStorageChange = (event) => {
    if (event.key === "@secure.s.user" && !event.newValue) {
      setLoggedIn(false);
      navigate("/");
    }
  };

  //after closing tab it will remove token
  // useEffect(() => {
  //   const user = secureLocalStorage.getItem("user");
  //   if (user) {
  //     setLoggedIn(true);
  //   }
  //   window.addEventListener("storage", handleStorageChange);

  //   return () => {
  //     window.removeEventListener("storage", handleStorageChange);
  //   };
  // }, []);

  // const handleStorageChange = (event) => {
  //   if (event.key === "@secure.s.user" && !event.newValue) {
  //     setLoggedIn(false);
  //     navigate("/");
  //     secureLocalStorage.removeItem("@secure.s.user"); // <-- add this line
  //   }
  // };

  //to check if the key is alvliable in localstorage after closing tab
  // useEffect(() => {
  //   const user = secureLocalStorage.getItem("user");
  //   if (user) {
  //     setLoggedIn(true);
  //   }

  //   const handleStorageChange = (event) => {
  //     if (event.key === "@secure.s.user" && !event.newValue) {
  //       setLoggedIn(false);
  //       navigate("/");
  //     }
  //   };

  //   window.addEventListener("storage", handleStorageChange);

  //   const handleTabClose = () => {
  //     secureLocalStorage.removeItem("@secure.s.user");
  //   };

  //   window.addEventListener("unload", handleTabClose);

  //   return () => {
  //     window.removeEventListener("storage", handleStorageChange);
  //     window.removeEventListener("unload", handleTabClose);
  //   };
  // }, []);

  useEffect(() => {
    if (location.pathname === "/home-02") {
      sethomepage(false);
    } else {
      sethomepage(true);
    }
  }, [location]);

  return (
    <>
      {homepage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/credit-card" element={<CreditCard />} />
        <Route path="/home-02" element={<Home2 />} />
        <Route path="/credit-card-details" element={<CreditCardDetails />} />
        <Route path="/creditcardform" element={<CreditCardForm />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team-details" element={<TeamDetails />} />
        <Route path="/service" element={<Service />} />
        <Route path="/service-details" element={<ServiceDetails />} />
        <Route path="/news-main" element={<NewsMain />} />
        <Route path="/news-details" element={<NewsDetails />} />
        <Route path="/work" element={<Work />} />
        <Route path="/loan-calculator" element={<LoanCalculator />} />
        <Route path="/faqs" element={<FAQ />} />
        <Route path="/testimonial" element={<Testimonials />} />
        <Route path="/Home3" element={<Home3 />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Routing;
