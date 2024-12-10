import React from 'react';
import MatchData from '../components/MatchData/MatchData';
import MatchPoints from '../components/MatchPoints/MatchPoints';
import StadiumInfo from '../components/Stadiuminfo/StadiumInfo';
import MatchRules from '../components/MatchRules/MatchRules';
import RefundPolicy from '../components/RefundPolicy/RefundPolicy';
import MatchDetails from '../components/MatchDetails/MatchDetails';
import ContentHeader from '../components/ContentHeader/ContentHeader';
import styles from './MatchPage.module.css'; 

const MatchPageDone = () => {
  return (
    <div className={styles.matchPage}>
      <ContentHeader />
      <div className={styles.mainContent}>
        <div className={styles.leftSection}>
          <MatchPoints />
          <MatchData />
          <StadiumInfo/>
          <MatchRules />
          <RefundPolicy />
        </div>

        {/* Right Section */}
        <div className={styles.rightSection}>
          <MatchDetails />
        </div>
      </div>
    </div>
  );
};

export default MatchPageDone;
