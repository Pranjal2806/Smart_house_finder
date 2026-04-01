import { useContext } from "react";
import { SaveContext } from "../context/SaveContext";
import PropertyCard from "../components/PropertyCard";

function Dashboard() {
  const { savedProperties } = useContext(SaveContext);

  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ marginBottom: "20px" }}>Saved Properties</h2>

      {savedProperties.length === 0 ? (
        <p>No saved properties yet.</p>
      ) : (
        <div style={styles.grid}>
          {savedProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onSave={() => {}}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "25px"
  }
};

export default Dashboard;