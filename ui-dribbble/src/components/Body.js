import React from 'react';
import Card from './Card';

const Body = () => {
  const data = [
    {
      id: 1,
      name: 'Apple Inc.',
      logo: 'http://pngimg.com/uploads/apple_logo/apple_logo_PNG19690.png',
      time: '02d:15h:54m',
      description: 'iOS 10 Lead Team Design',
      teams: 89,
      budget: '$88.5m',
      success: '15.2%',
      color: true,
    },
    {
      id: 2,
      name: 'Puma Inc.',
      logo:
        'https://www.pinclipart.com/picdir/middle/537-5375013_puma-logo-png-transparent-images-puma-logo-transparent.png',
      time: '10d:21h:34m',
      description: 'Fall Winter 2016 commercial',
      teams: 109,
      budget: '$14.5m',
      success: '5.9%',
      color: true,
    },
    {
      id: 3,
      name: 'linkedIn',
      logo: 'http://pngimg.com/uploads/linkedIn/linkedIn_PNG32.png',
      time: '23d:05h:17m',
      description: 'linkedIn Job Portal',
      teams: 642,
      budget: '$10.5m',
      success: '28.2%',
      color: true,
    },
    {
      id: 4,
      name: 'Evenote Corp.',
      logo: 'https://www.iconspng.com/uploads/evernote-elephant-icon-logo.png',
      time: '02m:20d:15h',
      description: 'Full Product Design',
      teams: 856,
      budget: '$8.7m',
      success: '67.4%',
      color: false,
    },
    {
      id: 5,
      name: 'Twitter Inc.',
      logo: 'http://pngimg.com/uploads/twitter/twitter_PNG34.png',
      time: '02m14d:6h',
      description: 'Mobile Clients Design',
      teams: 964,
      budget: '$5m',
      success: '10.3%',
      color: false,
    },
    {
      id: 6,
      name: 'YouTube LLC.',
      logo: 'http://pngimg.com/uploads/youtube/youtube_PNG19.png',
      time: '03m:10d:22h',
      description: 'Innovative Product Monetization',
      teams: 230,
      budget: '$4.9m',
      success: '39.2%',
      color: false,
    },
  ];
  return (
    <div className='body'>
      <div className='card-section'>
        {data.map((content) => (
          <Card key={content.id} content={content} />
        ))}
      </div>
    </div>
  );
};

export default Body;
