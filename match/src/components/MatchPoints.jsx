import React from 'react';

const MatchPoints = ({ points }) => {
  return (
    <div>
      <h2>Match Points</h2>
      <ul>
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default MatchPoints;