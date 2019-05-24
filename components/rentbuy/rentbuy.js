// typewriter effect for the h3 and h4 tag
let i=0,h3Text;
let j=0,h4Text;

h3Text = " Books and E-TextBooks"
h4Text = "Explore Our Math TextBooks"

function typingH3(){
  if(i<h3Text.length){
    document.getElementById("h3Text").textContent += h3Text.charAt(i);
    i++;
    setTimeout(typingH3,50);
  }
}

function typingH4(){
  if(j<h4Text.length){
    document.getElementById("h4Text").textContent += h4Text.charAt(j);
    j++;
    setTimeout(typingH4,50);
  }
}


////////  mathbooks image gallery  ////////

const onMathImageClick = () => {
  // selecting all of the math books images
  const mathImagesList = document.querySelectorAll(".math_img");
  // to turn my list of images into an array i used the spread operator 
  const mathImage = [...mathImagesList];
// looping through the math images
  mathImage.forEach(image => {
    // event listener for the click 
    image.addEventListener("click", event => {
      mathImageOpen(event.target);
    })
  })
}
// for the expanded image
const mathImageOpen = image => {
  const imageSrc = image.getAttribute("src");
  // this is for the enlarged image when the small image is clicked
  const openedImage = `<div class="math-backdrop"><img src="${imageSrc}" alt=""/>
                       <span class="math-backdrop-close">x</span></div>`;
  // specifying where i want my image to appear on the web page
  document.body.insertAdjacentHTML("beforeend", openedImage);
  mathImageClose();
}

// for the x button to close image
  const mathImageClose = () => {
    const closeButton = document.querySelector(".math-backdrop-close");
    closeButton.addEventListener("click", () => {
      const backdrop = document.querySelector(".math-backdrop");
      backdrop.remove();
    })
  }


// images animating on scroll
const mathImages = document.querySelectorAll(".math_img");

window.onscroll = function() {
  const scroll = document.documentElement.scrollTop || document.body.scrollTop;

  for (var l=0; l<mathImages.length; l++){
    if (scroll >= 120){
      mathImages[l].classList.remove("down");
      mathImages[l].classList.add("up");
    }
    else{
      mathImages[l].classList.add("down");
      mathImages[l].classList.remove("up");
    }
  }
}


// js for the modal section
const modal = document.querySelectorAll(".simpleModal")[0];

// get open modal button when add button is clicked
const modalBtn = document.querySelectorAll(".modalBtn")[0];

// get close btn to close modal when x is clicked
const closeBtn = document.querySelectorAll(".closeBtn")[0];

// listening for open click
modalBtn.addEventListener("click", openModal);

// listening for close click
closeBtn.addEventListener("click", closeModal);

// listening for outside click
window.addEventListener("click", clickOutside);

// function to open the modal
function openModal(){
  // console.log("testing");
  modal.style.display = "block";
}

// function to close the modal
function closeModal(){
  modal.style.display = "none";
}

// function to close the modal if clicked outside the modal for better UX
function clickOutside(e){
  if(e.target == modal){
  modal.style.display = "none";
  }
}

typingH3(); 
typingH4();
onMathImageClick();
