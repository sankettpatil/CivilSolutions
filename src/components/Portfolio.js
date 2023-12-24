import React from 'react';
import styles from './Portfolio.module.css';

// Import your images or use relative paths
import portfolio1 from './p1.jpeg';
import portfolio2 from './p2.jpeg';
import portfolio3 from './p3.jpeg';
import portfolio4 from './p4.jpeg';
import portfolio5 from './p5.jpeg';
import portfolio6 from './p6.jpeg';

const portfolioImages = [
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5,
  portfolio6
];

const Portfolio = () => {
  return (
    <section className={styles.portfolio}>
      <div className={styles.header}>
        <h2 className={styles.title}>Our Portfolio</h2>
        <p className={styles.tagline}>Our work says it all about us</p>
      </div>
      <div className={styles.imageGrid}>
        {portfolioImages.map((image, index) => (
          <div key={index} className={styles.imageContainer}>
            <img src={image} alt={`Portfolio ${index + 1}`} className={styles.image}/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
