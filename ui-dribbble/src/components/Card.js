import React from 'react';

const Card = ({
  content: { name, logo, time, description, teams, budget, success, color },
}) => {
  return (
    <div className='card'>
      <div className='name'>
        <strong>{name}</strong>
      </div>
      <div className='image'>
        <img src={logo} alt='company-logo' />
      </div>
      <div className={`time ${color ? 'orange' : ''}`}>{time}</div>
      <h5 className='desc'>{description}</h5>
      <div className='info'>
        <div className='teams'>
          <h5>{teams}</h5>
          <p className='text-medium'>teams</p>
        </div>
        <div className='budget'>
          <h5>{budget}</h5>
          <p className='text-medium'>budget</p>
        </div>
        <div className='success'>
          <h5>{success}</h5>
          <p className='text-medium'>success</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
