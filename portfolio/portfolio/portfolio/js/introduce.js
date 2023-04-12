const about = document.querySelector(".about");
const profile = document.querySelector(".profile");
const skill = document.querySelector(".skills");
const activity = document.querySelector(".activity");

window.onload = function () {
  setTimeout(function () {
    about.style.display = "block";
  }, 1000);
  setTimeout(function () {
    profile.style.display = "block";
  }, 2000);
  setTimeout(function () {
    skill.style.display = "block";
  }, 3000);
  setTimeout(function () {
    activity.style.display = "block";
  }, 4000);
};
