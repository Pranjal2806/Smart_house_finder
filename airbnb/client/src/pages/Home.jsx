import { useNavigate } from "react-router-dom";
import { useState } from "react";
import properties from "../data/dummyProperties";
import PropertyCard from "../components/PropertyCard";

function Home() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  // show only first 4 properties
  const featured = properties.slice(0, 4);

  return (
    <div style={{ padding: "20px" }}>
      
      {/* Hero Section */}
      <div style={styles.hero}>
        <div style={styles.overlay}>
          <h1>Find Your Perfect Stay Near Campus</h1>
          <p>Affordable • Verified • Comfortable</p>

          {/* 🔍 Search Bar */}
          <div style={styles.searchBox}>
            <input
              type="text"
              placeholder="Search PG, flat, 2BHK..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={styles.input}
            />

            <button
              style={styles.searchButton}
              onClick={() => navigate(`/listings?search=${search}`)}
            >
              Search
            </button>
          </div>

          <button
            style={styles.button}
            onClick={() => navigate("/listings")}
          >
            Explore Listings
          </button>
        </div>
      </div>

      {/* Featured Listings */}
      <h2 style={{ margin: "30px 0 20px" }}>Featured Properties</h2>

      <div style={styles.grid}>
        {featured.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            onSave={() => {}}
          />
        ))}
      </div>

    </div>
  );
}

const styles = {
  hero: {
    height: "400px",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=60')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white"
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: "30px",
    borderRadius: "10px",
    textAlign: "center"
  },
  button: {
    marginTop: "15px",
    padding: "10px 20px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },

  /* 🔍 NEW STYLES */
  searchBox: {
    marginTop: "20px",
    display: "flex",
    gap: "10px",
    justifyContent: "center"
  },
  input: {
    padding: "10px",
    width: "250px",
    borderRadius: "6px",
    border: "none",
    outline: "none"
  },
  searchButton: {
    padding: "10px 15px",
    backgroundColor: "#16a34a",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "20px"
  }
};

export default Home;