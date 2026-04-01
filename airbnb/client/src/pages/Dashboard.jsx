
import { useContext } from "react";
import { SaveContext } from "../context/SaveContext";
import PropertyCard from "../components/PropertyCard";

function Dashboard() {
  const { savedProperties, removeFromSaved } = useContext(SaveContext);

  return (
    <div style={styles.container}>
      
      <h2 style={styles.heading}>Saved Properties</h2>

      {savedProperties.length === 0 ? (
        <p>No saved properties yet.</p>
      ) : (
        <div style={styles.grid}>
          {savedProperties.map((property) => (
            <div key={property.id} style={styles.cardWrapper}>
              
              <PropertyCard
                property={property}
                onSave={() => {}}
              />

              <button
                style={styles.removeBtn}
                onClick={() => removeFromSaved(property.id)}
                onMouseOver={(e) => (e.target.style.background = "#d9363e")}
                onMouseOut={(e) => (e.target.style.background = "#ff4d4f")}
              >
                ❌ Remove
              </button>

            </div>
          ))}
        </div>
      )}

    </div>
  );
}

const styles = {
  container: {
    padding: "30px"
  },

  heading: {
    marginBottom: "20px"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "25px",
    alignItems: "stretch" // 🔥 fixes alignment issue
  },

  cardWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%" // 🔥 keeps equal height
  },

  removeBtn: {
    marginTop: "10px",
    padding: "10px",
    backgroundColor: "#ff4d4f",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    width: "100%",
    fontWeight: "bold",
    transition: "0.3s"
  }
};

export default Dashboard;
