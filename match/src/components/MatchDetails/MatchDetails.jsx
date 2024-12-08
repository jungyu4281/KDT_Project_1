import React from 'react';
import styles from './MatchDetails.module.css';

const MatchDetails = () => {
  return (
    <div className={styles.matchDetails}>
      {/* Match Time */}
      <div className={styles.matchTime}>11월 25일 월요일 15:00</div>

      {/* Match Place */}
      <div className={styles.matchPlace}>
        <h1 className={styles.title}>
          <a href="/stadium/247/matches/">
            서울 영등포 EA SPORTS FC(더에프필드) B구장
          </a>
        </h1>
        <div className={styles.wtgTool}>
          <span className={styles.address}>서울특별시 영등포구 선유로 138</span>
          <span id="copy-url1" className={styles.copy}>
            주소 복사
          </span>
          <span
            id="toggleMap"
            onClick={() => alert('지도를 표시합니다.')}
            className={styles.map}
          >
            지도 보기
          </span>
        </div>
        <div className={styles.matchData} >
        </div>
      </div>

      {/* Match Fee */}
      <div className={styles.matchFee}>
        <span className={styles.money}>10,000원</span>
        <span> / 2시간</span>
        <div></div>
      </div>

      {/* Match Apply Button */}
      <div className={styles.matchApplyButton}>
        <p className={styles.Psize}>
          <span className={styles.buttonText}>다음 일정을 미리 예약</span>하세요
        </p>
        <p className={styles.cancelInfo}>2일 전까지 무료 취소</p>
        <button type="button" className={styles.applyFull}>
          <p>끝난 매치</p>
        </button>
      </div>
    </div>
  );
};

export default MatchDetails;
