import React, { useEffect, useState } from 'react';
import stadiumData from './MapdummyData'; // 더미 데이터 가져오기
import KakaoMap from '../KakaoMap/KakaoMap'; // KakaoMap.jsx 가져오기

const MapData = () => {
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    // window.kakao가 정의되어 있는지 확인
    if (window.kakao && window.kakao.maps) {
      window.kakao.maps.load(() => {
        const geocoder = new window.kakao.maps.services.Geocoder();

        const fetchCoordinates = async () => {
          const coordinatesArray = await Promise.all(
            stadiumData.map((stadium) => {
              return new Promise((resolve, reject) => {
                const fullAddress = `${stadium.addressLarge} ${stadium.addressSmall} ${stadium.stadiumName}`;
                geocoder.addressSearch(fullAddress, (result, status) => {
                  if (status === window.kakao.maps.services.Status.OK) {
                    console.log(`주소 검색 결과: ${fullAddress} => 위도: ${result[0].y}, 경도: ${result[0].x}`);
                    resolve({
                      lat: result[0].y,
                      lng: result[0].x,
                      stadiumName: stadium.stadiumName,
                    });
                  } else {
                    console.error(`주소 검색 실패: ${fullAddress}`);
                    reject(new Error(`주소를 찾을 수 없습니다: ${fullAddress}`));
                  }
                });
              });
            })
          );
          setCoordinates(coordinatesArray);
        };

        fetchCoordinates();
      });
    } else {
      console.error('Kakao API가 로드되지 않았습니다.');
    }
  }, []); // 빈 배열로 설정하여 컴포넌트가 마운트될 때만 실행

  return (
    <div>
      {coordinates.map((coord, index) => (
        <div key={index}>
          <h2>{coord.stadiumName}</h2>
          <KakaoMap latitude={coord.lat} longitude={coord.lng} />
        </div>
      ))}
    </div>
  );
};

export default MapData;
