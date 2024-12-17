import React from 'react';
import styles from './StadiumRules.module.css';

const StadiumRules = () => {
  return (
    <div className={styles.stadiumSection}>
      {/* 섹션 제목 */}
      <div className={styles.stadiumHeader}>
        <h3 className={styles.stadiumTitle}>시설 및 이용 규칙</h3>
      </div>

      {/* 시설 리스트 */}
      <div className={styles.stadiumBody}>
        <div className={styles.stadiumFeature}>
          <ul className={styles.infoListWrapper}>
            <li className={styles.infoList}>
              <img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_info_shower.svg" className={styles.icon} alt="샤워실" />
              <p className={styles.infoText}>샤워실</p>
            </li>
            <li className={styles.infoList}>
              <img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_info_park.svg" className={styles.icon} alt="유료주차" />
              <p className={styles.infoText}>유료주차</p>
            </li>
            <li className={styles.infoList}>
              <img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_info_shoes.svg" className={styles.icon} alt="풋살화 대여" />
              <p className={styles.infoText}>풋살화 대여</p>
            </li>
            <li className={styles.infoList}>
              <img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_info_bibs.svg" className={styles.icon} alt="조끼 대여" />
              <p className={styles.infoText}>조끼 대여</p>
            </li>
            <li className={styles.infoList}>
              <img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_info_beverage.svg" className={styles.icon} alt="음료 판매" />
              <p className={styles.infoText}>음료 판매</p>
            </li>
            <li className={styles.infoList}>
              <img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_info_ball.svg" className={styles.icon} alt="풋살공 대여" />
              <p className={styles.infoText}>풋살공 대여</p>
            </li>
            <li className={styles.infoList}>
              <img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_info_toilet.svg" className={styles.icon} alt="화장실" />
              <p className={styles.infoText}>화장실</p>
            </li>
          </ul>

          {/* 잘못된 정보 알림 */}
          <div className={styles.caution}>
            <img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_caution.svg" alt="주의" />
            <p>잘못된 정보가 있나요?</p>
          </div>
        </div>

        {/* 리뷰 */}
        <div className={styles.reviewContainer}>
          <p className={styles.reviewTitle}>최근 3개월 이 구장을 방문한 플래버들이 말해요</p>
          <ul>
            <li className={styles.reviewContent}>
              <img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_stadium_correct.svg" alt="시설 정보" />
              <p>시설 정보가 정확해요</p>
            </li>
            <li className={styles.reviewContent}>
              <img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_stadium_grass.svg" alt="잔디 상태" />
              <p>잔디 상태가 좋아요</p>
            </li>
            <li className={styles.reviewContent}>
              <img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_stadium_rest.svg" alt="대기 공간" />
              <p>대기 공간이 쾌적해요</p>
            </li>
            <li className={styles.reviewContent}>
              <img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_stadium_clean.svg" alt="화장실" />
              <p>화장실이 깨끗해요</p>
            </li>
          </ul>
        </div>

        {/* 꼭 지켜주세요 */}
        <div className={styles.ruleSection}>
          <p className={styles.ruleTitle}>꼭 지켜주세요</p>
          <ul className={styles.ruleList}>
            <li>화장실: 7층 화장실 이용</li>
            <li>풋살화 대여: 가능</li>
            <li>대기실 난방 사용 금지</li>
            <li>대기실 일반 대관, 소셜 매치 공동 사용 가능</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StadiumRules;
