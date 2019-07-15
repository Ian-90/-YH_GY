// Get the modal
const modal = document.getElementById("modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const img = document.getElementById("img_1");
const modalImg = document.getElementById("modal_inner_img");

img.onclick = function () {
  console.log(this)
  modal.style.display = "block";
  modalImg.src = this.src;
}

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close_img")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}