import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>CampusNest</h2>

      <div>
        <Link style={styles.link} to="/">Home</Link>
        <Link style={styles.link} to="/dashboard">Dashboard</Link>
        <Link style={styles.link} to="/listings">Listings</Link>
        <Link style={styles.link} to="/login">Login</Link>
        <Link style={styles.link} to="/compare">Compare</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    backgroundColor: "#1e293b",
    color: "white"
  },
  link: {
    marginLeft: "20px",
    color: "white",
    textDecoration: "none"
  }
};

export default Navbar;