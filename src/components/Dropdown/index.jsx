import { useState } from "react";
import "./dropdown.scss";
import flecheHaut from "../../assets/Drop.svg";
import flecheBas from "../../assets/DropDownBas.svg";

function DropDown(droptype) {
  const [isClose, setIsClose] = useState(true);

  return isClose ? (
    <div className="collapse-bloc">
      <button className="collapse-btn" onClick={() => setIsClose(false)}>
        {droptype.name}
        <img className="flecheBas" src={flecheBas} alt="Fleche vers le bas" />
      </button>
    </div>
  ) : (
    <div className="collapse-bloc">
      <button className="collapse-btn" onClick={() => setIsClose(true)}>
        {droptype.name}
        <img
          className="flecheHaut"
          src={flecheHaut}
          alt="Fleche vers le haut"
        />
      </button>
      <div className="collapse-desc">{droptype.description}</div>
    </div>
  );
}

export default DropDown;
