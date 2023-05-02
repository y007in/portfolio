let mainpic = document.querySelectorAll(".main_pic");
let subpic = document.querySelectorAll(".small");
const moviedesign_container = document.querySelector(".project_container");
const develope_item = document.querySelectorAll(".develope_item");
const moviedesign_items = document.querySelector("#moviedesign_items");
const arrow = document.querySelectorAll(".arrow");
let left = document.querySelector("#left");
let right = document.querySelector("#right");

window.onload = () => {
  setTimeout(function () {
    moviedesign_container.style.display = "block";
  }, 200);
};

//article 속 이미지들
for (let i = 0; i < subpic.length; i++) {
  subpic[i].addEventListener("click", changePic);
}

function changePic() {
  let newPic = this.src; // 클릭 이벤트가 발생한 대상의 src 속성 값을 가져옴
  mainpic[i].setAttribute("src", newPic);
}

develope_item[0].classList.add("on");
let i = 0;

//article 슬라이드
arrow.forEach((e) => {
  e.addEventListener("click", (e) => {
    let slide_on = e.currentTarget.classList;

    if (e.target.id === "left") {
      if (i > 0) {
        i--;
        if (slide_on.contains("on")) {
          slide_on.remove("on");
        } else {
          develope_item.forEach(function (e) {
            e.classList.remove("on");
          });
          develope_item[i].classList.add("on");
        }
      } else {
        left.setAttribute("disabled", "disabled");
      }
    } else if (e.target.id === "right") {
      if (i < develope_item.length - 1) {
        i++;
        if (slide_on.contains("on")) {
          slide_on.remove("on");
        } else {
          develope_item.forEach(function (e) {
            e.classList.remove("on");
          });
          develope_item[i].classList.add("on");
        }
      } else {
        right.setAttribute("disabled", "disabled");
      }
    }
  });
});
