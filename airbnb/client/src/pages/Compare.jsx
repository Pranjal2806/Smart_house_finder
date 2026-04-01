import { useContext } from "react";
import { CompareContext } from "../context/CompareContext";

function Compare() {
  const { compareList, removeFromCompare } = useContext(CompareContext);

  if (compareList.length === 0) {
    return (
      <h2 style={{ padding: "30px", textAlign: "center" }}>
        No properties selected for comparison.
      </h2>
    );
  }

  // 🔥 BEST VALUES LOGIC
  const minRent = Math.min(...compareList.map(p => p.rent));
  const maxRating = Math.max(...compareList.map(p => p.rating));
  const minDistance = Math.min(...compareList.map(p => parseFloat(p.distance)));

  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ marginBottom: "20px" }}>Compare Properties</h2>

      <div style={styles.wrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.featureCol}>Feature</th>

              {compareList.map((p) => (
                <th key={p.id} style={styles.header}>
                  <img src={p.images[0]} style={styles.image} />

                  <h4>{p.title}</h4>

                  <button
                    style={styles.removeBtn}
                    onClick={() => removeFromCompare(p.id)}
                  >
                    Remove
                  </button>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {/* RENT */}
            <tr>
              <td style={styles.label}>Rent</td>
              {compareList.map((p) => (
                <td
                  key={p.id}
                  style={
                    p.rent === minRent
                      ? styles.bestGreen
                      : styles.cell
                  }
                >
                  ₹{p.rent}
                </td>
              ))}
            </tr>

            {/* DISTANCE */}
            <tr>
              <td style={styles.label}>Distance</td>
              {compareList.map((p) => (
                <td
                  key={p.id}
                  style={
                    parseFloat(p.distance) === minDistance
                      ? styles.bestBlue
                      : styles.cell
                  }
                >
                  {p.distance}
                </td>
              ))}
            </tr>

            {/* RATING */}
            <tr>
              <td style={styles.label}>Rating</td>
              {compareList.map((p) => (
                <td
                  key={p.id}
                  style={
                    p.rating === maxRating
                      ? styles.bestGold
                      : styles.cell
                  }
                >
                  ⭐ {p.rating}
                </td>
              ))}
            </tr>

            {/* AREA */}
            <tr>
              <td style={styles.label}>Area</td>
              {compareList.map((p) => (
                <td key={p.id} style={styles.cell}>
                  {p.area} sqft
                </td>
              ))}
            </tr>

            {/* AMBIENCE */}
            <tr>
              <td style={styles.label}>Ambience</td>
              {compareList.map((p) => (
                <td key={p.id} style={styles.cell}>
                  {p.ambience}/5
                </td>
              ))}
            </tr>

            {/* AMENITIES */}
            <tr>
              <td style={styles.label}>Amenities</td>
              {compareList.map((p) => (
                <td key={p.id} style={styles.cell}>
                  {p.amenities.join(", ")}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    overflowX: "auto"
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    textAlign: "center"
  },

  featureCol: {
    fontWeight: "bold",
    padding: "15px",
    backgroundColor: "#f3f4f6"
  },

  header: {
    padding: "15px",
    backgroundColor: "#f9fafb"
  },

  image: {
    width: "100%",
    height: "120px",
    objectFit: "cover",
    borderRadius: "8px"
  },

  label: {
    fontWeight: "bold",
    backgroundColor: "#f3f4f6",
    padding: "12px"
  },

  cell: {
    padding: "12px"
  },

  removeBtn: {
    marginTop: "8px",
    padding: "5px 10px",
    backgroundColor: "#dc2626",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },

  // 🔥 HIGHLIGHTS
  bestGreen: {
    backgroundColor: "#dcfce7",
    padding: "12px",
    fontWeight: "bold"
  },

  bestGold: {
    backgroundColor: "#fef9c3",
    padding: "12px",
    fontWeight: "bold"
  },

  bestBlue: {
    backgroundColor: "#dbeafe",
    padding: "12px",
    fontWeight: "bold"
  }
};

export default Compare;