import SlideShow from "../../components/Slideshow";
import logementsData from "../../datas/logementsData";
import { useParams } from "react-router-dom";
import DropDownLogement from "../../components/DropDownLogement";
import Error from "../Error";
import "./logements.scss";
import starFull from "../../assets/EtoileCouleur.svg";
import starEmpty from "../../assets/EtoileGris.svg";

function Logements() {
  const { id } = useParams();
  const rang = [1, 2, 3, 4, 5];
  const found = logementsData.find((logement) => logement.id === id); //On récupere l'id du logement pour pouvoir afficher ses infos
  if (!found) {
    return <Error />; //Si on trouve un id different on envoie une erreur
  }

  return (
    <main className="container">
      <section>
        <SlideShow pictures={found.pictures} />
      </section>
      <section>
        <div className="container_header_informations">
          <div className="container_infos_entête">
            <h1 className="logement_title">{found.title}</h1>
            <h2 className="logement_location">{found.location}</h2>
            <ul className="tags">
              {found.tags.map((tags, index) => (
                <li className="tag_infos" key={`${index}-${tags}`}>
                  {tags}
                </li>
              ))}
            </ul>
          </div>

          <div className="container_infos_profil">
            <div className="infos_profil">
              <ul className="profil_list">
                <li className="profil_name">{found.host.name}</li>
                <li>
                  <img
                    src={found.host.picture}
                    alt={`Phode de ${found.host.name}`}
                    className="profil_img"
                  />
                </li>
              </ul>
            </div>
            <div className="profil_etoiles">
              {rang.map((rangElement) =>
                found.rating >= rangElement ? (
                  <span key={rangElement.toString()}>
                    <img src={starFull} alt="" className="star" />
                  </span>
                ) : (
                  <span key={rangElement.toString()}>
                    <img src={starEmpty} alt="" className="star" />
                  </span>
                )
              )}
            </div>
          </div>
        </div>
        <div className="container_body_informations">
          <DropDownLogement
            name="Description"
            description={<p>{found.description}</p>}
          />
          <DropDownLogement
            name="Équipements"
            description={
              <ul className="dropdown_equipement">
                {found.equipments.map((equipments, index) => (
                  <li key={`${index}-${equipments}`}>{equipments}</li>
                ))}
              </ul>
            }
          />
        </div>
      </section>
    </main>
  );
}

export default Logements;
