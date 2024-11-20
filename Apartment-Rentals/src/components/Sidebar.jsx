import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <section className='sidebar'>
      <div className='sidebar-body'>
        <NavLink to='/' className={'sidebar-actions'} id='nav1'>
          {' '}
          ALL FLATS
        </NavLink>

        <NavLink to='/saved-flats' className={'sidebar-actions'} id='nav2'>
          SAVED FLATS
        </NavLink>

        <NavLink to='/add-flats' className={'sidebar-actions'} id='nav3'>
          ADD A FLAT
        </NavLink>

        <NavLink to='/about-us' className={'sidebar-actions'} id='nav4'>
          ABOUT US{' '}
        </NavLink>
      </div>
    </section>
  );
};

export default Sidebar;
