import React, { useState } from "react";
import Modal from "../NavbarModal/NavbarModal"; // NavbarModal 컴포넌트 가져오기
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* 좌측: 햄버거 메뉴와 로고 */}
        <div className={styles.leftSection}>
          <img
            src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_hamburger.svg"
            alt="Hamburger Menu"
            className={styles.hamburgerButton}
            onClick={openModal} // 클릭 시 모달 열기
          />
          <a href="/">
            <img
              src="https://d31wz4d3hgve8q.cloudfront.net/static/img/logo.svg"
              alt="플랩풋볼"
              className={styles.logo}
            />
          </a>
        </div>

        {/* 우측: 방패 아이콘과 검색창, 나머지 아이콘 */}
        <div className={styles.rightSection}>
          {/* 검색창 */}
          <div className={styles.searchBar}>
            <img
              src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_search.svg"
              alt="검색 아이콘"
              className={styles.searchIcon}
            />
            <input
              type="text"
              placeholder="지역, 구장, 팀 이름으로 찾기"
              className={styles.searchInput}
            />
          </div>

          {/* 방패 아이콘 */}
          <a href="/mypage/myplab/">
            <img
              src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_club.svg"
              alt="방패 아이콘"
              className={styles.icon}
            />
          </a>

          {/* 나머지 아이콘 */}
          <a href="/mypage/myplab/">
            <img
              src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_mymatch.svg"
              alt="나의 매치"
              className={styles.icon}
            />
          </a>

          <a href="/mypage/">
            <img
              src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_my.svg"
              alt="나의 플랩풋볼"
              className={styles.icon}
            />
          </a>
        </div>
      </div>

      {/* NavbarModal 컴포넌트 */}
      {isModalOpen && <Modal closeModal={closeModal} />}
    </div>
  );
};

export default Navbar;
