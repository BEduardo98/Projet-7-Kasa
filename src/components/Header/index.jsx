import logo from "../../assets/HeaderLogo.svg";
import styled from "styled-components";
import colors from "../../utils/style/color";
import { Link } from "react-router-dom";
import "./header.css";

const StyledLink = styled(Link)`
  color: ${colors.primary};
  font-weight: 500px;
  font-size: 24px;
  line-height: 34px;
  text-decoration: none;
  &:first-child {
    margin-right: 57px;
  }
  &:hover {
    text-decoration: underline;
  }
`;

function Header() {
  return (
    <header className="header">
      <div>
        <img src={logo} alt="Logo Kasa" />
      </div>
      <nav className="nav">
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/about">A Propos</StyledLink>
      </nav>
    </header>
  );
}

export default Header;
