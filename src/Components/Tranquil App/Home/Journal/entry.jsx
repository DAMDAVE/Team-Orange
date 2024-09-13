import Nav from "../../Tranquil/Nav/Nav";
import "./Journal.css";
import cam from "../../Assets/cam.svg";
import journalcam from "../../Assets/journalcam.svg";
import zigzag from "../../Assets/zigzag.svg";
import torch from "../../Assets/torch.svg";
import cancel from "../../Assets/cancel.svg";
import { useState } from "react";
import Spinner from "../../../Globals/Spinner/Spinner";

function Entry() {
  var [showSpinner, setShowSpinner] = useState(false);
  return (
    <div className="Journalentry">
      {showSpinner ? <Spinner /> : null}
      <Nav link="/tranquil/home/journal/getstarted" />
      <form>
        <fieldset>
          <input type="text" placeholder="Untitled" />
          <textarea placeholder="Start Writing. . ." />
          <button type="submit" disabled={true}>
            Submit
          </button>
        </fieldset>
      </form>

      <div className="basedesigns">
        <div className="camera">
          <section>
            <img src={cam} alt="" />
          </section>
          <div></div>
          <section>
            <img src={journalcam} alt="" />
          </section>
          <div></div>
          <section>
            <img src={zigzag} alt="" />
          </section>
        </div>
        <div className="insights">
          <div>
            <img src={torch} alt="" />
          </div>
          <div>
            <img src={cancel} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Entry;
