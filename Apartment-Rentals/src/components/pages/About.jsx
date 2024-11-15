import React from 'react';
import whiteLogo from '../../assets/Images/WhiteLogo.png';
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <div className='about-us-page'>
      <img src={whiteLogo} alt='white-colored-logo' />
      <p>
        <span>HOME MATE</span> is a solution designed and developed with love by
        Robert Ortiz and Fabien Dubin <br /> during their bootcamp in web
        development at Ironhack. <br /> This project uses all the knowledge they
        gathered in HTML, CSS, JavaScript, and React.
      </p>
      <p>
        More info on the GitHub page of the project:{' '}
        <Link to='https://github.com/last-orbit/Mini-Project-2'>
          Github Page
        </Link>
      </p>
    </div>
  );
};

export default About;