import React from 'react';
import styles from './WhyChooseUs.module.css';
import c1 from './c1.jpeg'; 
import c2 from './c2.jpeg';
import c3 from './c3.jpeg';
import c5 from './c5.jpeg'; 
import c6 from './c6.jpeg'; 

const features = [
  { id: 1, imgSrc: c1, title: 'Innovative Design', info: 'Utilizing modern design principles for optimal efficiency.' },
  { id: 2, imgSrc: c2, title: 'Sustainable Practices', info: 'Committed to eco-friendly engineering solutions.' },
  { id: 3, imgSrc: c3, title: 'Expert Team', info: 'A skilled team experienced in diverse engineering disciplines.' },
  { id: 5, imgSrc: c5, title: 'Quality Assurance', info: 'Strict quality control for every project.' },
  { id: 6, imgSrc: c6, title: 'Cost Efficiency', info: 'Balancing quality with cost-effectiveness.' },
];

const WhyChooseUs = () => {
  return (
    <section className={styles.whyChooseUs}>
      <h2 className={styles.title}>Why Choose Us</h2>
      <div className={styles.featuresGrid}>
        {features.map((feature) => (
          <div key={feature.id} className={styles.featureCard}>
            <img src={feature.imgSrc} alt={feature.title} className={styles.featureImage} />
            <div className={styles.featureContent}>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureInfo}>{feature.info}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
