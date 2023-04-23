const moviedesign_container = document.querySelector(".project_container");
const item = document.querySelectorAll(".moviedesign_item");
const detail = document.querySelectorAll(".detail");

window.onload = () => {
  setTimeout(function () {
    moviedesign_container.style.display = "block";
  }, 200);
};

for (i = 0; i < item.length; i++) {
  item[i].addEventListener("click", function () {
    this.lastElementChild.classList.toggle("open");
  });
}
