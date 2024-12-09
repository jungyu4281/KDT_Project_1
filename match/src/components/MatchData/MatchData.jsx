import React from 'react';
import styles from './MatchData.module.css';

const MatchData = () => {
  return (
    <section className={styles.matchDataSection}>
      <div className={styles.matchHeader}>
        <h3>매치 데이터</h3>
      </div>

      <div className={styles.matchTeams}>
        <div className={`${styles.teamItem} ${styles.selected}`}>전체<br />아마추어3</div>
        <div className={styles.teamItem}>
          <span className={styles.teamColor} style={{ backgroundColor: 'red' }}></span>
          아마추어3
        </div>
        <div className={styles.teamItem}>
          <span className={styles.teamColor} style={{ backgroundColor: 'yellow' }}></span>
          아마추어3
        </div>
      </div>

      <div className={styles.levelDistribution}>
        <h4>레벨 분포도</h4>
        <div className={styles.levelChart}>
          <div className={styles.chartBar}>
            <div style={{ height: '0%' }}></div>
            <span>0%</span>
            <span>루키</span>
          </div>
          <div className={styles.chartBar}>
            <div style={{ height: '8%' }}></div>
            <span>8%</span>
            <span>비기너</span>
          </div>
          <div className={styles.chartBar}>
            <div style={{ height: '77%' }}></div>
            <span>77%</span>
            <span>아마추어</span>
          </div>
          <div className={styles.chartBar}>
            <div style={{ height: '15%' }}></div>
            <span>15%</span>
            <span>세미프로</span>
          </div>
        </div>
        <p className={styles.chartLegend}>
          팀 레벨이 맞지 않으면 친구끼리 와도 다른 팀이 될 수 있어요.
        </p>
      </div>
    </section>
  );
};

export default MatchData;
