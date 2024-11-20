import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <section className='sidebar'>
      <div>
        <NavLink to='/' className={'sidebar-actions'}>
          {' '}
          ALL FLATS
        </NavLink>


        <NavLink to='/saved-flats' className={'sidebar-actions'}>
          SAVED FLATS
        </NavLink>


        <NavLink to='/add-flats' className={'sidebar-actions'}>
          ADD A FLAT
        </NavLink>


        <NavLink to='/about-us' className={'sidebar-actions'}>
          ABOUT US{' '}
        </NavLink>
      </div>
    </section>
  );
};

export default Sidebar;
