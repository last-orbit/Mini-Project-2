import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <section className='sidebar'>
      <NavLink to='/' className={'sidebar-actions'}>
        {' '}
        <button>All Flats</button>
      </NavLink>
      <NavLink to='/saved-flats'>
        <button>Saved Flats</button>
      </NavLink>
      <NavLink to='/add-flats'>
        <button>Add a Flat</button>
      </NavLink>
      <NavLink to='/about-us'>
        <button>About Us</button>{' '}
      </NavLink>
    </section>
  );
};

export default Sidebar;
