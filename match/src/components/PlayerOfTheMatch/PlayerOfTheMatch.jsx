import React from 'react';
import styles from './PlayerOfTheMatch.module.css';

const PlayerOfTheMatch = () => {
  const players = [
    { name: '박재현', color: 'YELLOW', number: 1 },
    { name: '지승', color: 'GREEN', number: 1 },
    { name: '김한성', color: 'RED', number: 6 },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionTitle}>
          <h3>플래버 오브 더 매치</h3>
        </div>
      </div>
      <div className={styles.sectionBody}>
        <div className={styles.plaberOfTheMatch}>
          <img
            src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_plaber_of_the_match_emoji.svg"
            alt="Plaber Of The Match Icon"
            className={styles.plaberIcon}
          />
          <p className={styles.plaberTitle}>Plaber Of The Match</p>
          <div className={styles.plaberBox}>
            {players.map((player, index) => (
              <div key={index} className={styles.player}>
                <div className={`${styles.bibsBack} ${styles[`bibsBack--${player.color}`]}`}>
                  <div>{player.number}</div>
                </div>
                <p className={styles.playerText}>{player.name}</p>
              </div>
            ))}
          </div>
          <span className={styles.plaberDescription}>
            플래버 오브 더 매치는 가장 매너가 좋고<br />긍정적인 분위기를 만들어 준 플래버예요
          </span>
        </div>
        <p className={`${styles.levelInform} ${styles.link}`}>
          플래버 오브 더 매치에 대해 알아보세요
        </p>
      </div>
    </section>
  );
};

export default PlayerOfTheMatch;
