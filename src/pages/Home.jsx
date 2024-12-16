import { Link } from "react-router-dom";
import Carousel from "../components/Carrousel";

const Home = () => {
  return (
    <div>
      <Carousel />
      <h1>Accueil</h1>
      <nav>
        <Link to="/news">Actualités</Link>
        <br />
      </nav>
    </div>
  );
};

export default Home;
