import React from 'react';
import styles from './HeroSection.module.css';
import videoFile from './video.mp4';

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      {/* Video Background */}
      <video autoPlay loop muted className={styles.videoBackground}>
        <source src={videoFile} type="video/mp4" /> 
        Your browser does not support the video tag.
      </video>

      <nav className={styles.navbar}>
        
        <a href="logo.png" className={styles.logo}>
          Brand Logo
        </a>
        <ul className={styles.navMenu}>
          <li className={styles.navItem}><a href="#services" className={styles.navLink}>Services</a></li>
          <li className={styles.navItem}><a href="#portfolio" className={styles.navLink}>Portfolio</a></li>
          <li className={styles.navItem}><a href="#testimonials" className={styles.navLink}>Testimonials</a></li>
          <li className={styles.navItem}><a href="#contact" className={styles.navLink}>Contact</a></li>
        </ul>
      </nav>

      <div className={styles.heroContent}>
        <h1>Innovative Civil Engineering Solutions</h1>
        <p className={styles.expertiseText}>Expertise in Consulting, Building, and Brokering</p>
        <div className={styles.ctaButtons}>
          <button className={`${styles.button} ${styles.learnMore}`}>Learn More</button>
          <button className={`${styles.button} ${styles.contactUs}`}>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
