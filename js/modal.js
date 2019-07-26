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

$(".modal").on( "swipeleft", swipeleftHandler );
$(".modal").on( "swiperight", swipeRightHandler );

function swipeleftHandler() {
  return plusSlides(1)
}

function swipeRightHandler() {
  return plusSlides(-1)
}