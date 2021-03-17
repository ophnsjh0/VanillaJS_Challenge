// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
const body = document.querySelector("body");

function resizeHandler() {
  const windowSize = window.innerWidth;
  if (windowSize <= 500) {
    body.style.backgroundColor = colors[1];
  } else if (windowSize >= 1000) {
    body.style.backgroundColor = colors[3];
  } else {
    body.style.backgroundColor = colors[2];
  }
}

window.addEventListener("resize", resizeHandler);
