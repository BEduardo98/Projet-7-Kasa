import HeaderImg from "../../assets/HeaderImg.jpg";
import HomeCards from "../../components/HomeCards";
import "./accueil.css";

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
      </section>
      <HomeCards />
    </main>
  );
}

export default Accueil;
