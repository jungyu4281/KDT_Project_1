import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi'; // 아이콘 import
import RefundPolicyData from '../data/RefundPolicyData';
import styles from './RefundPolicy.module.css'; // 스타일 import

const RefundPolicy = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className={styles.container}>
      <div className={styles.header} onClick={toggleDropdown}>
        <h1 className={styles.title}>환불 정책</h1>
        <FiChevronRight
          className={`${styles.icon} ${isOpen ? styles.open : ''}`}
        />
      </div>
      {isOpen && (
        <div className={styles.content}>
          {/* 취소 환불 규정 */}
          <section>
            <h2 className={styles.subtitle}>취소 환불 규정</h2>
            <table className={styles.table}>
              <thead>
                <tr>
                </tr>
              </thead>
              <tbody>
                {RefundPolicyData.refundRules.map((rule, index) => (
                  <tr key={index}>
                    <td>{rule.time}</td>
                    <td>{rule.refund}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* 취소 수수료 발생 시 문구 추가 */}
            <ul className={styles.list}>
              {RefundPolicyData.refundFeeDescription.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </section>

          {/* 그 외 환불 규정 */}
          <section>
            <h2 className={styles.subtitle}>그 외 환불 규정</h2>
            <ul className={styles.list}>
              {RefundPolicyData.additionalRules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </section>

          {/* 유의 사항 */}
          <section>
            <h2 className={styles.subtitle}>유의 사항</h2>
            <ul className={styles.list}>
              {RefundPolicyData.notes.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          </section>

          {/* 강수 환불 규정 */}
          <section>
            <h2 className={styles.subtitle}>강수 환불 규정</h2>
            <ul className={styles.list}>
              {RefundPolicyData.weatherRules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </section>

          {/* 취소 방법 */}
          <section>
            <h2 className={styles.subtitle}>취소 방법</h2>
            <ul className={styles.list}>
              {RefundPolicyData.refundMethod.map((method, index) => (
                <li
                  key={index}
                  dangerouslySetInnerHTML={{ __html: method }}
                />
              ))}
            </ul>
          </section>
        </div>
      )}
    </div>
  );
};

export default RefundPolicy;