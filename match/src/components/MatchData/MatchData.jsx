import React from "react";
import styles from "./MatchData.module.css";

const MatchData = () => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h3 className={styles.sectionTitle}>매치 데이터</h3>
      </div>
      <div className={styles.sectionBody}>
        {/* 팀 선택 */}
        <div className={styles.teamSelect}>
          <div className={`${styles.teamSelectItem} ${styles.teamSelected}`}>
            <div>전체</div>
            <p>아마추어3</p>
          </div>
          <div className={styles.teamSelectItem}>
            <div className={styles.teamColorRed}></div>
            <p>아마추어3</p>
          </div>
          <div className={styles.teamSelectItem}>
            <div className={styles.teamColorYellow}></div>
            <p>아마추어3</p>
          </div>
        </div>

        {/* 레벨 분포도 */}
        <div className={styles.matchLevels}>
          <h4 className={styles.sectionSubtitle}>레벨 분포도</h4>
          <ul className={styles.graphBar}>
            {[
              { label: "루키", value: "0%", height: "0%" },
              { label: "스타터", value: "0%", height: "0%" },
              { label: "비기너", value: "8%", height: "8%" },
              { label: "아마추어", value: "77%", height: "77%" },
              { label: "세미프로", value: "15%", height: "15%" },
              { label: "프로", value: "0%", height: "0%" },
            ].map((level, index) => (
              <li key={index} className={styles.graphItem}>
                <div className={styles.graphFrame}>
                  <span
                    className={styles.graphGage}
                    style={{ height: level.height }}
                  ></span>
                </div>
                <span className={styles.graphValue}>{level.value}</span>
                <span className={styles.graphLabel}>{level.label}</span>
              </li>
            ))}
          </ul>
          <p className={styles.levelInform}>
            팀 레벨이 맞지 않으면 친구끼리 와도 다른 팀이 될 수 있어요
          </p>
        </div>

        {/* 플레이 스타일 */}
        <div className={styles.chartSection}>
          <div className={styles.chartHeader}>
          </div>
          <div className={styles.chartContainer}>
            <canvas id="myChart" width="266" height="266"></canvas>
          </div>
        </div>

        {/* POM 정보 */}
        <div className={styles.pomInform}>
          <p>POM이 9명 있어요</p>
          <span>
            POM은 서로 존중하고 격려하며 함께 즐길 수 있도록 매치에 긍정적인
            에너지를 불어넣어 주는 플래버예요
          </span>
        </div>
      </div>
    </section>
  );
};

export default MatchData;
