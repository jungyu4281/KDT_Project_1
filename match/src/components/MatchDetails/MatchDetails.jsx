// import React, { useEffect, useState, useRef, useCallback, useMemo } from 'react'
// import styles from './MatchDetails.module.css'

// const MatchDetails = () => {
//   const stickyRef = useRef(null)
//   const mapRef = useRef(null) // 지도 표시할 div
//   const [isSticky, setIsSticky] = useState(false)
//   const [showMap, setShowMap] = useState(false) // 지도 표시 여부
//   const [status, setStatus] = useState('') // 매치 상태
//   const [currentTime, setCurrentTime] = useState(new Date()) // 현재 시간

//   const matchDate = useMemo(() => new Date('2024-12-11 T15:00:00'), [])
//   const locationInfo = useMemo(
//     () => ({
//       address: '서울특별시 영등포구 선유로 138',
//       lat: 37.5665, // 위도
//       lng: 126.9780, // 경도
//       name: '서울 영등포 EA SPORTS FC(더에프필드) B구장',
//     }),
//     []
//   )

//   const calculateStatus = useCallback(() => {
//     const now = currentTime
//     const diffInMilliseconds = matchDate - now
//     const diffDays = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24))
//     const diffMinutes = Math.floor(diffInMilliseconds / (1000 * 60))

//     if (matchDate < now) {
//       // 매치 날짜가 현재보다 과거인 경우
//       return 'past'
//     } else if (diffDays > 10) {
//       return 'earlyBird'
//     } else if (diffDays >= 0 && diffMinutes > 10) {
//       return 'regular'
//     } else {
//       return 'closed'
//     }
//   }, [matchDate, currentTime])

//   useEffect(() => {
//     const handleScroll = () => {
//       if (stickyRef.current) {
//         const rect = stickyRef.current.getBoundingClientRect()
//         setIsSticky(rect.top <= 0)
//       }
//     }

//     setStatus(calculateStatus())
//     window.addEventListener('scroll', handleScroll)

//     // 1분마다 현재 시간 갱신
//     const interval = setInterval(() => {
//       setCurrentTime(new Date())
//     }, 60000) // 1분 = 60,000ms

//     return () => {
//       window.removeEventListener('scroll', handleScroll)
//       clearInterval(interval)
//     }
//   }, [calculateStatus])

//   const initializeMap = useCallback(() => {
//     if (mapRef.current && window.kakao) {
//       const container = mapRef.current
//       const options = {
//         center: new window.kakao.maps.LatLng(locationInfo.lat, locationInfo.lng),
//         level: 3, // 지도 확대 레벨
//       }
//       const map = new window.kakao.maps.Map(container, options)

//       const markerPosition = new window.kakao.maps.LatLng(locationInfo.lat, locationInfo.lng)
//       const marker = new window.kakao.maps.Marker({ position: markerPosition })
//       marker.setMap(map)
//     }
//   }, [locationInfo.lat, locationInfo.lng])

//   useEffect(() => {
//     if (showMap) {
//       initializeMap()
//     }
//   }, [showMap, initializeMap])

//   const handleToggleMap = () => {
//     setShowMap((prev) => !prev) // 지도 보이기/숨기기 토글
//   }

//   return (
//     <div
//       ref={stickyRef}
//       className={`${styles.matchDetails} ${isSticky ? styles.sticky : ''}`}
//     >
//       <div className={styles.matchTime}>12월 30일 월요일 15:00</div>
//       <div className={styles.matchPlace}>
//         <h1 className={styles.title}>
//           <a href="/stadium/247/matches/">{locationInfo.name}</a>
//         </h1>
//         <div className={styles.wtgTool}>
//           <span className={styles.address}>{locationInfo.address}</span>
//           <span className={styles.copy}>주소 복사</span>
//           <span
//             id="toggleMap"
//             onClick={handleToggleMap}
//             className={styles.map}
//           >
//             지도 보기
//           </span>
//         </div>
//       </div>

//       {/* 지도 표시 영역 */}
//       {showMap && (
//         <div ref={mapRef} className={styles.mapContainer}></div>
//       )}

//       <div className={styles.matchFee}>
//         {status === 'earlyBird' && (
//           <div className={styles.statusBlock}>
//             <div className={styles.contentBlock}>
//               <span className={`${styles.money} ${styles.strikeThrough}`}>
//                 10,000원
//               </span>
//               <br />
//               <span className={styles.money}>6,000원</span>
//               <div className={styles.discountText}>지금 신청하면 5,000원 할인!</div>
//             </div>
//             <button className={styles.applyButton}>신청하기</button>
//           </div>
//         )}

//         {status === 'regular' && (
//           <div className={styles.statusBlock}>
//             <div className={styles.contentBlock}>
//               <span className={styles.money}>10,000원</span>
//               <span> / 2시간</span>
//               <div className={styles.matchend}>매치 시작 10분 전 신청이 마감돼요</div>
//             </div>
//             <button className={styles.applyButton}>신청하기</button>
//           </div>
//         )}

//         {status === 'closed' && (
//           <div className={styles.statusBlock}>
//             <div className={styles.contentBlock}>
//               <span className={styles.money}>10,000원</span>
//               <span> / 2시간</span>
//               <div className={styles.matchClosed}>신청이 마감되었어요</div>
//             </div>
//             <button className={styles.disabledButton} disabled>
//               마감되었습니다
//             </button>
//           </div>
//         )}

//         {status === 'past' && (
//           <div className={styles.statusBlock}>
//             <div className={styles.contentBlock}>
//               <span className={styles.money}>10,000원</span>
//               <span> / 2시간</span>
//               <div className={styles.matchEnded}>종료된 매치입니다</div>
//             </div>
//             <button className={styles.disabledButton} disabled>
//               종료된 매치
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default MatchDetails


import React, { useState, useRef, useEffect, useCallback } from 'react';
import styles from './MatchDetails.module.css';

const MatchDetails = ({ status }) => {
  const stickyRef = useRef(null);
  const mapRef = useRef(null); // 지도 표시할 div
  const [isSticky, setIsSticky] = useState(false);
  const [showMap, setShowMap] = useState(false); // 지도 표시 여부

  const handleScroll = () => {
    if (stickyRef.current) {
      const rect = stickyRef.current.getBoundingClientRect();
      setIsSticky(rect.top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 카카오맵 초기화 함수
  const initializeMap = useCallback(() => {
    if (mapRef.current && window.kakao) {
      const container = mapRef.current; // 지도를 표시할 div
      const options = {
        center: new window.kakao.maps.LatLng(37.5665, 126.9780), // 위도, 경도
        level: 3, // 확대 레벨
      };
      const map = new window.kakao.maps.Map(container, options);

      // 마커 추가
      const markerPosition = new window.kakao.maps.LatLng(37.5665, 126.9780);
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(map);
    }
  }, []);

  useEffect(() => {
    if (showMap) {
      initializeMap();
    }
  }, [showMap, initializeMap]);

  const matchInfo = {
    earlyBird: '지금 신청하면 5,000원 할인!',
    regular: '매치 시작 10분 전 신청 마감',
    closed: '신청이 마감되었습니다',
    finished: '종료된 매치입니다',
  };

  return (
    <div ref={stickyRef} className={`${styles.matchDetails} ${isSticky ? styles.sticky : ''}`}>
      <div className={styles.matchTime}>12월 30일 월요일 15:00</div>
      <div className={styles.matchPlace}>
        <h1 className={styles.title}>
          <a href="/stadium/247/matches/">서울 영등포 EA SPORTS FC(더에프필드)</a>
        </h1>
        <div className={styles.wtgTool}>
          <span className={styles.address}>서울특별시 영등포구 선유로 138</span>
          <span className={styles.copy}>주소 복사</span>
          <span
            className={styles.map}
            onClick={() => setShowMap((prev) => !prev)} // 지도 보이기/숨기기 토글
          >
            {showMap ? '지도 닫기' : '지도 보기'}
          </span>
        </div>
      </div>

      {/* 지도 표시 영역 */}
      {showMap && <div ref={mapRef} className={styles.mapContainer}></div>}

      <div className={styles.matchFee}>
        <div className={styles.contentBlock}>
          <span className={`${styles.money} ${status === 'earlyBird' ? styles.strikeThrough : ''}`}>
            {status === 'earlyBird' ? '10,000원' : '10,000원 / 2시간'}
          </span>
          {status === 'earlyBird' && <span className={styles.money}>6,000원</span>}
          <div className={styles.discountText}>{matchInfo[status]}</div>
        </div>
        <button
          className={status === 'closed' || status === 'finished' ? styles.disabledButton : styles.applyButton}
          disabled={status === 'closed' || status === 'finished'}
        >
          {status === 'closed' ? '마감되었습니다' : status === 'finished' ? '종료된 매치' : '신청하기'}
        </button>
      </div>
    </div>
  );
};

export default MatchDetails;
