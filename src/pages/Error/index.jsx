import { Link } from "react-router-dom";
import styled from "styled-components";
import "./error.css";

const StyledLink = styled(Link)`
  color: #ff6060;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
`;

function Error() {
  return (
    <div className="div_error">
      <h1 className="h1_error">404</h1>
      <h2 className="h2_error">
        Oups ! La page que vous demandez n'existe pas.
      </h2>
      <StyledLink to="/">Retourner sur la page d'accueil</StyledLink>
    </div>
  );
}

export default Error;
