// // <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const taskForm = document.querySelector(".js-taskForm"),
    taskInput = taskForm.querySelector("input"),
    taskList = document.querySelector(".js-pending");
const finishList = document.querySelector(".js-finished")

const TASKS_LS = 'task';
const FINISH_LS = `finish`;
let tasks = []; 
let finishs = [];

function deleteTask(event){
    const btn = event.target;
    const li = btn.parentNode;
    taskList.removeChild(li);
    const cleanTasks = tasks.filter(function(task){
        console.log(task.id, parseInt(li.id));
        // console.dir(task.id);
        return task.id !== parseInt(li.id);
    });
    console.log(cleanTasks);
    tasks = cleanTasks;
    saveTasks();
}

function deleteFinish(event){
    const btn = event.target;
    const li = btn.parentNode;
    finishList.removeChild(li);
    const cleanFinish = finishs.filter(function(finish){
        // console.log(finish.fid, parseInt(li.id));
        return finish.fid !== parseInt(li.id);
    });
    finishs = cleanFinish;
    saveFinishs();
}

function saveTasks(){
    localStorage.setItem(TASKS_LS, JSON.stringify(tasks));
}
function saveFinishs(){
    localStorage.setItem(FINISH_LS, JSON.stringify(finishs))
}

function moveTask(event){
    const btn = event.target;
    const li = btn.parentNode;
    taskList.removeChild(li);
    const cleanTasks = tasks.filter(function(task){
        return task.id !== parseInt(li.id);
    });  
    const moveTasks = tasks.filter(function(task){
        return task.id === parseInt(li.id)
    });
    tasks = cleanTasks; 
    const finishValue = moveTasks[0].text;
    paintfinish(finishValue);
    saveTasks();   
    // console.log(moveTasks[0]);
    // console.dir(moveTasks);
}

function moveFinish(event){
    const btn = event.target;
    const li = btn.parentNode;
    finishList.removeChild(li);
    const cleanFinishs = finishs.filter(function(finish){
        return finish.fid !== parseInt(li.id);
    });  
    const moveFinishs = finishs.filter(function(finish){
        return finish.fid === parseInt(li.id)
    });
    finishs = cleanFinishs; 
    const taskValue = moveFinishs[0].text;
    paintToDo(taskValue);
    saveFinishs();   
    // console.log(moveFinishs[0]);
    // console.dir(moveFinishs);
}

function getRandom(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function paintfinish(text){
    const random = getRandom(1, 100);
    const finishLi = document.createElement("li");
    const finishDelBtn = document.createElement("button");  
    const finishMoveBtn = document.createElement("button"); 
    const finishSpan = document.createElement("span");
    const finishId = new Date().getTime() + random;
    finishSpan.innerText = text;
    finishDelBtn.innerHTML = "X";
    finishDelBtn.addEventListener("click", deleteFinish);
    finishMoveBtn.innerHTML = "O";
    finishMoveBtn.addEventListener("click", moveFinish);
    finishLi.appendChild(finishSpan); 
    finishLi.appendChild(finishDelBtn);
    finishLi.appendChild(finishMoveBtn);
    finishLi.id = finishId
    finishList.appendChild(finishLi);
    const finishObj = {
        text: text,
        fid: finishId
    };
    finishs.push(finishObj);
    saveFinishs();
}

function paintToDo(text){
    const random = getRandom(1, 100);
    const li = document.createElement("li");
    const delBtn = document.createElement("button");  
    const moveBtn = document.createElement("button"); 
    const span = document.createElement("span");
    const newId = new Date().getTime() + random;
    span.innerText = text;
    delBtn.innerHTML = "X";
    delBtn.addEventListener("click", deleteTask);
    moveBtn.innerHTML = "O";
    moveBtn.addEventListener("click", moveTask);
    li.appendChild(span); 
    li.appendChild(delBtn);
    li.appendChild(moveBtn);
    li.id = newId;
    taskList.appendChild(li);
    const taskObj = {
        text: text,
        id: newId
    };
    tasks.push(taskObj);
    saveTasks();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = taskInput.value;
    paintToDo(currentValue);
    taskInput.value ="";
    console.log(currentValue);
}

function loadTasks(){
    const loadTasks = localStorage.getItem(TASKS_LS);
    if(loadTasks !== null){
        const parseTask = JSON.parse(loadTasks);
        parseTask.forEach(function(task){
            paintToDo(task.text);
        });
    }
    console.log(loadTasks);
}

function loadFinishs(){
    const loadFinishs = localStorage.getItem(FINISH_LS);
    if(loadFinishs !== null){
        const parseFinish = JSON.parse(loadFinishs);
        parseFinish.forEach(function(finish){
            paintfinish(finish.text);
        });
    }
    console.log(loadFinishs);
}

function init(){
    loadTasks();
    loadFinishs();
    taskForm.addEventListener("submit", handleSubmit);
}

init();