import React from "react";
import styles from "./NavbarSearch.module.css";

const SearchNavbar = ({ closeModal }) => {
  return (
    <div className={styles.searchModal}>
      <div className={styles.modalMask} onClick={closeModal}></div>
      <div className={styles.modalWrapper}>
        <div className={styles.modalHeader}>
          <button className={styles.modalClose} onClick={closeModal}>
            ✕
          </button>
        </div>
        <div className={styles.modalBody}>
          <div className={styles.searchBar}>
            <svg
              width="24"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.icon}
            >
              <circle cx="10.5" cy="10.5" r="6" stroke="#222836"></circle>
              <path stroke="#222836" d="M14.354 14.646l4.949 4.95"></path>
            </svg>
            <input
              type="search"
              placeholder="지역, 구장, 팀 이름으로 찾기"
              maxLength="100"
              autoComplete="off"
              className={styles.searchInput}
            />
            <svg
              width="20"
              height="20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.clear}
            >
              <path
                d="M10 1.667a8.333 8.333 0 100 16.667 8.333 8.333 0 000-16.667zm3.924 11.075l-1.183 1.183-2.742-2.75-2.741 2.75-1.184-1.183L8.824 10 6.074 7.26l1.184-1.184 2.741 2.75 2.742-2.75 1.183 1.184L11.174 10l2.75 2.742z"
                fill="#9EAAB3"
              />
            </svg>
          </div>
          <section className={styles.navigationContainer}>
            <div className={styles.navigationWrapper}>
              <div className={`${styles.navigationItem} ${styles.selected}`}>
                <a href="/stadium">구장</a>
              </div>
              <div className={styles.navigationItem}>
                <a href="/team">팀</a>
              </div>
            </div>
          </section>
          <section className={styles.searchSection}>
            <div className={styles.keywords}>
              <p>최근 검색어</p>
              <ul>
                <li>
                  <label>
                    <span>서울 영등포 EA</span>
                    <span className={styles.remove}></span>
                  </label>
                </li>
                <li>
                  <label>
                    <span>영등포</span>
                    <span className={styles.remove}></span>
                  </label>
                </li>
                <li>
                  <label>
                    <span>애는 착해</span>
                    <span className={styles.remove}></span>
                  </label>
                </li>
              </ul>
            </div>
            <div className={styles.hotKeyword}>
              <h3>인기 키워드</h3>
              <div>
                <span className={styles.badge}>수원</span>
                <span className={styles.badge}>부천</span>
                <span className={styles.badge}>천안</span>
                <span className={styles.badge}>안산</span>
                <span className={styles.badge}>김포</span>
              </div>
            </div>
          </section>
          <section className={styles.section}>
            <h3>새로운 구장</h3>
            <ul className={styles.stadiumList}>
              <li>대구 FC캐논 숲속운동장</li>
              <li>용인 파라 풋살파크 미금점</li>
              <li>천안 케이엔 풋살파크</li>
              <li>경주 조이 풋살장</li>
              <li>경주 현대 풋살장</li>
              <li>진주 대성 풋살장</li>
              <li>고양 불스 풋살파크</li>
              <li>대구 DG 풋살파크</li>
              <li>창원 드림 풋볼파크</li>
              <li>울산 롯데마트 더에프에이 진장점</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SearchNavbar;
