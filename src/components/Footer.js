// Footer.js
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contactDetails}>
        <p>Contact Us: info@engineeringsolutions.com</p>
        <p>DYP Pimpri,411018</p>
      </div>
      <ul className={styles.socialLinks}>
        <li className={styles.socialLink}><a href="https://facebook.com">Facebook</a></li>
        <li className={styles.socialLink}><a href="https://twitter.com">Twitter</a></li>
        <li className={styles.socialLink}><a href="https://instagram.com">Instagram</a></li>
      </ul>
      <p className={styles.copyRight}>&copy; {new Date().getFullYear()} Engineering Solutions. All rights reserved.</p>
    </footer>
  );
}

export default Footer
