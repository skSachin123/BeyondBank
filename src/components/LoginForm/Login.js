import React, { useEffect, useState } from "react";
import users from "./user";
import secureLocalStorage from "react-secure-storage";
import { useNavigate } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import Nav from "react-bootstrap/Nav";
import "./Login.css";
import SpecialLogin from "./SpecialLogin";
import TempSpecialLogin from "./TempSpecialLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tab, setTabs] = useState("login");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = users.find(
      (users) => users.email === email && users.password === password
    );
    console.log(user);
    if (user) {
      const { password, ...newObj } = user;
      console.log("user1 obj", newObj);
      localStorage.setItem("users", JSON.stringify(newObj));
      localStorage.setItem("welcomeMessage", JSON.stringify(true));
      secureLocalStorage.setItem("user", JSON.stringify(user));

      navigate("/Home3");
      //window.location.reload();
    } else {
      alert("Invalid UserName or Password");
    }
  };
  function handleTabs(value) {
    // e.preventDefault();
    // navigate("/Home3");
    setTabs(value);
  }

  return (
    <>
      <div className="login-box">
        <div className="d-flex ">
          <div
            className="item"
            style={{
              backgroundColor: tab === "login" ? "white" : "#C0C0C0",
              borderTop: tab === "login" ? "2px solid green" : "",
              cursor: "pointer",
            }}
            onClick={() => handleTabs("login")}
          >
            <p className="text-center m-0"> Login</p>
          </div>
          <div
            className="item"
            style={{
              backgroundColor: tab === "digitalLogin" ? "white" : "#C0C0C0",
              borderTop: tab === "digitalLogin" ? "2px solid green" : "",
              cursor: "pointer",
            }}
            onClick={() => handleTabs("digitalLogin")}
          >
            <p className="text-center m-0"> Digital Login</p>
          </div>
        </div>
        {tab === "login" ? (
          <form onSubmit={handleSubmit}>
            <label>
              Username
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Username"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </label>

            <label>
              Password
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </label>

            <label>
              <input type="checkbox" name="remember-me" className="checkbox" />
              <span className="checkbox-label">
                Remember me for the next 30 days -
              </span>
            </label>
            <button type="submit" className="btn-blue">
              Login
            </button>
            <a href="#" className="recover-password">
              Recover Password
            </a>
          </form>
        ) : (
          <SpecialLogin />
          // <TempSpecialLogin />
        )}
      </div>
    </>
  );
};

export default Login;
