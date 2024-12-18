// MapTab.jsx
import React from "react";
import KakaoMap from "../../../KakaoMap/KakaoMap";
import styles from "./MapTap.module.css";

// 더미 데이터
const LOCATION_DATA = {
  latitude: 37.5252,
  longitude: 126.8964,
  address: "서울특별시 영등포구 선유로 138"
};

const MapTab = () => {
  return (
    <div id="tab-map" className={styles.stadiumLocationContainer}>
      <div className={styles.stadiumSectionHeader}>
        <div className={styles.stadiumSectionTitle}>
          <h3>위치</h3>
        </div>
      </div>
      <div className={styles.stadiumLocationMap}>
        {/* KakaoMap 컴포넌트 */}
        <KakaoMap latitude={LOCATION_DATA.latitude} longitude={LOCATION_DATA.longitude} />
      </div>
      <div className={styles.stadiumLocationAddress}>
        <p>
          {LOCATION_DATA.address}
          <span
            className={styles.stadiumLocationAddressCopy}
            onClick={() => navigator.clipboard.writeText(LOCATION_DATA.address)}
          >
            주소 복사
          </span>
        </p>
      </div>
    </div>
  );
};

export default MapTab;



/*
// 데이터 받아 올 시 
// MapTab.jsx
import React, { useState, useEffect } from "react";
import KakaoMap from "../../../KakaoMap/KakaoMap";
import styles from "./MapTap.module.css";

const MapTab = () => {
  const [locationData, setLocationData] = useState({
    latitude: 0,
    longitude: 0,
    address: "",
  });

  // DB에서 데이터 가져오기
  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        const response = await fetch("/api/location"); // API 엔드포인트
        const data = await response.json();
        setLocationData({
          latitude: data.latitude,
          longitude: data.longitude,
          address: data.address,
        });
      } catch (error) {
        console.error("위치 데이터를 가져오는 데 실패했습니다:", error);
      }
    };

    fetchLocationData();
  }, []);

  return (
    <div id="tab-map" className={styles.stadiumLocationContainer}>
      <div className={styles.stadiumSectionHeader}>
        <div className={styles.stadiumSectionTitle}>
          <h3>위치</h3>
        </div>
      </div>
      <div className={styles.stadiumLocationMap}>
        {locationData.latitude && locationData.longitude ? (
          <KakaoMap latitude={locationData.latitude} longitude={locationData.longitude} />
        ) : (
          <p>지도 로드 중...</p>
        )}
      </div>
      <div className={styles.stadiumLocationAddress}>
        <p>
          {locationData.address || "주소 정보를 가져오는 중..."}
          <span
            className={styles.stadiumLocationAddressCopy}
            onClick={() => navigator.clipboard.writeText(locationData.address || "")}
          >
            주소 복사
          </span>
        </p>
      </div>
    </div>
  );
};

export default MapTab;
*/