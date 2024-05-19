import React from 'react';
import '../assets/styles/home.css';

export const Home = () => {
  return (
    <div className='home-container'>
      <img
        src='./src/assets/home-page.jpg'
        alt='Graffiti on a wall'
        width='2408'
        height='1208'
        className='home-image'
      />
      <div className='text-container'>
        <h1 className='title'>Title</h1>
        <p className='description'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
          excepturi?
        </p>
        <p className='breadText'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere,
          laboriosam a. Ipsum, consectetur esse voluptates exercitationem fugit
          laudantium omnis laboriosam?
        </p>
      </div>
    </div>
  );
};
