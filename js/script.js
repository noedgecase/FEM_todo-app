'use strict'

// Selections 
const body = document.getElementsByTagName('body')[0];
const dayNight = document.getElementById('sun-icon');
const submitButton = document.getElementById('submit-button');
const inputValue = document.getElementById('input-value');
const taskTabs = document.getElementsByClassName('task-tab');
const taskList = document.getElementById('list');

// Theme State
let theme = false;

// TO COMPLETE
let toComplete = [];
// COMPLETED
let completed = [];
// ALL
let allTasks;

// FUNCTIONS ////////////////////////////

// Generate UUID
function uuidv4() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }

// Day Mode Night Mode 
const changeTheme = function(){
      theme = !theme;
      body.classList.toggle('night');
      body.classList.toggle('day');
      taskTabs.classList.toggle('task-light');
      taskTabs.classList.toggle('task-dark');
      if(theme===false){
            dayNight.src="../images/icon-sun.svg";
            console.log(`Lights Off`);
      }else{
            dayNight.src="../images/icon-moon.svg";
            console.log(`Lights On`);
      }
};

// Create a task

const addTask = function () {
      toComplete.unshift(inputValue.value);
      const createTaskDiv = document.createElement('div');
      const createTaskP = document.createElement('p');
      createTaskDiv.appendChild(createTaskP);
      const taskContent = document.createTextNode(inputValue.value);
      createTaskDiv.lastChild.appendChild(taskContent);
      createTaskDiv.classList.add('task-tab', 'task-dark');
      taskList.prepend(createTaskDiv);
      inputValue.value="";
      console.log(toComplete);
};

// EVENTS ////////////////////////////

//Change Theme
dayNight.addEventListener('click', changeTheme);
//Create Task
submitButton.addEventListener('click', ()=>{
      if(inputValue.value==""){
            alert(`You don't want an empty task...`);
      }else{
            addTask()
      }
});