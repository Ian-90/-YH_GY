const openImgModal = () => {
  document.getElementById("imgModal").style.display = "block";
}

const closeImgModal = () => {
  document.getElementById("imgModal").style.display = "none";
}

var slideIndex = 1;

const showSlides = (n) => {
  const slides = document.getElementsByClassName("slides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}


showSlides(slideIndex);

const plusSlides = (n) => {
  showSlides(slideIndex += n);
}

const currentSlide = (n) => {
  showSlides(slideIndex = n);
}

function swipeleftHandler( event ){
  // swipeleftHandler 라는 함수가 호출되면
  $( event.target ).on(plusSlides(-1));
      // 이걸 호출한 바로 그 대상이 타겟이 되어 클래스 swipeleft 를 넣어준다.
}

function swiperightHandler( event ){
  // swipeleftHandler 라는 함수가 호출되면
  $( event.target ).on(plusSlides(1));
      // 이걸 호출한 바로 그 대상이 타겟이 되어 클래스 swipeleft 를 넣어준다.
}
  
$( ".modal-content" ).on( "swipeleft", swipeleftHandler );
$( ".modal-content" ).on( "swiperight", swiperightHandler );
