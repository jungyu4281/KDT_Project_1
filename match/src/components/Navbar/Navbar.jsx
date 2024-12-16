import React, { useState } from "react";
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import NavbarSearch from "../NavbarSearch/NavbarSearch";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 햄버거 메뉴 상태
  const [isSearchOpen, setIsSearchOpen] = useState(false); // 검색 모달 상태

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => setIsSearchOpen(false);

  return (
    <div className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* 좌측: 햄버거 메뉴와 로고 */}
        <div className={styles.leftSection}>
          <img
            src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_hamburger.svg"
            alt="Hamburger Menu"
            className={styles.hamburgerButton}
            onClick={openMenu}
          />
          <a href="/">
            <img
              src="https://d31wz4d3hgve8q.cloudfront.net/static/img/logo.svg"
              alt="플랩풋볼"
              className={styles.logo}
            />
          </a>
        </div>

        {/* 우측: 검색창과 기타 아이콘 */}
        <div className={styles.rightSection}>
          <div className={styles.searchBar} onClick={openSearch}>
            <img
              src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_search.svg"
              alt="Search"
              className={styles.searchIcon}
            />
            <input
              type="text"
              placeholder="지역, 구장, 팀 이름으로 찾기"
              className={styles.searchInput}
              disabled
            />
          </div>
          <a href="/mypage/myplab/">
            <img
              src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_club.svg"
              alt="Shield"
              className={styles.icon}
            />
          </a>
          <a href="/mypage/">
            <img
              src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_my.svg"
              alt="My PlabFootball"
              className={styles.icon}
            />
          </a>
          {/* 캘린더 아이콘 추가 */}
          <a href="/calendar" className={styles.calendarLink}>
            <img
              src="https://d31wz4d3hgve8q.cloudfront.net/media/ic_calendar.svg"
              alt="Calendar"
              className={styles.icon}
            />
          </a>
        </div>
      </div>

      {/* 햄버거 메뉴 모달 */}
      {isMenuOpen && <NavbarMenu closeMenu={closeMenu} />}

      {/* 검색 모달 */}
      {isSearchOpen && <NavbarSearch closeSearch={closeSearch} />}
    </div>
  );
};

export default Navbar;
