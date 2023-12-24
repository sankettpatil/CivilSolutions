

import React, { useState, useEffect } from 'react';
import styles from './Testimonials.module.css';


import person1 from './user1.png';
import person2 from './user2.png';
import person3 from './user3.png';
import person4 from './user4.jpeg';
import person5 from './user5.jpg';
import person6 from './user6.jpeg'

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);
  const testimonialsData = [
    {
      name: 'John Doe',
      position: 'Civil Engineer',
      testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor tgwrgw wfw53tgwg .',
      image: person1,
    },
    {
      name: 'Jane Smith',
      position: 'Structural Engineer',
      testimonial: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      image: person2,
    },
    {
      name: 'Bob Johnson',
      position: 'Environmental Engineer',
      testimonial: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: person3,
    },
    {
      name: 'Alice Williams',
      position: 'Transportation Engineer',
      testimonial: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco afsaef sfafafa eqwr werfwef wfww .',
      image: person4,
    },
    {
      name: 'Charlie Davis',
      position: 'Geotechnical Engineer',
      testimonial: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      image: person5,
    },
    {
      name: 'Eva Johnson',
      position: 'Water Resources Engineer',
      testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor, quam non efficitur suscipit, ex risus semper libero.',
      image: person6,
    },
  
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 3) % testimonialsData.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [testimonialsData.length]);

  return (
    <section className={`${styles.testimonials} ${styles.darkTheme}`}>
      <h2>Client Testimonials</h2>
      <div className={styles.testimonialsContainer}>
        <div className={styles.testimonialPair}>
          {testimonialsData.slice(startIndex, startIndex + 3).map((testimonial, index) => (
            <div key={index} className={styles.testimonialItem}>
              <img src={testimonial.image} alt={testimonial.name} className={styles.testimonialImage} />
              <p className={styles.testimonialText}>{testimonial.testimonial}</p>
              <p className={styles.testimonialAuthor}>{testimonial.name}</p>
              <p className={styles.testimonialPosition}>{testimonial.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;