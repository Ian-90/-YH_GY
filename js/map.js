const container = document.getElementById('map'); 

const options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(127.03274078018724, 37.5185946906307), //지도의 중심좌표.
	level: 3 //지도의 레벨(확대, 축소 정도)
};

const map = new kakao.maps.Map(container, options);

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(127.03274078018724, 37.5185946906307); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);


// 장소 검색 객체를 생성합니다
var ps = new kakao.maps.services.Places(); 

// 키워드로 장소를 검색합니다
ps.keywordSearch('토브헤세드', (result, status) => {
  if (status === kakao.maps.services.Status.OK) {
      console.log(result);
  }})