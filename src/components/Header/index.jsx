import logo from "../../assets/HeaderLogo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./header.css";

const StyledLink = styled(Link)`
  color: #ff6060;
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
  @media screen and (max-width: 767px) {
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
    &:first-child {
      margin-right: 10px;
    }
  }
`;

function Header() {
  return (
    <header className="header">
      <div>
        <img src={logo} alt="Logo Kasa" className="logo_img" />
      </div>
      <nav className="nav">
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/about">A Propos</StyledLink>
      </nav>
    </header>
  );
}

export default Header;
