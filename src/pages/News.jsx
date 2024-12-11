import { Link } from "react-router-dom";

const News = () => {
  return (
    <div>
      <h1>Actualités</h1>
      <Link to="/past-events">Voir les événements passés</Link>
    </div>
  );
};

export default News;
