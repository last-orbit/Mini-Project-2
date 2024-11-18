import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import HomePage from "./components/pages/HomePage";
import SavedFlat from "./components/pages/SavedFlats";
import AddFlats from "./components/pages/AddFlats";
import About from "./components/pages/About";
import NotFound from "./components/Pages/NotFound";
import ApartmentBase from "./assets/Data.json";
import DetailPage from "./components/pages/DetailPage";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const [apartments, setApartments] = useState(ApartmentBase.results);
  const [favoriteFlats, setFavoriteFlats] = useState([]);

  //Submit Handler

  const handleAddApartment = (newApartment) => {
    setApartments((prev) => [...prev, newApartment]);
  };

  // Managing favorites
  function addToFav(id) {
    console.log(`Flat with id ${id} has been added to favorites`);
    let favoriteFlat;
    const filteredFlats = apartments.filter((apartment) => {
      if (apartment.id === id) {
        // In that case it removes the fav from the array
        favoriteFlat = apartment;
        return false;
      }
      return true;
    });
    //Removing the flat from the main list
    setApartments(filteredFlats); // To see with Joshua change the button color instead of removing the item from the main list
    setFavoriteFlats([favoriteFlat, ...favoriteFlats]);
    console.log(favoriteFlats);
  }

  return (
    <BrowserRouter>
      <Navbar />
      <section className="hero">
        <Sidebar />
        <Routes>
          <Route
            path="/"
            element={<HomePage apartments={apartments} addToFav={addToFav} />}
          />
          <Route
            path="/saved-flats"
            element={
              <SavedFlat favoriteFlats={favoriteFlats} addToFav={addToFav} />
            }
          />
          <Route
            path="/add-flats"
            element={<AddFlats handleAddApartment={handleAddApartment} />}
          />
          <Route path="/about-us" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/detail-page/:apartmentId" element={<DetailPage apartments={apartments} />} />
        </Routes>
      </section>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
