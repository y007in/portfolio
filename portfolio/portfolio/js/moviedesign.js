const moviedesign_container = document.querySelector(".project_container");
const detail = document.querySelectorAll(".detail");
const item = document.querySelectorAll(".moviedesign_item");

window.onload = () => {
  setTimeout(function () {
    moviedesign_container.style.display = "block";
  }, 200);
};

// for (i = 0; i < item.length; i++) {
//   item[i].addEventListener("click", function () {
//     this.lastElementChild.classList.toggle("open");
//   });
// }

// const content = document.querySelectorAll(".content");

// content.forEach(function (e) {
//   e.addEventListener("click", toggleAccordion);
// });

// function toggleAccordion(e) {
//   let detailbox = e.currentTarget.nextElementSibling.classList;
//   // let plus = e.currentTarget.classList;

//   if (detailbox.contains("open")) {
//     detailbox.remove("open");
//     // plus.remove("open");
//   } else {
//     detail.forEach(function (e) {
//       e.classList.remove("open");
//     });
//     detailbox.add("open");
//     // plus.add("open");
//   }
// }

const content = document.querySelectorAll(".content");

item.forEach(function (e) {
  e.addEventListener("click", toggleAccordion);
});

function toggleAccordion(e) {
  let detailbox = e.currentTarget.classList;

  if (detailbox.contains("open")) {
    detailbox.remove("open");
  } else {
    item.forEach(function (e) {
      e.classList.remove("open");
    });
    detailbox.add("open");
  }
}
