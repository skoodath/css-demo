const domElements = {
  box_before: document.querySelector(".css_description_after"),
  box_after: document.querySelector(".css_description_before"),
};

const { box_before: before, box_after: after } = domElements;

document.addEventListener("DOMContentLoaded", () => {
  const box = document.querySelector(".box_sizing");
  if (box.classList.contains("box-size")) {
    before.style.display = "none";
    after.style.display = "flex";
  } else {
    before.style.display = "flex";
    after.style.display = "none";
  }
});
const boxSizing = (el) => {
  el.classList.toggle("box-size");
  if (el.classList.contains("box-size")) {
    before.style.display = "none";
    after.style.display = "flex";
  } else {
    before.style.display = "flex";
    after.style.display = "none";
  }
};
