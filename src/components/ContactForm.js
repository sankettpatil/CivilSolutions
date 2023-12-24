// Updated ContactForm.js with modern design and map integration
import React from 'react';
import { useFormik } from 'formik'; // Import useFormik from formik
import styles from './ContactForm.module.css'; // Updated CSS module
// Import the MapContainer if you are using it
// import MapContainer from './MapContainer'; 

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    onSubmit: values => {
      console.log(values);
      // Submit form values
    },
  });

  return (
    <div className={styles.container}>
      <section className={styles.contactFormSection}>
        <h2 className={styles.contactFormTitle}>Contact Us</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.formControl}>
            <label className={styles.label} htmlFor="name">Name</label>
            <input
              className={styles.input}
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </div>
          <div className={styles.formControl}>
            <label className={styles.label} htmlFor="email">Email</label>
            <input
              className={styles.input}
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          <div className={styles.formControl}>
            <label className={styles.label} htmlFor="message">Message</label>
            <textarea
              className={styles.textarea}
              id="message"
              name="message"
              onChange={formik.handleChange}
              value={formik.values.message}
            />
          </div>
          <button className={styles.button} type="submit">Submit</button>
        </form>
      </section>
      {/* Uncomment below line if MapContainer is set up */}
      {/* <div className={styles.mapContainer}>
        <MapContainer />
      </div> */}
    </div>
  );
};

export default ContactForm;
