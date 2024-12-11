import { Link } from "react-router-dom";
import events from "../data/pastEvents.json";

const PastEvents = () => {
  return (
    <div>
      <h1>Événements Passés</h1>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <Link to={`/past-events/${event.id}`}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PastEvents;
