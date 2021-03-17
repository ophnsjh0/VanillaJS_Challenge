const rangeNum = document.querySelector(".js-number"),
    rangeInput = document.querySelector(".rangeBar"),
    rnum = document.querySelector(".rNum");
const userNum = document.querySelector(".js-usernum"),
    userInput = document.querySelector(".userinput");
const play = document.querySelector(".js-play"),
    playbtn = document.querySelector(".playBtn");
const result = document.querySelector(".js-result");
const jsValue = document.querySelector(".js-value")


function getRandom(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function rangeValue(event){
    event.preventDefault();
    const rangeValue = rangeInput.value;
    rnum.innerHTML = `${rangeValue}`;
}


function startGame(event){
    let randomValue = parseInt(getRandom(1, rangeInput.value));  
    jsValue.innerText = `You chose : ${userInput.value}, the machine chose : ${randomValue}`; 
    if(parseInt(userInput.value) === parseInt(randomValue)){
        result.innerText = `You Win`
    }else{
        result.innerText = `You Lose`
    }
    
    console.log(rangeInput.value);
    console.log(userInput.value);
    console.log(randomValue); 
}

function init(){
    rangeInput.addEventListener("change", rangeValue) 
    playbtn.addEventListener("click", startGame)    
}

init();

