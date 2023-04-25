let mainpic = document.querySelector(".main_pic");
let subpic = document.querySelectorAll(".small");
const moviedesign_container = document.querySelector(".project_container");

window.onload = () => {
  setTimeout(function () {
    moviedesign_container.style.display = "block";
  }, 200);
};

for (let i = 0; i < subpic.length; i++) {
  subpic[i].addEventListener("click", changePic);
}

function changePic() {
  let newPic = this.src; // 클릭 이벤트가 발생한 대상의 src 속성 값을 가져옴
  mainpic.setAttribute("src", newPic);
}

const develope_item = document.querySelectorAll(".develope_item");
const moviedesign_items = document.querySelector("#moviedesign_items");
const arrows = document.querySelectorAll(".arrow");

let i = 0;

moviedesign_items = develope_item[0];

arrows.forEach((e) => {
  e.addEventListener("click", (e) => {
    if (e.target.id === "left") {
      i--;
      if (i < 0) {
        i = develope_item.length - 1;
      }
    } else if (e.target.id === "right") {
      i++;
      if (i > develope_item.length) {
        i = 0;
      }
    }
    develope_item[i];
  });
});
