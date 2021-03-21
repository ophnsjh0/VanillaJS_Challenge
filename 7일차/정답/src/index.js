// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const buttons = document.querySelectorAll("button");
const input = document.querySelector(".show");

let result = "";
let operCheck = false;
let numberCheck = true;
let equlasCheck = true;

function init() {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      switch (button.dataset.type) {
        case "operator":
          const oper = button.innerText;
          operator(oper);
          break;
        case "ac":
          clear();
          break;
        case "equals":
          calc();
          break;
        default:
          const number = button.innerText;
          displayNumber(number);
          break;
      }
    });
  });
}

function displayNumber(number) {
  operCheck = true;
  const current = input.value;

  if (equlasCheck) {
    if (numberCheck) {
      input.value = current === "0" ? number : input.value + number;
    } else {
      input.value = number;
      numberCheck = true;
    }
    result += number;
  } else {
    equlasCheck = true;
    input.value = number;
    result = number;
    console.log(result);
  }
}

function calc() {
  if (input.value === "0") {
    clear();
  } else {
    if (!operCheck) {
      alert("Calculation is unavailable because of operation.");
    } else {
      if (equlasCheck) {
        const final = eval(result);
        input.value = `${final}`;
        result = "";
        equlasCheck = false;
        operCheck = false;
      } else {
        clear();
      }
    }
  }
}

function operator(oper) {
  if (!operCheck) {
    alert("Operation Error.");
  } else {
    operCheck = false;
    result += oper;
    numberCheck = false;
  }
}

function clear() {
  input.value = 0;
  result = "";
  operCheck = false;
  equlasCheck = true;
}

init();
