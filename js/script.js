'use strict'

// Theme State
let theme = false;

// STORING
const body = document.querySelector('body');
const dayNight = document.getElementById('sun-icon');
const submitButton = document.getElementById('real-submit-button');
const inputValue = document.getElementById('input-value');
const taskTabs = document.getElementsByClassName('task-tab');
const taskList = document.getElementById('list');
const buttonLabel = document.querySelector('.on-hover-submit');
const plusSign1 = document.querySelector('.plus-sign-1');
const plusSign2 = document.querySelector('.plus-sign-2');
const hoverCaps = document.getElementsByClassName('on-hover-submit');
const inputHoverCap = document.getElementById('input-hover-cap');
const crosses = document.getElementsByClassName('cross-svg');

let toComplete = [];
let completed = [];
let allTasks = [];

// FUNCTIONS ///////////////////////

// Generate UUID
function uuidv4() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
      });
}

// Create a task
const createTask = function () {
      const createTaskDiv = document.createElement('div');
      const createLabel = document.createElement('label');
      const createCheckDiv = document.createElement('div');
      const createCheckBtn = document.createElement('button');
      const createTaskP = document.createElement('p');
      const taskContent = document.createTextNode(inputValue.value);
      const createHoverCap = document.createElement('div');
      const addImg = document.createElement('img');
      
      createTaskDiv;
      createTaskDiv.classList.add('task-tab');
      createTaskDiv.classList.add('cursor-hover');
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
      createTaskDiv.appendChild(addImg);
      addImg.src='../images/icon-cross.svg';
      addImg.classList.add('cross-svg');
      
      // Theme styling /////////
      if(theme===false){
            createTaskDiv.classList.add('task-dark');
            createCheckDiv.classList.add('submit-dark');
            createHoverCap.classList.add('submit-dark');
            createTaskDiv.classList.add('bottom-border-dark');
      }else{
            createTaskDiv.classList.add('task-light');
            createCheckDiv.classList.add('submit-light');
            createHoverCap.classList.add('submit-light');
            createTaskDiv.classList.add('bottom-border-light');
      }
      
      // Logic /////////
      const taskId = uuidv4();
      createTaskDiv.id = taskId;
      allTasks.unshift(taskId);
      toComplete.unshift(taskId);
      console.log(toComplete.length);
      taskList.prepend(createTaskDiv);
      console.log(toComplete);
      inputValue.value="";
      restyleCardList();
      
      addImg.addEventListener('click',() => {
            taskList.removeChild(createTaskDiv);
            toComplete.splice(toComplete.indexOf('taskId'));
            console.log(`deleted: `, taskId, `toComplete now has ${toComplete.length} items`, toComplete);
      });
      // console.log(toComplete.length, allTasks.length);
};

const restyleCardList = function() {
      const cards = document.getElementsByClassName('task-tab');
      // console.log("CARDURI :", cards);
      //TODO: Edit first  --- check if exists
      if(cards[1]) {
            //border top
            cards[1].classList.add('first-task');
      }
      //TODO: Edit second --- check if exists
      if(cards[2]){
            //border none
            cards[2].classList.add('border-radius-none')
      }
      if(cards[cards.length - 1]) {
            // obrder bottom
            cards[cards.length - 1].classList.add('last-task')
      }
}

// delete a task
// const deleteTask = function(taskId){
//       console.log(`deleted: `, taskId);
// }



// Day Mode - Night Mode 
const changeTheme = function(){
      theme = !theme;
      
      body.classList.toggle('night');
      body.classList.toggle('day');
      // o trebuit sa stochez efectul de la butonul de input a formului, nu l-am putut selecta cu 'hoverCaps' ca si pe cele de la taskurile adaugate, nu inteleg de ce, au aceeasi clasa. Am adaugat un ID (inputHoverCap) la butonul de la form si schimba individual mai jos ca workaround.
      inputHoverCap.classList.toggle('submit-light');
      inputHoverCap.classList.toggle('submit-dark');

      // console.log('TASKURI:', taskTabs);
      for(let i=0; i<taskTabs.length; i++){
            taskTabs[i].classList.toggle('task-light');
            taskTabs[i].classList.toggle('task-dark');
            hoverCaps[i].classList.toggle('submit-dark');
            hoverCaps[i].classList.toggle('submit-light');
      }
      
      if(theme===false){
            dayNight.src="../images/icon-sun.svg";
            inputValue.style.backgroundColor = 'hsl(235, 24%, 19%)';
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
      if(inputValue.value==0){
            console.log(`You don't want an empty task...`);
      }else{
            createTask()
      }
});
