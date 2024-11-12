import './HomePage.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import MainContainer from './components/MainContainer';

const HomePage = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <section id='hero'>
        <Sidebar />
        <MainContainer />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default HomePage;
