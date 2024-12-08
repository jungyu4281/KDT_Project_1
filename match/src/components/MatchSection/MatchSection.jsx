import React from 'react';
import styles from './MatchSection.module.css';

const MatchSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionTitle}>
          <h3>매치 데이터</h3>
        </div>
      </div>

      <div className={styles.sectionBody}>
        <div className={styles.teamSelect}>
          <div className={`${styles.teamSelectAll} ${styles.teamSelectSelected}`}>
            <div>전체</div>
            <p>아마추어3</p>
          </div>
          <div className={styles.teamSelectColor}>
            <div className={styles.teamSelectColorRED}></div>
            <p>아마추어3</p>
          </div>
          <div className={styles.teamSelectColor}>
            <div className={styles.teamSelectColorYELLOW}></div>
            <p>아마추어3</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatchSection;
