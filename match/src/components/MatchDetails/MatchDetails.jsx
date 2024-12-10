import React, { useEffect, useState, useRef, useCallback, useMemo } from 'react'
import styles from './MatchDetails.module.css'

const MatchDetails = () => {
  const stickyRef = useRef(null)
  const [isSticky, setIsSticky] = useState(false)
  const [status, setStatus] = useState('')

  const matchDate = useMemo(() => new Date('2024-12-21T15:00:00'), [])

  const calculateStatus = useCallback(() => {
    const now = new Date()
    const diffInMilliseconds = matchDate - now
    const diffDays = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24))
    const diffMinutes = Math.floor(diffInMilliseconds / (1000 * 60))

    if (diffDays > 10) {
      return 'earlyBird'
    } else if (diffDays >= 0 && diffMinutes > 10) {
      return 'regular'
    } else {
      return 'closed'
    }
  }, [matchDate])

  useEffect(() => {
    const handleScroll = () => {
      if (stickyRef.current) {
        const rect = stickyRef.current.getBoundingClientRect()
        setIsSticky(rect.top <= 0)
      }
    }

    setStatus(calculateStatus())

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [calculateStatus])

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
        {status === 'earlyBird' && (
          <div className={styles.statusBlock}>
            <div className={styles.contentBlock}>
              <span className={`${styles.money} ${styles.strikeThrough}`}>
                10,000원
              </span>
              <br />
              <span className={styles.money}>6,000원</span>
              <div className={styles.discountText}>지금 신청하면 5,000원 할인!</div>
            </div>
            <button className={styles.applyButton}>신청하기</button>
          </div>
        )}

        {status === 'regular' && (
          <div className={styles.statusBlock}>
            <div className={styles.contentBlock}>
              <span className={styles.money}>10,000원</span>
              <span> / 2시간</span>
              <div className={styles.matchend}>매치 시작 10분 전 신청이 마감돼요</div>
            </div>
            <button className={styles.applyButton}>신청하기</button>
          </div>
        )}

        {status === 'closed' && (
          <div className={styles.statusBlock}>
            <div className={styles.contentBlock}>
              <span className={styles.money}>10,000원</span>
              <span> / 2시간</span>
              <div className={styles.matchClosed}>신청이 마감되었어요</div>
            </div>
            <button className={styles.disabledButton} disabled>
              마감되었습니다
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default MatchDetails
