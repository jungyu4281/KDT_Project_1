import React from 'react';
import MatchData from '../components/MatchData';
import MatchPoints from '../components/MatchPoints/MatchPoints';
import StadiumInfo from '../components/Stadiuminfo/StadiumInfo';
import MatchRules from '../components/MatchRules/MatchRules';
import RefundPolicy from '../components/RefundPolicy/RefundPolicy';
import MatchDetails from '../components/MatchDetails/MatchDetails';
import MatchSection from '../components/MatchSection/MatchSection';
import ContentHeader from '../components/ContentHeader/ContentHeader';
import styles from './MatchPage.module.css'; 

const MatchPage = () => {
  return (
    <div className={styles.matchPage}>
      {/* Header Section */}
      <ContentHeader />

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <MatchSection />
          <MatchData
            date="2024-12-05"
            teams={['Team A', 'Team B']}
            score="2-1"
          />
          <MatchPoints />
          <StadiumInfo
            stadium={{
              name: 'Awesome Stadium',
              location: 'Seoul, Korea',
              address: '123 Stadium Road, Seoul',
            }}
          />
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

export default MatchPage;
