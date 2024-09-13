import "./Goals.css";
import Goal from "../../Assets/Goals.svg";
import { useEffect } from "react";
import { PageDetails } from "../../Tranquil/PageContext";
import Nav from "../../Tranquil/Nav/Nav";
import { Route, Routes } from "react-router";

function Initial() {
  var { setCurrentPage } = PageDetails();

  useEffect(() => {
    setCurrentPage("goals");
  });

  return (
    <div className="Goals">
      <Nav link="/tranquil/home" />
      <header>
        <h1>Goal Setting</h1>
      </header>
      <div className="Image">
        <img src={Goal} alt="" />
      </div>
      <div className="Paragraph">
        <p>
          Setting goals is an important part of achieving success and happiness
          in life. By setting clear, specific goals, you can focus your energy
          and efforts on the things that matter most to you, and make steady
          progress towards achieving your dreams.
        </p>

        <button>Add a goal</button>
      </div>
    </div>
  );
}

function Goals() {
  return (
    <Routes>
      <Route path="" element={<Initial />} />
    </Routes>
  );
}

export default Goals;
