import "./Home.css";
import { useEffect, useState } from "react";
import resources from "../../Assets/resourcesQuick.svg";
import goalSetting from "../../Assets/goalSetting.svg";
import assessment from "../../Assets/assessmentQuick.svg";
import journal from "../../Assets/journalQuick.svg";
import happy from "../../Assets/happy.svg";
import anxious from "../../Assets/anxious.svg";
import stressed from "../../Assets/stressed.svg";
import angry from "../../Assets/angry.svg";
import exclamation from "../../Assets/exclamation.svg";
import writingHand from "../../Assets/writingHand.svg";
import writingSun from "../../Assets/writingSun.svg";
import selfCareLove from "../../Assets/selfCareLove.svg";
import selfCareStar from "../../Assets/selfCareStar.svg";
import goalsFlower from "../../Assets/goalsFlowers.svg";
import promptImage from "../../Assets/battery.svg";
import navImage from "../../Assets/profile_img_default.svg";
import { preloadImages, api } from "../../../Globals/Globals";
import Spinner from "../../../Globals/Spinner/Spinner";
import Journal from "../Journal/Journal";
import { Route, Routes, useNavigate } from "react-router";
import { PageDetails } from "../../Tranquil/PageContext";

function HomePageInitial() {
  var { setCurrentPage } = PageDetails();
  var [isImagesLoading, setImagesLoaded] = useState(false);
  var [prompt, showPrompt] = useState(false);
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear();
  var navigate = useNavigate();
  var months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  var monthString = months[month];
  var tests = [
    {
      name: "Anxiety",
      text: "Do you always feel anxious at everything ?",
    },
    {
      name: "Depression",
      text: "Always tired and exhausted ?",
    },
    {
      name: "Stress",
      text: "Isolating yourself from the world ?",
    },

    {
      name: "Eating Disorder",
      text: "Have dieting issues ?",
    },
  ];

  useEffect(() => {
    setCurrentPage("home");
  });

  useEffect(() => {
    const imagesToPreload = [
      resources,
      goalSetting,
      assessment,
      journal,
      happy,
      anxious,
      stressed,
      angry,
      exclamation,
      writingHand,
      writingSun,
      selfCareLove,
      selfCareStar,
      goalsFlower,
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
        console.log("");
      });
  }, []);

  const handleDaily = (e) => {
    e.preventDefault();
    showPrompt(true);
  };

  const Prompt = () => {
    return (
      <div className="Prompts">
        <div className="image">
          <img src={promptImage} alt="" />
        </div>
        <div
          className="cancel"
          onClick={() => {
            showPrompt(false);
          }}>
          <p>Cancel</p>
        </div>
        <div className="flexs">
          <section>
            <div>
              <p>1</p>
            </div>
            <div>
              <p>Anxiety</p>
            </div>
          </section>
          <section>
            <div>
              <p>2</p>
            </div>
            <div>
              <p>Depression</p>
            </div>
          </section>
          <section>
            <div>
              <p>3</p>
            </div>
            <div>
              <p>Stress</p>
            </div>
          </section>
          <section>
            <div>
              <p>4</p>
            </div>
            <div>
              <p>Eating Disorder</p>
            </div>
          </section>
        </div>
      </div>
    );
  };

  return (
    <div className="Home">
      <nav>
        <div
          onClick={() => {
            navigate("/tranquil/profile");
          }}>
          <img src={navImage} alt="" />
        </div>
        <div></div>
      </nav>

      {isImagesLoading === false ? <Spinner /> : null}
      <div className="homePageContainer">
        <header>
          <h1>Hi Friend !</h1>
          <p>
            {monthString} {day}, {year}
          </p>
        </header>

        <div className="Quote">
          <p>"There's only one of you in the entire world, </p>
          <p>Live it. Love it!"</p>
          <p>Today's Quote</p>
        </div>

        <div className="UserState">
          <h2>How are you feeling today ?</h2>
          <div className="EmojiGroup">
            <div className="emoji">
              <div>
                <img src={happy} alt="" />
              </div>
              <p>Happy</p>
            </div>
            <div className="emoji">
              <div>
                <img src={anxious} alt="" />
              </div>
              <p>Anxious</p>
            </div>
            <div className="emoji">
              <div>
                <img src={stressed} alt="" />
              </div>
              <p>Stressed</p>
            </div>
            <div className="emoji">
              <div>
                <img src={angry} alt="" />
              </div>
              <p>Angry</p>
            </div>
          </div>
        </div>

        <div className="DailyCheckIn">
          <h2>Daily Check-in</h2>
          <p>Get some insights and increase your mental awareness.</p>
          <p>
            Based on the assessments results, you will get personalized results
            and insights.
          </p>
          <button onClick={handleDaily}>Start</button>
          <div>
            <img src={exclamation} alt="" className="mark" />
          </div>
        </div>

        <div className="Recommended">
          <h2>Recommended</h2>
          <p>
            Deep dive into your mental health with our finely set questionnaires
          </p>

          <div className="ASDE" id="asde">
            <div className="asdeContainer">
              {tests.map((test, index) => (
                <div
                  key={index}
                  onClick={() => {
                    navigate(`/tranquil/assessments/assessment/${test.name}`);
                  }}>
                  <h3>{test.name} :</h3>
                  <p>{test.text}</p>
                  <p>Take this test!</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="QuickAccess">
          <h2>Quick Access</h2>
          <section className="rgaj">
            <div
              className="group"
              onClick={() => {
                navigate("/tranquil/resources");
              }}>
              <div>
                <section>
                  <img alt="" src={resources} />
                  <span>Resources</span>
                </section>
              </div>
            </div>

            <div
              className="group"
              onClick={() => {
                navigate("/tranquil/goals");
              }}>
              <div>
                <section>
                  <img alt="" src={goalSetting} />
                  <span>Goal Setting</span>
                </section>
              </div>
            </div>

            <div className="group">
              <div>
                <section>
                  <img alt="" src={assessment} />
                  <span>Assessments</span>
                </section>
              </div>
            </div>

            <div
              className="group"
              onClick={() => {
                navigate("/tranquil/home/journal");
              }}>
              <div>
                <section>
                  <img alt="" src={journal} />
                  <span>Journal</span>
                </section>
              </div>
            </div>
          </section>
        </div>

        <div className="Resources">
          <h2>Resources</h2>
          <div className="resource">
            <div className="group">
              <div>
                <p>Benefits of writing</p>
                <img className="writingHand" alt="" src={writingHand} />
                <img className="writingSun" alt="" src={writingSun} />
              </div>
            </div>

            <div className="group">
              <div>
                <p>Self-Care Routine</p>
                <img className="selfCareLove" alt="" src={selfCareLove} />
                <img className="selfCareStar" alt="" src={selfCareStar} />
              </div>
            </div>
            <div className="group">
              <div>
                <p>Setting up your Goals</p>
                <img className="goalsFlower" alt="" src={goalsFlower} />
              </div>
            </div>
            <div className="group">
              <div>
                <p>How to journal well</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {prompt ? (
        <div className="Prompt">
          <Prompt />
        </div>
      ) : null}
    </div>
  );
}

function Home() {
  return (
    <Routes>
      <Route index path="" element={<HomePageInitial />} />
      <Route path="journal/*" element={<Journal />} />
    </Routes>
  );
}

export default Home;
