'use strict'

// Selections 
const body = document.getElementsByTagName('body')[0];
const dayNight = document.getElementById('sun-icon');
const submitButton = document.getElementById('real-submit-button');
const inputValue = document.getElementById('input-value');
const taskTabs = document.getElementsByClassName('task-tab');
const taskList = document.getElementById('list');
const buttonLabel = document.querySelector('.on-hover-submit');
const plusSign1 = document.querySelector('.plus-sign-1');
const plusSign2 = document.querySelector('.plus-sign-2');
const hoverCaps = document.getElementsByClassName('on-hover-submit');

// Theme State
let theme = false;

// TO COMPLETE
let toComplete = [];
// COMPLETED
let completed = [];
// ALL
let allTasks = [];

// FUNCTIONS ////////////////////////////

// Generate UUID
function uuidv4() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
      });
}

// Create a task
const addTask = function () {
      // console.log(taskTabs);
      const createLabel = document.createElement('label');
      const createCheckDiv = document.createElement('div');
      const createCheckBtn = document.createElement('button');
      const createTaskDiv = document.createElement('div');
      const createTaskP = document.createElement('p');
      const taskContent = document.createTextNode(inputValue.value);
      const createHoverCap = document.createElement('div');
      
      createTaskDiv;
      createTaskDiv.classList.add('task-tab');
      createTaskP;
      createTaskDiv.appendChild(createTaskP);
      taskContent;
      createTaskDiv.lastChild.appendChild(taskContent);
      createLabel;
      createTaskDiv.appendChild(createLabel);
      createLabel.classList.add('check-button-label');
      createCheckBtn;
      createLabel.appendChild(createCheckBtn);
      createCheckBtn.classList.add('check-button');
      createHoverCap;
      createLabel.appendChild(createHoverCap);
      createHoverCap.classList.add('on-hover-submit');
      if(theme===false){
            createTaskDiv.classList.add('task-dark');
            createCheckDiv.classList.add('submit-dark');
            createHoverCap.classList.add('submit-dark');
      }else{
            createTaskDiv.classList.add('task-light');
            createCheckDiv.classList.add('submit-light');
            createHoverCap.classList.add('submit-light');
      }
      //ADDING LOGIC
      const taskId = uuidv4()
      // allTasks.push(taskId);
      toComplete.unshift(taskId);
      createTaskDiv.id = taskId;
      taskList.prepend(createTaskDiv);
      inputValue.value="";
};

// Day Mode - Night Mode 
const changeTheme = function(){
      theme = !theme;
      
      body.classList.toggle('night');
      body.classList.toggle('day');

      for(let i=0; i<=taskTabs.length; i++){
            taskTabs[i].classList.toggle('task-light');
            taskTabs[i].classList.toggle('task-dark');
            hoverCaps[i].classList.toggle('submit-dark');
            hoverCaps[i].classList.toggle('submit-light');
      }

      if(theme===false){
            dayNight.src="../images/icon-sun.svg";
            inputValue.style.backgroundColor = 'hsl(237, 14%, 26%)';
            inputValue.style.color ='white';
            buttonLabel.classList.toggle('submit-dark');
            buttonLabel.classList.toggle('submit-light');
            plusSign1.classList.toggle('submit-light');
            plusSign1.classList.toggle('submit-dark');
            plusSign2.classList.toggle('submit-light');
            plusSign2.classList.toggle('submit-dark');
            console.log(`Lights Off`);
      }else{
            dayNight.src="../images/icon-moon.svg";
            inputValue.style.backgroundColor = '#e0dada';
            inputValue.style.color = 'black';
            plusSign1.classList.toggle('submit-light');
            plusSign1.classList.toggle('submit-dark');
            plusSign2.classList.toggle('submit-light');
            plusSign2.classList.toggle('submit-dark');
            buttonLabel.classList.toggle('submit-dark');
            buttonLabel.classList.toggle('submit-light');
            console.log(`Lights On`);
      }
};

// EVENTS ////////////////////////////

//Change Theme
dayNight.addEventListener('click', changeTheme);
//Create Task
submitButton.addEventListener('click', ()=>{
      // executing twice? see console
      if(inputValue.value==0){
            console.log(`You don't want an empty task...`);
      }else{
            addTask()
      }
});