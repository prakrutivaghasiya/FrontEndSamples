import React from 'react';

const Navbar = () => {
  return (
    <div className='navbar text-white'>
      <div className='company-name text-light'>
        <i className='fas fa-microchip mr-8'></i>{' '}
        <span className='text-white'> RidvigTechno </span>
      </div>
      <ul className='items text-light'>
        <li className='item'>
          <i className='fas fa-home mr-8 text-white'></i> Company
        </li>
        <li className='item active'>
          <i className='fas fa-search mr-8 text-white'></i> Explore{' '}
        </li>
        <li className='sub-item '>Latest Tenders</li>
        <li className='sub-item active'>Best Tenders</li>
        <li className='sub-item'>Team Search</li>
        <li className='item'>
          <i className='fas fa-bell mr-8 text-white'></i> Notifications
        </li>
        <li className='item'>
          <i className='fas fa-envelope mr-8 text-white'></i>Messages
        </li>
        <li className='item'>
          <i className='fas fa-user mr-8 text-white'></i> Profile
        </li>
      </ul>
      <div className='bottom'>
        <button className='btn'>
          <i className='fas fa-cog'></i>
        </button>
        <button className='btn'>
          <i className='fas fa-users'></i>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
