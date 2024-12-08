import React, { useState } from 'react';
import styles from './MatchPoints.module.css';

const MatchPoints = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <section className={styles.section}>
      {/* 매치 포인트 제목 */}
      <div className={styles.matchPointsTitle}>
        <h4>매치 포인트</h4>
      </div>

      {/* 매치 포인트 리스트 */}
      <div className={styles.matchPointsInfo}>
        <div className={styles.infoList}>
          <img
            src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_info_level.svg"
            className={styles.icon}
            alt="레벨"
          />
          <p>모든 레벨</p>
        </div>
        <div className={styles.infoList}>
          <img
            src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_info_gender.svg"
            className={styles.icon}
            alt="성별"
          />
          <p>남녀 모두</p>
        </div>
        <div className={styles.infoList}>
          <img
            src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_info_stadium.svg"
            className={styles.icon}
            alt="경기 형태"
          />
          <p>6vs6 3파전</p>
        </div>
        <div className={styles.infoList}>
          <img
            src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_info_max_player_cnt.svg"
            className={styles.icon}
            alt="참가 인원"
          />
          <p>10~18명</p>
        </div>
        <div className={styles.infoList}>
          <img
            src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_info_shoes.svg"
            className={styles.icon}
            alt="신발"
          />
          <p
            className={styles.clickable}
            onClick={handleModalOpen}
          >
            풋살화/운동화
          </p>
        </div>
      </div>

      {/* 추가 정보 섹션 */}
      <div className={styles.matchPointsAdditional}>
        <ul>
          <li className={styles.infoList}>
            <img
              src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_info_woman.svg"
              className={styles.icon}
              alt="여성 플래버"
            />
            <div>
              <p>아직 여자 플래버는 0명이에요</p>
              <pre className={styles.infoListTxtSm}>
                <div>
                    서로 배려하며, 함께 즐겨요. 내 힘이 누군가에게 큰 아픔이 될 수있습니다. 
                    </div>
                지나친 몸싸움과 강한 슛을 조심해 주세요.
              </pre>
            </div>
          </li>
        </ul>
      </div>
    {/* 모달 */}
        {isModalOpen && (
            <div className={styles.modalOverlay} onClick={handleModalClose}>
                <div
                    className={styles.modalContent}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className={styles.modalHeader}>
                        <h4>풋살화/운동화</h4>
                        <button
                            className={styles.modalCloseButton}
                            onClick={handleModalClose}
                        >
                            &times;
                        </button>
                    </div>
                    <ul>
                        <li>풋살화 또는 운동화만 착용할 수 있어요</li>
                        <li>축구화를 착용할 경우 경기에 참여할 수 없습니다</li>
                    </ul>
                </div>
            </div>
        )}
    </section>
  );
};

export default MatchPoints;
