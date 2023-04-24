let projpic = document.querySelector("#proj-pic");
let subpic = document.querySelectorAll(".small");

for (let i = 0; i < subpic.length; i++) {
  subpic[i].addEventListener("click", changePic);
}

function changePic() {
  let newPic = this.src;
  projpic.setAttribute("src", newPic);
}
