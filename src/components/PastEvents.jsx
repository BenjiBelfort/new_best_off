import events from "../data/pastEvents.json";
import PastEventCard from "./PastEventCard";

const PastEvents = () => {
  return (
    <div>
      <h1>Événements Passés</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {events.map((event) => (
          <PastEventCard
            key={event.id}
            id={event.id}
            title={event.title}
            date={event.date}
            photoCover={event.photo_cover}
          />
        ))}
      </div>
    </div>
  );
};

export default PastEvents;
