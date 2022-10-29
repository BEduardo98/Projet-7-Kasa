import React from "react";
import { Link } from "react-router-dom";
import logementsData from "../../datas/logementsData";
import styled from "styled-components";
import "./homeCards.css";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

function HomeCards() {
  return (
    <section className="home_section">
      <div>
        <div className="cards_container">
          {logementsData.map((item) => {
            return (
              <div className="each_card" key={item.id}>
                <StyledLink to={`/logements/${item.id}`} key={item.id}>
                  <img className="home_img" src={item.cover} alt={item.title} />
                  <div>
                    <h2 className="card_title">{item.title}</h2>
                  </div>
                </StyledLink>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HomeCards;
