'use strict'

// Selections 
const body = document.getElementsByTagName('body')[0];
const dayNight = document.getElementById('sun-icon');
const taskTabs = document.querySelectorAll('.task-tab');
const taskList = document.getElementById('list');
const task = document.createElement('div');
const submitButton = document.getElementById('submit-button');


// Theme State
let theme = false;
// console.log(theme);

// FUNCTIONS
// Light mode Night Mode 
const changeTheme = function(){
      theme = !theme;
      // console.log(theme);
      body.classList.toggle('night');
      body.classList.toggle('day');
      // taskTabs.classListAll.toggle('task-light');
      // taskTabs.classListAll.toggle('task-dark');
}

// Add new task to the list
const createNewTask = function(){
      taskList.append(task);
      if(theme=0){
            task.classList.add('task-tab')
            task.classList.add('task-dark')
            console.log('its working');
      }else{
            task.classList.add('task-tab')
            task.classList.toggle('task-light')
            console.log('its working');
      }
      task.innerHTML='test';
      
      
}

// Events 
dayNight.addEventListener('click', changeTheme);
submitButton.addEventListener('click', createNewTask);