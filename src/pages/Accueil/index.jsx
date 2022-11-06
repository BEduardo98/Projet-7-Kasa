import HeaderImg from "../../assets/HeaderImg.jpg";
import HomeCards from "../../components/HomeCards";
import MobileHeaderImg from "../../assets/MobileHeaderImg.jpg";
import "./accueil.scss";

function Accueil() {
  return (
    <main>
      <section className="accueil_section">
        <h1 className="accueil_title">Chez vous, partout et ailleurs</h1>
        <img
          className="accueil_img"
          src={HeaderImg}
          alt="Une fôret avec de l'eau et de rochers"
        />
        <img
          className="accueil_img_mobile"
          src={MobileHeaderImg}
          alt="Une fôret avec de l'eau et de rochers"
        />
      </section>
      <HomeCards />
    </main>
  );
}

export default Accueil;
