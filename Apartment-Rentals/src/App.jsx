import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import HomePage from "./components/pages/HomePage";
import SavedFlat from "./components/pages/SavedFlats";
import AddFlats from "./components/pages/AddFlats";
import About from "./components/pages/About";
import NotFound from "./components/Pages/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
<<<<<<< HEAD
      <section className='hero'>
      <Sidebar />
=======
      <section className="hero">
        <Sidebar />
>>>>>>> 303209bced361768258ddf8907088c7dacf86049
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/saved-flats" element={<SavedFlat />} />
          <Route path="/add-flat" element={<AddFlats />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </section>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
