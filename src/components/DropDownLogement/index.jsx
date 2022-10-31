import { useState } from "react";
import "./droplogement.css";
import flecheHaut from "../../assets/Drop.svg";
import flecheBas from "../../assets/DropDownBas.svg";

function DropDownLogement(droptype) {
  const [isClose, setIsClose] = useState(true);

  return isClose ? (
    <div className="drop-bloc">
      <button className="drop-btn" onClick={() => setIsClose(false)}>
        {droptype.name}
        <img className="flecheBas" src={flecheBas} alt="Fleche vers le bas" />
      </button>
    </div>
  ) : (
    <div className="drop-bloc">
      <button className="drop-btn" onClick={() => setIsClose(true)}>
        {droptype.name}
        <img
          className="flecheHaut"
          src={flecheHaut}
          alt="Fleche vers le haut"
        />
      </button>
      <div className="drop-desc">{droptype.description}</div>
    </div>
  );
}

export default DropDownLogement;
