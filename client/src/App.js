import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutpage from "./pages/Aboutpage";
import Portfoliopage from "./pages/Portfoliopage";
import Servicespage from "./pages/Servicespage";
import Landingpage from "./pages/Landingpage";
import Blogpage from "./pages/Blogpage";
import { useEffect, useState } from "react";
import { GridLoader } from "react-spinners";
import logo from "./media/logo.png";
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Router>
      <div className="App">
        {loading ? (
          <div className="spinner-page">
            <div className="landingpage-logo">
              <div style={{ backgroundImage: `url(${logo})` }}></div>
              <h1>Khalil's Marketing</h1>
            </div>
            <GridLoader color="#000028" />
          </div>
        ) : (
          <div>
            <Navbar />
            <Routes>
              <Route element={<Homepage />} path="*" />
              <Route element={<Homepage />} exact path="/" />
              <Route element={<Aboutpage />} path="/about" />
              <Route element={<Portfoliopage />} path="/portfolio" />
              <Route element={<Servicespage />} path="/services" />
              <Route element={<Landingpage />} path="/landingpage" />
              <Route element={<Blogpage />} path="/blog" />
            </Routes>

            <Footer />
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
