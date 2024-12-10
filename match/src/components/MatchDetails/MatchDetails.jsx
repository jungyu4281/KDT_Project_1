import React, { useEffect, useState, useRef } from 'react';
import styles from './MatchDetails.module.css';

const MatchDetails = () => {
  const stickyRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (stickyRef.current) {
      const rect = stickyRef.current.getBoundingClientRect();
      setIsSticky(rect.top <= 0); // 스크롤 시 상단에 도달하면 고정
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={stickyRef}
      className={`${styles.matchDetails} ${isSticky ? styles.sticky : ''}`}
    >
      <div className={styles.matchTime}>11월 25일 월요일 15:00</div>
      <div className={styles.matchPlace}>
        <h1 className={styles.title}>
          <a href="/stadium/247/matches/">서울 영등포 EA SPORTS FC(더에프필드) B구장</a>
        </h1>
        <div className={styles.wtgTool}>
          <span className={styles.address}>서울특별시 영등포구 선유로 138</span>
          <span className={styles.copy}>주소 복사</span>
          <span
            id="toggleMap"
            onClick={() => alert('지도를 표시합니다.')}
            className={styles.map}
          >
            지도 보기
          </span>
        </div>
      </div>
      <div className={styles.matchFee}>
        <span className={styles.money}>10,000원</span>
        <span> / 2시간</span>
      </div>
      <div className={styles.matchApplyButton}>
        <p className={styles.buttonText}>다음 일정을 미리 예약하세요</p>
        <p className={styles.cancelInfo}>2일 전까지 무료 취소</p>
        <button className={styles.applyFull}>끝난 매치</button>
      </div>
    </div>
  );
};

export default MatchDetails;
