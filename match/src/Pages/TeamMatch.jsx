import React from 'react';
import MatchPoints from '../components/MatchPoints/MatchPoints';
import StadiumInfo from '../components/StadiumInfo/StadiumInfo';
import TeamPreview from '../components/TeamPreview/TeamPreview';
import TeamMatchRules from '../components/TeamMatchRules/TeamMatchRules';
import LeagueMannerGuide from '../components/LeagueMannerGuide/LeagueMannerGuide';
import TeamRefundPolicy from '../components/TeamRefundPolicy/TeamRefundPolicy';
import MatchDetails from '../components/MatchDetails/MatchDetails';
import ContentHeader from '../components/ContentHeader/ContentHeader';
import LeagueMatchRule from '../components/LeagueMatchRule/LeagueMatchRule';
import styles from './TeamMatch.module.css'; 
import ResultAndVideo from '../components/ResultAndVideo/ResultAndVideo';

const TeamMatchResult = () => {
  return (
    <div className={styles.matchPage}>
      <ContentHeader />
      <div className={styles.mainContent}>
        <div className={styles.leftSection}>
          <MatchPoints />
          <TeamPreview />
          <ResultAndVideo/>
          <StadiumInfo/>
          <TeamMatchRules />
          <LeagueMatchRule/>
          <LeagueMannerGuide />
          <TeamRefundPolicy />
        </div>
        <div className={styles.rightSection}>
          <MatchDetails />
        </div>
      </div>
    </div>
  );
};

export default TeamMatchResult;
