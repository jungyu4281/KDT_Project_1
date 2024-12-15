// import React from 'react';
// import MatchData from '../components/MatchData/MatchData';
// import MatchPoints from '../components/MatchPoints/MatchPoints';
// import StadiumInfo from '../components/StadiumInfo/StadiumInfo';
// import MatchRules from '../components/MatchRules/MatchRules';
// import RefundPolicy from '../components/RefundPolicy/RefundPolicy';
// import MatchDetails from '../components/MatchDetails/MatchDetails';
// import ContentHeader from '../components/ContentHeader/ContentHeader';
// import styles from './MatchPage.module.css'; 

// const MatchPageDone = () => {
//   return (
//     <div className={styles.matchPage}>
//       <ContentHeader />
//       <div className={styles.mainContent}>
//         <div className={styles.leftSection}>
//           <MatchPoints />
//           <MatchData />
//           <StadiumInfo/>
//           <MatchRules />
//           <RefundPolicy />
//         </div>
//         {/* Right Section */}
//         <div className={styles.rightSection}>
//           <MatchDetails />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MatchPageDone;



import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ContentHeader from '../components/ContentHeader/ContentHeader';
import MatchPoints from '../components/MatchPoints/MatchPoints';
import TeamPreview from '../components/TeamPreview/TeamPreview';
import ResultAndVideo from '../components/ResultAndVideo/ResultAndVideo';
import StadiumInfo from '../components/StadiumInfo/StadiumInfo';
import MatchRules from '../components/MatchRules/MatchRules';
import RefundPolicy from '../components/RefundPolicy/RefundPolicy';
import TeamMatchRules from '../components/TeamMatchRules/TeamMatchRules';
import LeagueMatchRule from '../components/LeagueMatchRule/LeagueMatchRule';
import LeagueMannerGuide from '../components/LeagueMannerGuide/LeagueMannerGuide';
import TeamRefundPolicy from '../components/TeamRefundPolicy/TeamRefundPolicy';
import MatchDetails from '../components/MatchDetails/MatchDetails';
import PlayerOfTheMatch from '../components/PlayerOfTheMatch/PlayerOfTheMatch';
import TeamStandings from '../components/TeamStandings/TeamStandings';
import MatchData from '../components/MatchData/MatchData';
import styles from './MatchPage.module.css';

const MatchPage = () => {
  const { matchId } = useParams();
  const [matchType, setMatchType] = useState(null); // 매치 타입 (0: 소셜, 1: 팀)
  const [status, setStatus] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [matchStart, setMatchStart] = useState(null);

  // 더미 데이터
  const matchData = {
    match_id: matchId,
    match_type: 1, // 0: 소셜 매치, 1: 팀 매치
    match_start_time: '2024-12-14T15:00:00',
    social_data: { /* 소셜 매치 관련 데이터 */ },
    team_data: {
      standings: [
        { rank: 1, name: '이름없는교회', wins: 4, draws: 0, losses: 2, goalDifference: 3, points: 12, emblemImage: 'https://d31wz4d3hgve8q.cloudfront.net/media/tongue.svg' },
        { rank: 2, name: 'BAU_백석FC', wins: 3, draws: 1, losses: 2, goalDifference: 6, points: 10, emblemImage: 'https://d31wz4d3hgve8q.cloudfront.net/media/lion.svg' },
        { rank: 3, name: '못친소FC', wins: 1, draws: 1, losses: 4, goalDifference: -9, points: 4, emblemImage: 'https://d31wz4d3hgve8q.cloudfront.net/media/emblem/613241_1000017967.jpg' },
      ],
      results: [
        {
          round: 1,
          team1: { name: '이름없는교회', score: 3, emblem: 'https://d31wz4d3hgve8q.cloudfront.net/media/tongue.svg' },
          team2: { name: 'BAU_백석FC', score: 0, emblem: 'https://d31wz4d3hgve8q.cloudfront.net/media/lion.svg' },
        },
        {
          round: 2,
          team1: { name: 'BAU_백석FC', score: 1, emblem: 'https://d31wz4d3hgve8q.cloudfront.net/media/lion.svg' },
          team2: { name: '못친소FC', score: 2, emblem: 'https://d31wz4d3hgve8q.cloudfront.net/media/emblem/613241_1000017967.jpg' },
        },
      ],
    },
  };

  // 매치 데이터 초기화
  useEffect(() => {
    const matchStartTime = new Date(matchData.match_start_time);
    setMatchStart(matchStartTime);
    setMatchType(matchData.match_type);

    // 상태 계산
    const regularEnd = new Date(matchStartTime.getTime() - 10 * 60 * 1000);
    if (matchData.match_type === 0) {
      const earlyBirdEnd = new Date(matchStartTime.getTime() - 10 * 24 * 60 * 60 * 1000);
      if (currentTime < earlyBirdEnd) setStatus('earlyBird');
      else if (currentTime < regularEnd) setStatus('regular');
      else if (currentTime < matchStartTime) setStatus('closed');
      else setStatus('finished');
    } else if (matchData.match_type === 1) {
      if (currentTime < regularEnd) setStatus('regular');
      else if (currentTime < matchStartTime) setStatus('closed');
      else setStatus('finished');
    }
  }, [currentTime, matchData]);

  // 1분마다 현재 시간 갱신
  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  if (matchType === null) return <div>Loading...</div>;

  return (
    <div className={styles.matchPage}>
      <ContentHeader />
      <div className={styles.mainContent}>
        <div className={styles.leftSection}>
          <MatchPoints />
          {matchType === 0 && (
            <>
              {status === 'finished' && <PlayerOfTheMatch />}
              {status !== 'finished' ? <MatchData /> : null}
              <StadiumInfo />
              <MatchRules />
              <RefundPolicy />
            </>
          )}
          {matchType === 1 && (
            <>
              <TeamPreview />
              {status === 'finished' && <TeamStandings standings={matchData.team_data.standings} />}
              {status === 'finished' && <ResultAndVideo results={matchData.team_data.results} />}
              <StadiumInfo />
              <TeamMatchRules />
              <LeagueMatchRule />
              <LeagueMannerGuide />
              <TeamRefundPolicy />
            </>
          )}
        </div>
        <div className={styles.rightSection}>
          <MatchDetails status={status} />
        </div>
      </div>
    </div>
  );
};

export default MatchPage;
