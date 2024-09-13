import "./SignIn.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function SignIn() {
  var navigate = useNavigate();

  var [eyeclick, setEyeclick] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/newUser");
  };

  return (
    <>
      <div className="SignIn">
        <header>
          <h1>Welcome !</h1>
          <p>Input your details to continue</p>
        </header>
        <form className="signInForm" onSubmit={handleSubmit}>
          <fieldset>
            <input type="text" placeholder="Enter your email" />
          </fieldset>

          <fieldset>
            <input
              type={eyeclick === false ? "password" : "text"}
              placeholder="Enter your password"
            />
            <div
              onClick={() => {
                setEyeclick(!eyeclick);
              }}
              className="eyeIcon">
              {eyeclick === true ? (
                <FontAwesomeIcon icon={faEye} />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} />
              )}
            </div>
          </fieldset>

          <button type="submit">Sign In</button>

          <Link to="/forgotPassword" className="forgot">
            Forgot password ?
          </Link>
        </form>
      </div>
    </>
  );
}

export default SignIn;
