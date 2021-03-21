// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const btns = document.querySelectorAll("button");
const input = document.querySelector(".js-result");

let result = "";
let opCheck = false;
let numCheck = true;
let equCheck = true;

function init() {
    btns.forEach((button) => {
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
    opCheck = true;
    const current = input.value;
    if (equCheck) {if (numCheck) {
        input.value = current === "0" ? number : input.value + number;
      } else {
        input.value = number;
        numCheck = true;
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
          if (!opCheck) {
            alert("Calculation is unavailable because of operation.");
          } else {
            if (equCheck) {
              const final = eval(result);
              input.value = `${final}`;
              result = "";
              equCheck = false;
              opCheck = false;
            } else {
              clear();
            }
          }
        }
      }

      function operator(oper) {
        if (!opCheck) {
          alert("Operation Error.");
        } else {
          opCheck = false;
          result += oper;
          numCheck = false;
        }
      }
      
      function clear() {
        input.value = 0;
        result = "";
        opCheck = false;
        equCheck = true;
      }
      
      init();
      