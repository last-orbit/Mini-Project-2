import React from "react";
import SavedFlat from "./SavedFlats";
import AddFlats from "./AddFlats";
import About from "./About";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <button>All Flats</button>
      <button>Saved Flats</button>
      <button>Add a Flat</button>
      <button>About Us</button>
      {/* <SavedFlat />
      <AddFlats />
      <About /> */}
    </section>
  );
};

export default Sidebar;
