import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router";
import tranquilLogo from "./Assets/home_logo.svg";
import Login from "./Components/Forms/Login/Login";
import SignIn from "./Components/Forms/SignIn/SignIn";
import Slides from "./Components/Forms/Slides/Slides";
import Prompts from "./Components/Forms/NewUserPrompt/Prompt";
import Tranquil from "./Components/Tranquil App/Tranquil/Tranquil";
import Profile from "./Components/Tranquil App/Profile/Profile/Profile";

import { PageProvider } from "./Components/Tranquil App/Tranquil/PageContext";
import { useRef } from "react";
import { preloadImages } from "./Components/Globals/Globals";

function App() {
  var navigate = useNavigate();
  var textRef = useRef();
  var [loaded, setLoaded] = useState(false);
  function Opening() {
    useEffect(() => {
      setTimeout(() => {
        textRef.current.innerText = "Find your inner Balance";
      }, 1500);

      setTimeout(() => {
        navigate("/login");
      }, 4100);
    });

    preloadImages([tranquilLogo]).then(() => {
      setLoaded(true);
    });
    return (
      <>
        {" "}
        {loaded ? (
          <div className="Opening">
            <div className="container">
              <header>
                <div className="imgText">
                  <div className="logo">
                    <img src={tranquilLogo} alt="" />
                  </div>
                  <p className="firstText" ref={textRef}>
                    Unleash the Power within
                  </p>
                </div>
              </header>
            </div>
          </div>
        ) : null}
      </>
    );
  }

  return (
    <PageProvider>
      <Routes>
        <Route index element={<Opening />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/getStarted" element={<Slides />} />
        <Route path="/newUser" element={<Prompts />} />
        <Route path="/tranquil/*" element={<Tranquil />} />
        <Route path="/tranquil/profile/" element={<Profile />} />
      </Routes>
    </PageProvider>

    //These are the routes to various pages of the app
  );
}

export default App;
