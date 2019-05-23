//initial setup
document.addEventListener("DOMContentLoaded", function(){
  let stars = document.querySelectorAll(".star");
  stars.forEach(function(star){
    star.addEventListener("click", setRating);
  });

//make sure we're working with a number and not a string, turning it in a integer
  let rating = parseInt(document.querySelector(".stars").getAttribute("data-rating"));
  let target = stars[rating - 1];
  target.dispatchEvent(new MouseEvent("click"));
});

//
function setRating(ev){
  let span = ev.currentTarget;
  let stars = document.querySelectorAll(".star");
  let match = false;
  let num = 0;
  stars.forEach(function(star){
    if(match){
      star.classList.remove("rated");
    } else {
      star.classList.add("rated");
    }
    if(star === span){
      match = true;
      num = index + 1;
    }
    let starValue = parseInt(star.getAttribute("data-val"));
  })
  document.querySelector(".stars").setAttribute("data-rating", num);
}