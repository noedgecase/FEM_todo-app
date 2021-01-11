'use strict'

// Selections 
const body = document.getElementsByTagName('body')[0];
const dayNight = document.getElementById('sun-icon');
const taskTabs = document.getElementsByClassName('task-tab');
const taskList = document.getElementById('list');
const task = document.createElement('div');
const submitButton = document.getElementById('submit-button');


// Theme State
let theme = false;
// console.log(theme);

// FUNCTIONS
// Day Mode Night Mode 
const changeTheme = function(){
      theme = !theme;
      body.classList.toggle('night');
      body.classList.toggle('day');
      // taskTabs.classList.add('task-light');
      // taskTabs.classList.add('task-dark');
      console.log(theme);
}

// Add new task to the list
const createNewTask = function(){
      // console.log(theme);
      if (taskList.children.length<1){
            taskList.prepend(task);
      }else{
            taskList.prepend(task.cloneNode(true));
      }
            if(theme===false){
                  task.classList.add('task-tab');
                  task.classList.add('task-dark');
                  task.innerHTML='Test test 123';
                  console.log(`black`);
            }else{
                  task.classList.add('task-tab');
                  task.classList.add('task-light');
                  task.innerHTML='This should be white';
                  console.log(`white`);
            }
}

// Events Trigger
dayNight.addEventListener('click', changeTheme);
submitButton.addEventListener('click', createNewTask);