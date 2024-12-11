import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Accueil</h1>
      <nav>
        <Link to="/news">Actualités</Link>
        <br />
        <Link to="/past-events">Événements passés</Link>
      </nav>
    </div>
  );
};

export default Home;
