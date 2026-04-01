import { useContext } from "react";
import { useLocation } from "react-router-dom"; // ✅ NEW
import propertiesData from "../data/dummyProperties";
import PropertyCard from "../components/PropertyCard";
import { SaveContext } from "../context/SaveContext";

function Listings() {
  const { addToSaved } = useContext(SaveContext);

  // ✅ GET SEARCH QUERY
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const search = query.get("search") || "";

  // ✅ FILTER DATA
  const filteredProperties = propertiesData.filter((property) =>
    property.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "30px" }}>
      
      {/* Hero Section */}
      <div style={styles.hero}>
        <div style={styles.heroOverlay}>
          <h1>Find Your Perfect Stay Near Campus</h1>
          <p>Affordable • Verified • Comfortable</p>
        </div>
      </div>

      <h2 style={{ marginBottom: "20px" }}>
        Available Properties {search && `(Search: "${search}")`}
      </h2>

      {/* Grid Layout */}
      <div style={styles.grid}>
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onSave={addToSaved}
            />
          ))
        ) : (
          <p>No properties found.</p>
        )}
      </div>

    </div>
  );
}

const styles = {
  hero: {
    height: "300px",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=60')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "12px",
    marginBottom: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white"
  },
  heroOverlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: "30px",
    borderRadius: "10px",
    textAlign: "center"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "25px"
  }
};

export default Listings;