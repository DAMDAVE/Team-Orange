import "./Profile.css";
import editProfile from "../../Assets/editProfile.svg";
import notifications from "../../Assets/notification.svg";
import language from "../../Assets/language.svg";
import darkMode from "../../Assets/darkMode.svg";
import inviteFriends from "../../Assets/inviteFriends.svg";
import logOut from "../../Assets/logOut.svg";
import arrowLeft from "../../Assets/arrowLeft.svg";
import darkModeToggle from "../../Assets/darkModeToggle.svg";
import setImage from "../../Assets/setImage.svg";
import profileImage from "../../Assets/profile_img_default.svg";
import back from "../../Assets/backwardsArrow.svg";
import { useState, useEffect } from "react";
import Spinner from "../../../Globals/Spinner/Spinner";
import { preloadImages } from "../../../Globals/Globals";
import { useNavigate } from "react-router";

function Profile() {
  var navigate = useNavigate();

  var [state, setState] = useState({
    fullName: "Buddy",
    image: profileImage,
  });
  var [isImagesLoading, setImagesLoaded] = useState(false);
  var [isUserLogggingOut, setLogstatus] = useState(false);

  useEffect(() => {
    const imagesToPreload = [
      editProfile,
      notifications,
      language,
      darkMode,
      inviteFriends,
      logOut,
      back,

      setImage,
    ];
    preloadImages(imagesToPreload)
      .then(() => {
        const imageTimer = setTimeout(() => {
          setImagesLoaded(true);
        }, 1000);

        return () => {
          clearTimeout(imageTimer);
        };
      })
      .catch(() => {
        console.log("Error Loading Images");
      });
  }, []);

  return (
    <div className="Profile">
      {isImagesLoading === false ? <Spinner /> : null}
      <header>
        <div
          onClick={() => {
            navigate("/tranquil/home");
          }}>
          <img src={back} alt="" />
        </div>
        <h1>Profile</h1>
      </header>
      <div className="imgCont">
        <div className="imageDiv">
          <div>
            <img src={state.image} alt="" />
            <section
              style={{
                width: "15%",
                height: "15%",
                maxHeight: "50px",
                maxWidth: "50px",
                borderRadius: "50%",
                position: "absolute",
                left: "78%",
                top: "78%",
                backgroundImage: `url(${setImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}>
              <input
                type="file"
                accept="image/png, image/jpg, image/jpeg, image/gif"
                className="imageInput"
               
              />
            </section>
          </div>
         
        </div>

        <h1 className="fullname">{state.fullName}</h1>
      </div>
      <div className="profileOptions">
        <div>
          <img src={editProfile} alt="" />
          <p>Edit Profile</p>
          <img src={arrowLeft} alt="" />
        </div>
        <div>
          <img src={notifications} alt="" />
          <p>Notifications</p>
          <img src={arrowLeft} alt="" />
        </div>
        <div>
          <img src={language} alt="" />
          <p>Language</p>
          <img src={arrowLeft} alt="" />
        </div>
        <div>
          <img src={darkMode} alt="" />
          <p>Dark Mode</p>
          <img src={darkModeToggle} alt="" />
        </div>
        <div>
          <img src={inviteFriends} alt="" />
          <p>Invite Friends</p>
          <img src={arrowLeft} alt="" />
        </div>

        <div
          className="logOut"
          onClick={() => {
            setLogstatus(true);
          }}>
          <img src={logOut} alt="" />
          <p>Logout</p>
        </div>
      </div>

      {isUserLogggingOut === true ? (
        <div className="UserExit">
          <div className="container">
            <div className="logout">
              <img src={logOut} alt="" />
              <p>Logout</p>
            </div>
            <p className="par">Are you sure you want to Logout</p>
            <div className="buttons">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setLogstatus(false);
                }}>
                Cancel
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/login");
                }}>
                Yes, Logout
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Profile;
