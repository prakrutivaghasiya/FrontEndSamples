import React from 'react';
import Card from './Card';

const Body = () => {
  const data = [
    {
      id: 1,
      name: 'Apple Inc.',
      logo: '',
      time: '02d:15h:54m',
      description: 'iOS 10 Lead Team Design',
      teams: 89,
      budget: '$88.5m',
      success: '15.2%',
    },
    {
      id: 2,
      name: 'Nike Inc.',
      logo: '',
      time: '10d:21h:34m',
      description: 'Fall Winter 2016 commercial',
      teams: 109,
      budget: '$14.5m',
      success: '5.9%',
    },
    {
      id: 3,
      name: 'Samsung Electronics Co. Ltd',
      logo: '',
      time: '23d:05h:17m',
      description: 'Samsung Center App Design',
      teams: 642,
      budget: '$10.5m',
      success: '28.2%',
    },
    {
      id: 4,
      name: 'Evenote Corp.',
      logo: '',
      time: '02m:20d:15h',
      description: 'Full Product Design',
      teams: 856,
      budget: '$8.7m',
      success: '67.4%',
    },
    {
      id: 5,
      name: 'Twitter Inc.',
      logo: '',
      time: '02m14d:6h',
      description: 'Mobile Clients Design',
      teams: 964,
      budget: '$5m',
      success: '10.3%',
    },
    {
      id: 6,
      name: 'SoundCloud LLC.',
      logo: '',
      time: '03m:10d:22h',
      description: 'Innovative Product Monetization',
      teams: 230,
      budget: '$4.9m',
      success: '39.2%',
    },
  ];
  return (
    <div className='body'>
      {data.map((content) => (
        <Card key={content.id} content={content} />
      ))}
    </div>
  );
};

export default Body;
