'use strict'

// Theme State
let theme = false;

let active = [];
let completed = [];
let allTasks = [];

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
const ctrlPanel = document.getElementById('control-panel');
const allBtn = document.getElementById('all');
const activeBtn = document.getElementById('active');
const completedBtn = document.getElementById('completed');
const clearCompleted = document.getElementById('clear-completed-btn');
let itemsLeft = document.getElementById('items-left-btn');

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
      createTaskP.classList.add('task-content');
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
      active.unshift(taskId);
      allTasks.unshift(taskId);
      taskList.prepend(createTaskDiv);
      // console.log(active);
      inputValue.value="";
      console.log(`Active: ${active.length}, allTasks: ${allTasks.length}, Completed: ${completed.length}`);
      restyleCardList();
      
      addImg.addEventListener('click',() => {
            if(active.includes(createTaskDiv.id)){
                  active.splice(active.indexOf(createTaskDiv.id), 1);
                  allTasks.splice(allTasks.indexOf(createTaskDiv.id), 1);
            }else if(completed.includes(createTaskDiv.id)){
                  completed.splice(completed.indexOf(createTaskDiv.id), 1);
                  allTasks.splice(allTasks.indexOf(createTaskDiv.id), 1);
            }
            console.log(`deleted: ${createTaskDiv.id}`);
            console.log(`Active: ${active.length}, allTasks: ${allTasks.length}, Completed: ${completed.length}`);
            taskList.removeChild(createTaskDiv);
            restyleCardList();
      });

      createCheckBtn.addEventListener('click', ()=>{
      if(active.includes(createTaskDiv.id)){
            active.splice(active.indexOf(createTaskDiv.id), 1);
            completed.unshift(createTaskDiv.id)
            console.log(`COMPLETED: ${createTaskDiv.id}`);
      }else{
            completed.splice(completed.indexOf(createTaskDiv.id), 1);
            active.unshift(createTaskDiv.id)
            console.log(`ACTIVE: ${createTaskDiv.id}`);
      }
            createTaskP.classList.toggle('line-through');
            createHoverCap.classList.toggle('hidden');
            createCheckBtn.classList.toggle('check-button');
            createCheckBtn.classList.toggle('check-button-checked');
            console.log(`Active: ${active.length}, allTasks: ${allTasks.length}, Completed: ${completed.length}`);
      });

      // **CONTROL PANEL
      // clear COMPLETED
      clearCompleted.addEventListener('click', ()=>{
      if(0<completed.length){
            console.log(`Cleared ${completed.length} tasks from Completed.`);
                  for(let i=0; i<completed.length; i++){
                        taskList.removeChild(document.getElementById(completed[i]));
                        allTasks.splice(completed[i], 1);
                  }
            completed.splice(completed[0]);
            console.log(`Active: ${active.length}, allTasks: ${allTasks.length}, Completed: ${completed.length}`);
      }
      // else{
      //       console.log(`Nothing to clear.`);
      // }
})

};

const restyleCardList = function() {
      const cards = document.getElementsByClassName('task-tab');
      if(cards[1]) {
            cards[1].classList.add('first-task');
            cards[1].classList.remove('border-radius-none');
      }
      if(cards[2]){
            cards[2].classList.add('border-radius-none')
            cards[2].classList.remove('first-task');
            // ctrlPanel.style.visibility = "visible";
      }
      if(cards[cards.length - 1]) {
            cards[cards.length - 1].classList.remove('border-radius-none')
            cards[cards.length - 1].classList.add('last-task')
      }
      // console.log(`cards length is ${cards.length}`);
      // console.log('succesfully restyled');
}

// Day Mode - Night Mode 
const changeTheme = function(){
      theme = !theme;
      
      body.classList.toggle('night');
      body.classList.toggle('day');
      /*o trebuit sa stochez efectul de la butonul de input a formului,
      nu l-am putut selecta cu 'hoverCaps' ca si pe cele de la taskurile adaugate,
      nu inteleg de ce, au aceeasi clasa. Am adaugat un ID (inputHoverCap) la 
      butonul de la form si se schimba individual mai jos ca workaround.*/
      inputHoverCap.classList.toggle('submit-light');
      inputHoverCap.classList.toggle('submit-dark');
      ctrlPanel.classList.toggle('task-dark');
      ctrlPanel.classList.toggle('task-light');
      ctrlPanel.classList.toggle('control-panel-light');
      ctrlPanel.classList.toggle('control-panel-dark');

      // console.log('TASKURI:', taskTabs);
      for(let i=0; i<taskTabs.length; i++){
            taskTabs[i].classList.toggle('task-light');
            taskTabs[i].classList.toggle('task-dark');
            taskTabs[i].classList.toggle('bottom-border-dark');
            taskTabs[i].classList.toggle('bottom-border-light');
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


// CONTROL PANEL ////////////////
// show ACTIVE
activeBtn.addEventListener('click', ()=>{
      for(let i=0; i<completed.length; i++){
            document.getElementById(completed[i]).classList.add('hidden');
      }
      for(let i=0; i<active.length; i++){
            document.getElementById(active[i]).classList.remove('hidden');
      }
})

// show COMPLETED
completedBtn.addEventListener('click', ()=>{
      if(0<completed.length){
            for(let i=0; i<active.length; i++){
                  document.getElementById(active[i]).classList.add('hidden');
            }
            for(let i=0; i<completed.length; i++){
                  document.getElementById(completed[i]).classList.remove('hidden');
            }
      }
})

// show ALL
allBtn.addEventListener('click', ()=>{
      for(let i=0; i<active.length; i++){
            document.getElementById(active[i]).classList.remove('hidden');
      }
      for(let i=0; i<completed.length; i++){
            document.getElementById(completed[i]).classList.remove('hidden');
      }
})

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

// ITEMS LEFT COUNTER UPDATE
document.body.addEventListener('click', ()=>{
      itemsLeft.innerHTML = `${active.length} items left`;
})