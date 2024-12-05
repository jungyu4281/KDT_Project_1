import React from 'react';
import MatchData from '../components/MatchData';
import MatchPoints from '../components/MatchPoints';
import StadiumInfo from '../components/StadiumInfo';
import MatchRules from '../components/MatchRules';

const MatchPage = () => {
  return (
    <div>
      <MatchData
        date="2024-12-05"
        teams={['Team A', 'Team B']}
        score="2-1"
      />
      <MatchPoints
        points={['Goal by Player X', 'Red card for Player Y']}
      />
      <StadiumInfo
        stadium={{
          name: 'Awesome Stadium',
          location: 'Seoul, Korea',
          address: '123 Stadium Road, Seoul',
        }}
      />
      <MatchRules/>
    </div>
  );
};

export default MatchPage;