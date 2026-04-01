import { useParams } from "react-router-dom";
import properties from "../data/dummyProperties";

function PropertyDetails() {
  const { id } = useParams();

  const property = properties.find(
    (item) => item.id === Number(id)
  );

  if (!property) {
    return <h2 style={{ padding: "20px" }}>Property not found</h2>;
  }

  return (
    <div style={styles.container}>
      <h1>{property.title}</h1>

      {/* Main Image */}
      <img
        src={property.images[0]}
        alt={property.title}
        style={styles.mainImage}
      />

      {/* Image Gallery */}
      <div style={styles.gallery}>
        {property.images.slice(1).map((img, index) => (
          <img key={index} src={img} alt="gallery" style={styles.smallImage} />
        ))}
      </div>

      <div style={styles.infoSection}>
        <p><strong>Rent:</strong> ₹{property.rent}</p>
        <p><strong>Distance:</strong> {property.distance}</p>
        <p><strong>Rating:</strong> ⭐ {property.rating}</p>
        <p><strong>Area:</strong> {property.area} sqft</p>
        <p><strong>Ambience:</strong> {property.ambience}/5</p>
        <p><strong>Amenities:</strong> {property.amenities.join(", ")}</p>
      </div>

      <div style={styles.description}>
        <h3>Description</h3>
        <p>{property.description}</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px"
  },
  mainImage: {
    width: "100%",
    height: "400px",
    objectFit: "cover",
    borderRadius: "10px"
  },
  gallery: {
    display: "flex",
    gap: "10px",
    marginTop: "15px"
  },
  smallImage: {
    width: "150px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "8px"
  },
  infoSection: {
    marginTop: "20px",
    lineHeight: "1.8"
  },
  description: {
    marginTop: "30px"
  }
};

export default PropertyDetails;