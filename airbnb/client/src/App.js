import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Listings from "./pages/Listings";
import PropertyDetails from "./pages/PropertyDetails";
import Dashboard from "./pages/Dashboard";
import Compare from "./pages/Compare";
import Home from "./pages/Home";
function Login() {
  return <h2 style={{ padding: "20px" }}>Login Page</h2>;
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/compare" element={<Compare />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
    </Router>
  );
}

export default App;