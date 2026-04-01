import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CompareContext } from "../context/CompareContext";

function PropertyCard({ property, onSave }) {
  const navigate = useNavigate();
  const { addToCompare } = useContext(CompareContext);

  return (
    <div
      style={styles.card}
      onClick={() => navigate(`/property/${property.id}`)}
    >
      {/* Left: Image */}
      <img
        src={property.images[0]}
        alt={property.title}
        style={styles.thumbnail}
      />

      {/* Right: Info */}
      <div style={styles.info}>
        <h3>{property.title}</h3>
        <p style={styles.price}>₹{property.rent} / month</p>
        <p>📍 {property.distance}</p>
        <p>⭐ {property.rating}</p>
        <p style={styles.amenities}>
          {property.amenities.join(", ")}
        </p>

        <div style={styles.buttonContainer}>
          {onSave && (
            <button
              style={styles.saveButton}
              onClick={(e) => {
                e.stopPropagation();
                onSave(property);
              }}
            >
              Save ❤️
            </button>
          )}

          <button
            style={styles.compareButton}
            onClick={(e) => {
              e.stopPropagation();
              addToCompare(property);
            }}
          >
            Compare ⚖️
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    display: "flex",
    gap: "15px",
    border: "1px solid #e5e7eb",
    padding: "15px",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "0.3s",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
  },
  thumbnail: {
    width: "150px",
    height: "120px",
    objectFit: "cover",
    borderRadius: "10px"
  },
  info: {
    flex: 1
  },
  price: {
    fontWeight: "bold"
  },
  amenities: {
    fontSize: "14px",
    color: "#555"
  },
  buttonContainer: {
  marginTop: "12px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  width: "100%"
},
  saveButton: {
  width: "100%",
  padding: "10px 0",
  backgroundColor: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "500"
},
  compareButton: {
  width: "100%",
  padding: "10px 0",
  backgroundColor: "#16a34a",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "500"
}
};

export default PropertyCard;