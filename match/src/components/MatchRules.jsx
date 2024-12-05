import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import styles from './MatchRules.module.css';
import matchRulesData from '../data/matchRulesData';

const MatchRules = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.rulesContainer}>
      <div className={styles.header} onClick={toggleDropdown}>
        <h2 className={styles.title}>매치 진행 방식</h2>
        <FiChevronRight
          className={`${styles.icon} ${isOpen ? styles.open : ''}`}
        />
      </div>

      {/* 접히고 열리는 내용 */}
      {isOpen && (
        <div className={styles.content}>
          {/* 매치 규칙 섹션 */}
          <section>
            <h3 className={styles.subtitle}>매치 규칙</h3>
            <ul className={styles.list}>
              {matchRulesData.rules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </section>

          {/* 진행 방식 섹션 */}
          <section>
            <h3 className={styles.subtitle}>진행 방식</h3>
            <ul className={styles.list}>
              {matchRulesData.process.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* 알아두면 좋아요 섹션 */}
          <section>
            <h3 className={styles.subtitle}>알아두면 좋아요</h3>
            <ul className={styles.list}>
              {matchRulesData.additional.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      )}
    </div>
  );
};

export default MatchRules;