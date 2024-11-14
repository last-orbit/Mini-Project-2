import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import ListContainer from "./components/ListContainer";

const App = () => {
  return (
    <>
      <Navbar />
      <section className="hero">
        <Sidebar />
        <ListContainer />
      </section>
      <Footer />
    </>
  );
};

export default App
