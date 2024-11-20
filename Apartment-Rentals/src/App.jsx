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
import { Route, Routes, useNavigate } from "react-router-dom";
import DetailBtn from "./components/listItemComponents/DetailBtn";
import UpdateFlat from "./components/pages/UpdateFlat";

const App = () => {
  const [apartments, setApartments] = useState(ApartmentBase.results);
  const [favoriteFlats, setFavoriteFlats] = useState([]);
  //Submit Handler
  const handleAddApartment = (newApartment) => {
    setApartments((prev) => [newApartment, ...prev]);
  };

  //Backhome
  const navigate = useNavigate();

  // Managing favorites
  function addToFav(id) {
    console.log(`Flat with id ${id} has been added to favorites`);
    let favoriteFlat;
    const filteredFlats = apartments.filter((apartment) => {
      if (apartment.id === id) {
        // In that case it removes the fav from the array
        apartment.favorite = true;
        favoriteFlat = apartment;
        return false;
      }
      return true;
    });
    //Removing the flat from the main list
    setApartments(filteredFlats); // To see with Joshua change the button color instead of removing the item from the main list
    setFavoriteFlats([favoriteFlat, ...favoriteFlats]);
    console.log([favoriteFlat, ...favoriteFlats]);
  }

  //Delete a flat from the array
  function handleDelete(apartmentToDelete) {
    console.log("flat has been deleted", apartmentToDelete);
    const filteredFlats = apartments.filter((oneApartment) => {
      if (oneApartment.id !== apartmentToDelete) {
        return true;
      } else {
        return false;
      }
    });
    console.log(filteredFlats);
    setApartments(filteredFlats);
    console.log(apartments);
    navigate("/");
  }

  return (
    <>
      <Navbar />
      <section className="hero">
        <Sidebar />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                apartments={apartments}
                addToFav={addToFav}
                handleDelete={handleDelete}
              />
            }
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
          <Route
            path="/update/:apartmentId"
            element={
              <UpdateFlat
                apartments={apartments}
                setApartments={setApartments}
              />
            }
          />
          <Route path="/about-us" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/detail-page/:apartmentId"
            element={
              <DetailPage apartments={apartments} handleDelete={handleDelete} />
            }
          />
        </Routes>
      </section>
      <Footer />
    </>
  );
};

export default App;
