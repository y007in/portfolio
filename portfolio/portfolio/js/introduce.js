const about = document.querySelector(".about");
const profile = document.querySelector(".profile");
const skill = document.querySelector(".skills");
const activity = document.querySelector(".activity");

window.onload = () => {
  setTimeout(function () {
    about.style.display = "block";
  }, 700);
  setTimeout(function () {
    profile.style.display = "block";
  }, 1400);
  setTimeout(function () {
    skill.style.display = "block";
  }, 2100);
  setTimeout(function () {
    activity.style.display = "block";
  }, 2800);
};

const pop = document.querySelector(".pop");
const back = document.querySelector(".back");

pop.onmouseover = () => {
  back.classList.add("slide");
};
pop.onmouseout = () => {
  back.classList.remove("slide");
};
