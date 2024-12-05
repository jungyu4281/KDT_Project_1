import React from 'react';

const MatchData = ({ date, teams, score }) => {
  return (
    <div>
      <h1>Match Date: {date}</h1>
      <h2>
        {teams[0]} vs {teams[1]}
      </h2>
      <h3>Score: {score}</h3>
    </div>
  );
};

export default MatchData;