// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

// const selectElement = document.querySelector('.js-select');

// function saveName(text) {
//     localStorage.setItem(USER_LS, text);
// }

// const USER_LS = "country"

// function handlesubmit(event){
//     event.preventDefault();
//     const currentValue = event.target.value;
//     saveName(currentValue);
// } 

// selectElement.addEventListener('change', handlesubmit);
  
const selectElement = document.querySelector('.js-select');

const USER_LS = "country"

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function paintGreetiong(text){
    const result = document.querySelector(`.result`);
    result.textContent = `Save LocalStorage : ${text}`;

}

function loadCountry(){
    const currentCountry = localStorage.getItem(USER_LS);
    if(currentCountry !== null){
        paintGreetiong(currentCountry);
    }
}

function handlesubmit(event){
    event.preventDefault();
    const currentValue = event.target.value;
    saveName(currentValue);
    loadCountry();
} 

function init(){ 
    selectElement.addEventListener('change', handlesubmit);
}

init();




