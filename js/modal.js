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

let startX = null
let endX = null

const touchStart = (event) => {
  event.preventDefault();
  startX = event.changedTouches[0].screenX
}

const touchMove = (event) => {
  event.preventDefault();
}

const touchEnd = () => {
  event.preventDefault();
  endX = event.changedTouches[0].screenX
  if (startX < endX) {
    plusSlides(-1) 
  } else {
    plusSlides(1)
  }
}

document.getElementById("imgModal").addEventListener('touchstart', touchStart)
document.getElementById("imgModal").addEventListener('touchmove', touchMove)
document.getElementById("imgModal").addEventListener('touchend', touchEnd)
