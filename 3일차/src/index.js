// import "./styles.css";

const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h2");

// You're gonna need this
function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2021-12-24:00:00:00+0900");

  const now = new Date().getTime();
  const distance = xmasDay.getTime() - now;
  const day = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hour = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  clockTitle.innerText = `${day < 10 ? `0${day}d` : `${day}d`} ${
    hour < 10 ? `0${hour}h` : `${hour}h`
  } ${minutes < 10 ? `0${minutes}m` : `${minutes}m`} ${
    seconds < 10 ? `0${seconds}s` : `${seconds}s`
  }`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
