const content = "Jang YooJin's Portfoilo";
const text = document.querySelector(".textbox");
let i = 0;

function typing() {
  if (i < content.length) {
    let txt = content.charAt(i);
    text.innerHTML += txt;
    i++;
  }
}
setInterval(typing, 200);

setTimeout("location.href = '/html/introduce.html'", 7000);
