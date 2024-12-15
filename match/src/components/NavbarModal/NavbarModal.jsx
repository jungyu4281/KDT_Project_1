import React from "react";
import styles from "./NavbarModal.module.css";

const Modal = ({ closeModal }) => (
  <div className={styles.modalContainer}>
    <div className={styles.modalMask} onClick={closeModal}></div>
    <div className={styles.modalWrapper}>
      <div className={styles.modalHeader}>
        <p className={styles.modalClose} onClick={closeModal}>
          ✕
        </p>
      </div>
      <div className={styles.modalBody}>
        {/* 소셜 매치 섹션 */}
        <div className={styles.sectionService}>
          <div className={styles.sectionSocial}>
            <div className={styles.sectionTitleWrap}>
              <h4 className={styles.sectionTitle}>소셜 매치</h4>
            </div>
            <ul className={styles.serviceWrapper}>
              <li className={styles.serviceItem}>
                <a href="/explore/61/matches/" className={styles.serviceCategory}>
                  <img
                    src="https://d31wz4d3hgve8q.cloudfront.net/media/ic_nav_social_inside.svg"
                    alt="실내"
                    className={styles.serviceImage}
                  />
                  <p className={styles.serviceName}>실내</p>
                </a>
              </li>
              <li className={styles.serviceItem}>
                <a href="/explore/67/matches/" className={styles.serviceCategory}>
                  <img
                    src="https://d31wz4d3hgve8q.cloudfront.net/media/ic_awning_color.png"
                    alt="그늘막"
                    className={styles.serviceImage}
                  />
                  <p className={styles.serviceName}>그늘막</p>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 팀 섹션 */}
        <div className={styles.sectionTeam}>
          <div className={styles.sectionTitleWrap}>
            <h4 className={styles.sectionTitle}>팀</h4>
          </div>
          <ul className={styles.serviceWrapper}>
            <li className={styles.serviceItem}>
              <a href="/league/" className={styles.serviceCategory}>
                <img
                  src="https://d31wz4d3hgve8q.cloudfront.net/media/ic_nav_team_league.svg"
                  alt="리그"
                  className={styles.serviceImage}
                />
                <p className={styles.serviceName}>리그</p>
              </a>
            </li>
            <li className={styles.serviceItem}>
              <a href="/team/guest-matches/" className={styles.serviceCategory}>
                <img
                  src="https://d31wz4d3hgve8q.cloudfront.net/media/ic_nav_team_recruit_guest.svg"
                  alt="게스트 모집"
                  className={styles.serviceImage}
                />
                <p className={styles.serviceName}>게스트 모집</p>
              </a>
            </li>
          </ul>
        </div>

        {/* 구장 예약 섹션 */}
        <div className={styles.sectionRental}>
          <div className={styles.sectionTitleWrap}>
            <a href="/rental/" className={styles.sectionTitleLink}>
              <h4 className={styles.sectionTitle}>구장 예약</h4>
              <div className={styles.sectionCircle}>
                <p className={styles.sectionArrow}>→</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Modal;
