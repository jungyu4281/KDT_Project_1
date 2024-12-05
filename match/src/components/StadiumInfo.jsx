import React from 'react';
import styles from './StadiumInfo.module.css'; // CSS Modules import

const StadiumInfo = ({ stadium }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Stadium Information</h2>
      <p className={styles.info}>
        <strong>Name:</strong> {stadium.name}
      </p>
      <p className={styles.info}>
        <strong>Location:</strong> {stadium.location}
      </p>
      <p className={styles.info}>
        <strong>Address:</strong> {stadium.address}
      </p>
    </div>
  );
};

export default StadiumInfo;