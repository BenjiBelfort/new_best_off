import { useParams } from "react-router-dom";
import events from "../data/pastEvents.json";
import partners from "../data/partners.json";
import EventPartnersSection from "../components/EventPartnersSection"

const EventDetail = () => {
  const { eventId } = useParams();
  const event = events.find((event) => event.id === eventId);

  if (!event) {
    return <h1>Événement introuvable</h1>;
  }

  const getPartnersByCategory = (ids) => {
    return ids ? ids.map((id) => partners.find((partner) => partner.id === id)) : [];
  };

  const partnersPartenaire = getPartnersByCategory(event.partenaires?.partenaire || []);
  const partnersInstitutionnel = getPartnersByCategory(event.partenaires?.institutionnel || []);
  const partnersOr = getPartnersByCategory(event.partenaires?.or || []);
  const partnersArgent = getPartnersByCategory(event.partenaires?.argent || []);
  const partnersSponsor = getPartnersByCategory(event.partenaires?.sponsor || []);

  return (
    <div>
      <h1>{event.title}</h1>
      <p>Date : {event.date}</p>
      <p>{event.description}</p>

      <img
        src={event.photo_cover}
        alt={`Photo de couverture pour ${event.title}`}
        style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
      />

      <h2>Galerie de photos</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {event.gallery_photos?.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Photo ${index + 1} pour ${event.title}`}
            style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "8px" }}
          />
        ))}
      </div>

      <h2>Partenaires</h2>
      <EventPartnersSection title="Partenaires" partnersList={partnersPartenaire} />
      <EventPartnersSection title="Institutions publiques" partnersList={partnersInstitutionnel} />
      <EventPartnersSection title="Mécènes Or" partnersList={partnersOr} />
      <EventPartnersSection title="Mécènes Argent" partnersList={partnersArgent} />
      <EventPartnersSection title="Sponsors" partnersList={partnersSponsor} />
    </div>
  );
};

export default EventDetail;
