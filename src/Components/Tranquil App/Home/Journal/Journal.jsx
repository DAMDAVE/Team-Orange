import "./Journal.css";
import Nav from "../../Tranquil/Nav/Nav";
import blankPage from "../../Assets/blankPage.svg";
import GetStarted from "./getStarted";
import Entry from "./entry";
import { Route, Routes, useNavigate } from "react-router";


function Opening() {
  var navigate = useNavigate();

  return (
    <div className="Journal">
      <Nav link="/tranquil/home" />
      <header>
        <h1>Journal</h1>
      </header>

      <div className="aboutJournal">
        <p>
          Journal is a well recommended act of putting down your thoughts and
          feelings. Allowing you fully access the many joys in yourself.
        </p>
      </div>

      <div className="blankPage">
        <div>
          <h2>Blank Page</h2>
          <p>Start journaling with a blank Page</p>
          <button
            onClick={() => {
              navigate("getStarted");
            }}>
            Empty Page
          </button>
        </div>
        <div>
          <img src={blankPage} alt="" />
        </div>
      </div>

      <div className="tips">
        <h2> Tips on what to write about</h2>

        <div>
          <p className="ideas">Productivity</p>
          <p className="ideas">Stress & Anxiety</p>
          <p className="ideas">Therapy</p>
          <p className="ideas">Happiness</p>
          <p className="ideas">Self - Discovery</p>
          <p className="ideas">Relationship</p>
        </div>
      </div>
    </div>
  );
}

function Journal() {
  return (
    <Routes>
      <Route index path="" element={<Opening />} />
      <Route path="getStarted" element={<GetStarted />} />
      <Route path="entry" element={<Entry />} />
      
    </Routes>
  );
}

export default Journal;
