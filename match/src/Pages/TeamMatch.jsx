import React from 'react';
import MatchPoints from '../components/MatchPoints/MatchPoints';
import StadiumInfo from '../components/Stadiuminfo/StadiumInfo';
import TeamPreview from '../components/TeamPreview/TeamPreview';
import TeamMatchRules from '../components/TeamMatchRules/TeamMatchRules';
// import LeagueManners from '../components/LeagueManners/LeagueManners';
import RefundPolicy from '../components/RefundPolicy/RefundPolicy';
import MatchDetails from '../components/MatchDetails/MatchDetails';
import ContentHeader from '../components/ContentHeader/ContentHeader';
import styles from './TeamMatch.module.css'; 

const TeamMatchResult = () => {
  return (
    <div className={styles.matchPage}>
      <ContentHeader />
      <div className={styles.mainContent}>
        <div className={styles.leftSection}>
          <MatchPoints />
          <TeamPreview />
          <StadiumInfo/>
          <TeamMatchRules />
          {/* <LeagueManners /> */}
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

export default TeamMatchResult;
