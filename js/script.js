'use strict'

// Selections 
const body = document.getElementsByTagName('body')[0];
const dayNight = document.getElementById('sun-icon');
const taskTabs = document.getElementsByClassName('task-tab');
const taskList = document.getElementById('list');
const createTaskDiv = document.createElement('div');
const submitButton = document.getElementById('submit-button');
const inputValue = document.getElementById('input-value');


// Theme State
let theme = false;

// TO COMPLETE
let toComplete = [];
// COMPLETED
let completed =[];
// ALL
let allTasks = [toComplete, completed];
// FUNCTIONS ////////////////////////////


// Day Mode Night Mode 
const changeTheme = function(){
      theme = !theme;
      body.classList.toggle('night');
      body.classList.toggle('day');
      // taskTabs.classList.add('task-light');
      // taskTabs.classList.add('task-dark');
      if(theme===false){
            console.log(`Lights Off`);
      }else{
            console.log(`Lights On`);
      }
}

// Add task to 'to complete' array + create task div

const renderTask = function(){
      let i;
      for(i=0; i<=allTasks.length; i++){
            taskList.append.createTaskDiv;
      }
}

const getInput = function () {
      if(inputValue.value.length==0){
            alert(`You don't want an empty task...`);
      }else{
            toComplete.push(inputValue.value);
            taskList.append(createTaskDiv);
            // renderTask();
            inputValue.value="";
            console.log(toComplete);
      }
};


  



// EVENTS ////////////////////////////

//Change Theme
dayNight.addEventListener('click', changeTheme);
//Create Task
submitButton.addEventListener('click', ()=>{
      getInput();
});