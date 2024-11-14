import "./HomePage.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import ListContainer from "./components/ListContainer";

const HomePage = () => {
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

export default HomePage;
