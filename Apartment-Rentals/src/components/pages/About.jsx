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
      <div className='links'>
        <div className='Rob'>
          <Link to='https://github.com/last-orbit'>Rob's Personal GitHub</Link>
          <Link to='https://www.linkedin.com/in/dev-ro/'>
            Rob's LinkedIn Page
          </Link>
        </div>
        <div className='Fab'>
          <Link to='https://github.com/FabienDubin'>Fab's Personal GitHub</Link>
          <Link to='https://www.linkedin.com/in/fabien-dubin-46ab121b/'>
            Fab's LinkedIn Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;