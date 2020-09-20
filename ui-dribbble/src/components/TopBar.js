import React from 'react';

const TopBar = () => {
  return (
    <div className='top-bar'>
      <div className='option'>
        <strong>Best Tenders</strong>
      </div>
      <div className='menu'>
        <div className='menu-item'>
          <span className='notification mr-2'>5</span>
          <i className='far fa-bell mr-8 text-medium'></i>
        </div>
        <div className='search-bar mr-8'>
          <input type='text' name='Search' placeholder='Search' />
        </div>
        <div className='profile'>
          <img
            src='https://api.adorable.io/avatars/200/abott@adorable'
            alt='profile'
            className='img round-img mr-2'
          />
          <span className='username'>David</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
