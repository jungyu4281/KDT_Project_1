import React, { useState } from "react";
import styles from "./RefundPolicy.module.css";

const RefundPolicy = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className={styles.section}>
      {/* 섹션 헤더 */}
      <div className={styles.sectionHeader} onClick={toggleExpand}>
        <h3 className={styles.sectionTitle}>
          환불 정책
        </h3>
        <span className={isExpanded ? styles.arrowUp : styles.arrowDown}></span>
      </div>

      {/* 섹션 본문 */}
      {isExpanded && (
        <div className={styles.sectionBody}>
          {/* 취소 환불 규정 */}
          <ul className={styles.matchRule}>
            <h4>취소 환불 규정</h4>
            <table>
              <colgroup>
                <col width="70%" />
                <col width="30%" />
              </colgroup>
              <tbody>
                <tr>
                  <td>매치 2일 전</td>
                  <td>무료 취소</td>
                </tr>
                <tr>
                  <td>매치 1일 전</td>
                  <td>80% 환급</td>
                </tr>
                <tr>
                  <td>당일 ~ 매치 시작 90분 전까지</td>
                  <td>20% 환급</td>
                </tr>
                <tr>
                  <td>
                    매치 시작 3시간 ~ 90분 전까지
                    <span className={styles.helptext}>
                      참가자 5인 이하 / 스타터 매치 제외
                    </span>{" "}
                    <span className={styles.helptext}>
                      (겨울 한정 : 2025.02.28 23:59까지 적용)
                    </span>
                  </td>
                  <td>무료 취소</td>
                </tr>
                <tr>
                  <td>매치 시작 90분 이내</td>
                  <td>환불 불가</td>
                </tr>
              </tbody>
            </table>
            <li>
              취소 수수료 발생 시 사용된 포인트를 우선 차감 후 차액을 캐시로 지급
              합니다.
            </li>
            <li>변경은 상단 취소 환불 규정과 동일하게 적용됩니다.</li>
          </ul>

          {/* 그 외 취소 규정 */}
          <ul className={styles.matchRule}>
            <h4>그 외 취소 규정</h4>
            <li>
              신청 후 30분 이내에는 하루 1회에 한해 무료 취소가 가능합니다.
              <b>(단, 매치 시작 90분 이내일 경우 불가)</b>
            </li>
            <li>
              쿠폰 신청자는 매치 시작 90분 전까지 취소 시 쿠폰이 반환됩니다.
            </li>
            <li>
              실 결제금액(쿠폰 제외)을 기준으로 위 규정에 따라 환급됩니다.
            </li>
            <li>
              매치 시작 90분 전까지 최소 인원이 모이지 않을 시 카카오톡 혹은 LMS으로
              안내되며, 자동 전액 환불됩니다. (단, 공지 전 직접 취소하시는 경우 상단
              일반 환불 규정대로 처리됩니다.)
            </li>
          </ul>

          {/* 유의 사항 */}
          <ul className={styles.matchRule}>
            <h4>유의 사항</h4>
            <li>단순 변심으로 취소 혹은 변경을 요청하는 경우 환불이 불가합니다.</li>
            <li>무단 불참하거나 매치 시작 90분 이내에 취소하면 페널티를 받습니다.</li>
            <li>
              참여가 어려울 경우, 원활한 매치 진행을 위해{" "}
              <a
                href="https://www.plabfootball.com/mypage/myplab/"
                style={{ textDecoration: "underline" }}
              >
                마이 플랩
              </a>
              에서 미리 취소해 주세요.
            </li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default RefundPolicy;
