import React, { useState } from 'react';
import styles from './ResultAndVideo.module.css';
import { FaPlay, FaDownload } from "react-icons/fa";

const ResultAndVideo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  // 영상 다운로드 아이콘 인증해서 팀인지 아닌지 구별하고 받아서 보여주고 안보여주는 형식
  // 매치 데이터 (실제로는 API나 props로 받아올 수 있습니다)
  // 얘를 데이터 한줄의 css만 만들고 DB에서 싹다 받는거면? 낫밷일듯? 
  const matchData = [
    { round: 1, team1: { name: '1팀', score: 3, jersey: 'red' }, team2: { name: '2팀', score: 0, jersey: 'yellow' } },
    { round: 2, team1: { name: '1팀', score: 0, jersey: 'red' }, team2: { name: '3팀', score: 2, jersey: 'blue' } },
    { round: 3, team1: { name: '2팀', score: 0, jersey: 'yellow' }, team2: { name: '3팀', score: 2, jersey: 'blue' } },
    { round: 4, team1: { name: '2팀', score: 0, jersey: 'yellow' }, team2: { name: '1팀', score: 3, jersey: 'red' } },
    { round: 5, team1: { name: '3팀', score: 3, jersey: 'blue' }, team2: { name: '1팀', score: 1, jersey: 'red' } },
    { round: 6, team1: { name: '3팀', score: 6, jersey: 'blue' }, team2: { name: '2팀', score: 1, jersey: 'yellow' } },
    { round: 7, team1: { name: '1팀', score: 2, jersey: 'red' }, team2: { name: '2팀', score: 0, jersey: 'yellow' } },
    { round: 8, team1: { name: '1팀', score: 1, jersey: 'red' }, team2: { name: '3팀', score: 0, jersey: 'blue' } },
    { round: 9, team1: { name: '2팀', score: 3, jersey: 'yellow' }, team2: { name: '3팀', score: 0, jersey: 'blue' } },
    // ... 나머지 7개의 경기 데이터
  ];

  const getResult = (team1Score, team2Score) => {
    if (team1Score > team2Score) return '승';
    if (team1Score < team2Score) return '패';
    return '무';
  };

  return (
    <section className={styles.section}>
      <div className={styles.resultAndVideosTitle}>
        <h4>일정 및 결과</h4>
      </div>

      {matchData.map((match, index) => (
        <div key={index} className={styles.resultAndVideos}>
          <div className={styles.resultAndVideosIcon}>
            <div
              className={styles.resultAndVideosImage}
              style={{ backgroundImage: `url(/images/jersey-${match.team1.jersey}.png)` }}
            >
              {match.team1.name}
            </div>
          </div>
          <div className={styles.resultAndVideosRoundsScore}>
            {`${match.round}경기 ${match.team1.name}(${getResult(match.team1.score, match.team2.score)})`}
          </div>
          <div className={styles.resultAndVideosScorebord}>
            <p>{`${match.team1.score}:${match.team2.score}`}</p>
          </div>
          <div className={styles.resultAndVideosIcon}>
            <div
              className={styles.resultAndVideosImage}
              style={{ backgroundImage: `url(/images/jersey-${match.team2.jersey}.png)` }}
            >
              {match.team2.name}
            </div>
          </div>
          <div className={styles.resultAndVideosRoundsScore}>
            {`${match.round}경기 ${match.team2.name}(${getResult(match.team2.score, match.team1.score)})`}
          </div>
          <FaPlay className={styles.resultAndVideosIcons} onClick={openModal} />
          <FaDownload className={styles.resultAndVideosIcons} onClick={openModal}/>
        </div>
      ))}

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <span>매치평가 알림</span>
              <button className={styles.modalCloseButton} onClick={closeModal}>X</button>
            </div>
            <p>영상을 시청 및 다운로드 하시려면 상호평가를 완료해야 합니다.</p>
            <div className={styles.modalButtons}>
              <button className={styles.evaluateButton}>평가하러 가기</button>
              <button className={styles.backButton} onClick={closeModal}>돌아가기</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ResultAndVideo;
