import './HomePage.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import MainContainer from './components/MainContainer';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <section>
        <Sidebar />
        <MainContainer />
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
