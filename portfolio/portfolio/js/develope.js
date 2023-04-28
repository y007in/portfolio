let mainpic = document.querySelectorAll(".main_pic");
let subpic = document.querySelectorAll(".small");
const moviedesign_container = document.querySelector(".project_container");
const develope_item = document.querySelectorAll(".develope_item");
const moviedesign_items = document.querySelector("#moviedesign_items");
const arrow = document.querySelectorAll(".arrow");

window.onload = () => {
  setTimeout(function () {
    moviedesign_container.style.display = "block";
  }, 200);
};

// develope_item.forEach((e)=>{
//   let test = e.currentTarget.classList();

// })

for (let i = 0; i < subpic.length; i++) {
  subpic[i].addEventListener("click", changePic);
}

function changePic() {
  let newPic = this.src; // 클릭 이벤트가 발생한 대상의 src 속성 값을 가져옴
  mainpic.setAttribute("src", newPic);
}

develope_item[0].classList.add("on");
let i = 0;

// arrow.forEach((e) => {
//   e.addEventListener("click", (e) => {
//     let slide_on = e.currentTarget.classList;

//     if (e.target.id === "left") {
//       i--;
//       if (slide_on.contains("on")) {
//         slide_on.remove("on");
//       } else {
//         develope_item.forEach(function (e) {
//           e.classList.remove("on");
//         });
//         develope_item[i].classList.add("on");
//       }
//     } else if (e.target.id === "right") {
//       i++;
//       if (slide_on.contains("on")) {
//         slide_on.remove("on");
//       } else {
//         develope_item.forEach(function (e) {
//           e.classList.remove("on");
//         });
//         develope_item[i].classList.add("on");
//       }
//     }
//   });
// });
