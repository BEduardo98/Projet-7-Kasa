import "./about.css";

import AboutImg from "../../assets/AboutImg.jpg";
import DropDown from "../../components/Dropdown";
import AboutImgMobile from "../../assets/AboutImgMobile.jpg";

function About() {
  return (
    <main className="container">
      <div className="img_div">
        <img src={AboutImg} alt="Montagnes" className="img_banniere" />
        <img
          src={AboutImgMobile}
          alt="Montagnes"
          className="img_banniere_mobile"
        />
      </div>
      <div className="collapse_about">
        <DropDown
          name={<h1 className="titre">Fiabilité</h1>}
          description={
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </p>
          }
        />
        <DropDown
          name={<h1 className="titre">Respect</h1>}
          description={
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          }
        />
        <DropDown
          name={<h1 className="titre">Service</h1>}
          description={
            <p>
              Nos équipes se tiennent à votre disposition pour vous fournir une
              expérience parfaite. N'hésitez pas à nous contacter si vous avez
              la moindre question.
            </p>
          }
        />
        <DropDown
          name={<h1 className="titre">Sécurité</h1>}
          description={
            <p>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
              que les standards sont bien respectés. Nous organisons également
              des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          }
        />
      </div>
    </main>
  );
}

export default About;
