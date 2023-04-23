//pop
const pop = document.querySelector(".pop");
const back = document.querySelector(".back");

pop.addEventListener("mouseover", () => {
  back.classList.add("slide");
});
pop.addEventListener("mouseleave", () => {
  back.classList.remove("slide");
});
