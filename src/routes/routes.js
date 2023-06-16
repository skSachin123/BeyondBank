import React from "react";
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
import { Outlet } from "react-router-dom";
import PrivateRoute from "./PrivateRoutes";
import AuthRoute from "./AuthRoute";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <PrivateRoute component={<Contact />} />,
  },
  {
    path: "/credit-card",
    element: <PrivateRoute component={<CreditCard />} />,
  },
  {
    path: "/home-02",
    element: <PrivateRoute component={<Home2 />} />,
  },
  {
    path: "/credit-card-details",
    element: <CreditCardDetails />,
  },
  {
    path: "/creditcardform",
    element: <CreditCardForm />,
  },
  {
    path: "/team",
    element: <PrivateRoute component={<Team />} />,
  },
  {
    path: "/team-details",
    element: <PrivateRoute component={<TeamDetails />} />,
  },
  {
    path: "/service",
    element: <PrivateRoute component={<Service />} />,
  },
  {
    path: "/service-details",
    element: <PrivateRoute component={<ServiceDetails />} />,
  },
  {
    path: "/news-main",
    element: <PrivateRoute component={<NewsMain />} />,
  },
  {
    path: "/news-details",
    element: <PrivateRoute component={<NewsDetails />} />,
  },
  {
    path: "/work",
    element: <PrivateRoute component={<LoanCalculator />} />,
  },
  {
    path: "/loan-calculator",
    element: <PrivateRoute component={<LoanCalculator />} />,
  },
  {
    path: "/faqs",
    element: <PrivateRoute component={<FAQ />} />,
  },
  {
    path: "/testimonial",
    element: <PrivateRoute component={<Testimonials />} />,
  },
  {
    path: "/Home3",
    element: (
      <>
        {" "}
        <PrivateRoute component={<Home3 />} />
      </>
    ),
  },
  {
    path: "/login",
    element: <AuthRoute component={<Login />} />,
  },
  // Add more routes here...
];

export default routes;
