import PastEventCard from "../components/PastEventCard"; // Importation du composant PastEventCard
import NewEvent from "../components/NewEvent";
import events from "../data/pastEvents.json";

const News = () => {
  return (
    <div>
      <h2>Actualités</h2>
      <NewEvent />
      
      <h2>Événements Passés</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {events.map(event => (
          <PastEventCard
            key={event.id} // Clé unique pour React
            id={event.id}
            title={event.title}
            date={event.date}
            photoCover={event.photo_cover} // Utilisation de la propriété photo_cover
          />
        ))}
      </div>
    </div>
  );
};

export default News;
