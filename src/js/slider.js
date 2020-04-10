//const gridButton = document.querySelector(".grid");
//const slider = document.querySelector(".slider");
//gridButton.addEventListener("click", () => {
//slider.classList.remove("slider--list");
//slider.classList.add("slider--grid");
//});

//const listButton = document.querySelector(".list");

//listButton.addEventListener("click", () => {
//slider.classList.add("slider--list");
//slider.classList.remove("slider--grid");
//});
const heart = document.querySelector(".like");

heart.addEventListener("click", function () {
  heart.setAttribute("src", "/like-hover.21428334.png");
});

const heart2 = document.querySelector(".like__middle");

heart2.addEventListener("click", function () {
  heart2.setAttribute("src", "/like-hover.21428334.png");
});

const heart3 = document.querySelector(".like__left");

heart3.addEventListener("click", function () {
  heart3.setAttribute("src", "/like-hover.21428334.png");
});
