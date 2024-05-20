import React from 'react';
import styles from '../assets/styles/Home.module.css';

export const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <img
        src='./src/assets/home-page.jpg'
        alt='Graffiti on a wall'
        width='2408'
        height='1208'
        className={styles.homeImage}
      />
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
          excepturi?
        </p>
        <p className={styles.breadText}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere,
          laboriosam a. Ipsum, consectetur esse voluptates exercitationem fugit
          laudantium omnis laboriosam?
        </p>
      </div>
    </div>
  );
};
