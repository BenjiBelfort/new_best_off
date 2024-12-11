import PropTypes from "prop-types";

const EventPartnersSection = ({ title, partnersList }) => {
  if (partnersList.length === 0) return null;

  return (
    <div>
      <h3>{title}</h3>
      <div style={{ display: "flex", gap: "20px" }}>
        {partnersList.map(
          (partner, index) =>
            partner && (
              <div key={index} style={{ textAlign: "center" }}>
                <img
                  src={partner.logo}
                  alt={`Logo de ${partner.name}`}
                  style={{ width: "100px", height: "100px", objectFit: "contain" }}
                />
                <p>
                  <a href={partner.website} target="_blank" rel="noopener noreferrer">
                    {partner.name}
                  </a>
                </p>
              </div>
            )
        )}
      </div>
    </div>
  );
};

EventPartnersSection.propTypes = {
  title: PropTypes.string.isRequired, // Le titre doit être une chaîne de caractères (obligatoire)
  partnersList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired, // Nom du partenaire (obligatoire)
      logo: PropTypes.string.isRequired, // URL du logo (obligatoire)
      website: PropTypes.string, // URL du site (optionnel)
    })
  ).isRequired, // La liste des partenaires doit être un tableau (obligatoire)
};

export default EventPartnersSection;