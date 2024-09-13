import "./Nav.css";
import backward from "../../Assets/backwardsArrow.svg";

import { useNavigate } from "react-router";

function Nav(props) {
  var { link } = props;

  var navigate = useNavigate();

  return (
    <nav className="nav">
      <button
        onClick={(e) => {
          e.preventDefault();
          if (link) {
            navigate(`${link}`);
          }
        }}>
        <img src={backward} alt="" />
      </button>
      <div></div>
    </nav>
  );
}

export default Nav;
