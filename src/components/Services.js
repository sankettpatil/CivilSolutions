import React from 'react';
import styles from './Services.module.css';

const servicesData = [
  { id: 1, title: 'Consulting', description: 'Expert project management and design consultation to bring your vision to life.' },
  { id: 2, title: 'Building & Contracting', description: 'High-quality construction services for commercial and residential projects.' },
  { id: 3, title: 'Real Estate & Brokering', description: 'Comprehensive property solutions, including buying, selling, and leasing.' },
  { id: 4, title: 'Civil Engineering', description: 'Innovative and sustainable civil engineering solutions for the modern world.' },
];

const Services = () => {
  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.sectionTitle}>Our Services</h2>
      <div className={styles.servicesGrid}>
        {servicesData.map(service => (
          <div key={service.id} className={styles.serviceBlock}>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
            <a href="#learn-more" className={styles.learnMoreLink}>Learn More →</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
