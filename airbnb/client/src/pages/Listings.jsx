
import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import propertiesData from "../data/dummyProperties";
import PropertyCard from "../components/PropertyCard";
import { SaveContext } from "../context/SaveContext";

function Listings() {
  const { addToSaved } = useContext(SaveContext);

  // ✅ GET SEARCH QUERY
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const search = query.get("search") || "";

  // ✅ FILTER STATES
  const [rentRange, setRentRange] = useState("");
  const [distanceRange, setDistanceRange] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");

  // ✅ SORT STATE
  const [sortOption, setSortOption] = useState("");

  // ✅ HELPER FUNCTIONS
  const checkRent = (rent) => {
    if (rentRange === "budget") return rent <= 5000;
    if (rentRange === "standard") return rent > 5000 && rent <= 10000;
    if (rentRange === "premium") return rent > 10000;
    return true;
  };

  const checkDistance = (distance) => {
    const numericDistance = parseFloat(distance);
    if (!distanceRange) return true;
    return numericDistance <= Number(distanceRange);
  };

  const checkRating = (rating) => {
    if (!ratingFilter) return true;
    return rating >= Number(ratingFilter);
  };

  // ✅ FILTER LOGIC
  const filteredProperties = propertiesData.filter((property) => {
    return (
      property.title.toLowerCase().includes(search.toLowerCase()) &&
      checkRent(property.rent) &&
      checkDistance(property.distance) &&
      checkRating(property.rating)
    );
  });

  // ✅ SORT LOGIC
  let sortedProperties = [...filteredProperties];

  if (sortOption === "priceLow") {
    sortedProperties.sort((a, b) => a.rent - b.rent);
  } else if (sortOption === "priceHigh") {
    sortedProperties.sort((a, b) => b.rent - a.rent);
  } else if (sortOption === "ratingHigh") {
    sortedProperties.sort((a, b) => b.rating - a.rating);
  }

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

      {/* ✅ FILTER + SORT UI */}
      <div style={styles.filters}>
        
        {/* Rent */}
        <select onChange={(e) => setRentRange(e.target.value)}>
          <option value="">All Prices</option>
          <option value="budget">₹0 - ₹5000</option>
          <option value="standard">₹5000 - ₹10000</option>
          <option value="premium">₹10000+</option>
        </select>

        {/* Distance */}
        <select onChange={(e) => setDistanceRange(e.target.value)}>
          <option value="">Any Distance</option>
          <option value="1">Within 1 km</option>
          <option value="2">Within 2 km</option>
          <option value="5">Within 5 km</option>
        </select>

        {/* Rating */}
        <select onChange={(e) => setRatingFilter(e.target.value)}>
          <option value="">All Ratings</option>
          <option value="3">3+ Stars</option>
          <option value="4">4+ Stars</option>
          <option value="4.5">4.5+ Stars</option>
        </select>

        {/* ✅ Sorting */}
        <select onChange={(e) => setSortOption(e.target.value)}>
          <option value="">Sort By</option>
          <option value="priceLow">Price: Low to High</option>
          <option value="priceHigh">Price: High to Low</option>
          <option value="ratingHigh">Rating: High to Low</option>
        </select>

      </div>

      {/* Grid Layout */}
      <div style={styles.grid}>
        {sortedProperties.length > 0 ? (
          sortedProperties.map((property) => (
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
  },
  filters: {
    display: "flex",
    gap: "15px",
    padding: "15px",
    background: "#f8f9fa",
    borderRadius: "10px",
    marginBottom: "25px",
    flexWrap: "wrap"
  }
};

export default Listings;
