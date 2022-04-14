const domElements = {
  box_before: document.querySelector(".css_description_after"),
  box_after: document.querySelector(".css_description_before"),
};

const { box_before, box_after } = domElements;

document.addEventListener("DOMContentLoaded", () => {
  const box = document.querySelector(".box_sizing");
  if (box.classList.contains("box-size")) {
    box_before.style.display = "none";
    box_after.style.display = "flex";
  } else {
    box_before.style.display = "flex";
    box_after.style.display = "none";
  }
});
const boxSizing = (el) => {
  el.classList.toggle("box-size");
  if (el.classList.contains("box-size")) {
    box_before.style.display = "none";
    box_after.style.display = "flex";
  } else {
    box_before.style.display = "flex";
    box_after.style.display = "none";
  }
};
