import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PastEventCard = ({ id, title, date, photoCover }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        width: "300px",
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      {photoCover && (
        <img
          src={photoCover}
          alt={title}
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
      )}
      <div style={{ padding: "16px" }}>
        <h2 style={{ fontSize: "18px", margin: "0 0 8px" }}>{title}</h2>
        <p style={{ margin: "0 0 8px", color: "#666" }}>{date}</p>
        <Link
          to={`/past-events/${id}`}
          style={{
            display: "inline-block",
            marginTop: "8px",
            color: "#007BFF",
            textDecoration: "none",
          }}
        >
          Voir les détails
        </Link>
      </div>
    </div>
  );
};

// Définir les PropTypes
PastEventCard.propTypes = {
  id: PropTypes.string.isRequired,       // 'id' est une chaîne obligatoire
  title: PropTypes.string.isRequired,    // 'title' est une chaîne obligatoire
  date: PropTypes.string.isRequired,     // 'date' est une chaîne obligatoire
  photoCover: PropTypes.string,          // 'photoCover' est une chaîne facultative
};

// Valeurs par défaut pour les props facultatives
PastEventCard.defaultProps = {
  photoCover: "", // Par défaut, photoCover est une chaîne vide
};

export default PastEventCard;
