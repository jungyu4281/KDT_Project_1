import React from 'react';
import MatchPoints from '../components/MatchPoints/MatchPoints';
import StadiumInfo from '../components/Stadiuminfo/StadiumInfo';
import MatchRules from '../components/MatchRules/MatchRules';
import RefundPolicy from '../components/RefundPolicy/RefundPolicy';
import MatchDetails from '../components/MatchDetails/MatchDetails';
import ContentHeader from '../components/ContentHeader/ContentHeader';
import styles from './MatchResult.module.css'; 
import TeamSelector from '../components/TeamSelector/TeamSelector';
import PlayerOfTheMatch from '../components/PlayerOfTheMatch/PlayerOfTheMatch';

const MatchResult = () => {
  return (
    <div className={styles.matchPage}>
      <ContentHeader />
      <div className={styles.mainContent}>
        <div className={styles.leftSection}>
          <PlayerOfTheMatch/>
          <MatchPoints />
          <TeamSelector/>
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

export default MatchResult;
