const container = document.getElementById('map');
const options = {
  center: new kakao.maps.LatLng(37.518609116709285, 127.03270458882795),
  level: 3,
  draggable: false,
};

const map = new kakao.maps.Map(container, options);
map.setMinLevel(3);
map.setMaxLevel(3);
// 마커를 생성합니다
const marker = new kakao.maps.Marker({
    position: options.center
});

// 인포윈도우로 장소에 대한 설명을 표시합니다
const infowindow = new kakao.maps.InfoWindow({
  content: '<div style="width:150px;text-align:center;padding:6px 0;">토브헤세드<br><a href="https://map.kakao.com/link/map/토브헤세드,37.518609116709285, 127.03270458882795" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/토브헤세드,37.518609116709285, 127.03270458882795" style="color:blue" target="_blank">길찾기</a></div>'
});

infowindow.open(map, marker);

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);