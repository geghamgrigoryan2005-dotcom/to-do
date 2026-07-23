let taskInput = document.getElementById("taskInput");
let addButton = document.querySelector("#taskButton");
let taskList = document.querySelector("#taskList");
let count = document.getElementById("count");
let tasks = 0;

addButton.addEventListener("click", addTask);

function updateTaskNumber() {
  console.log(count.textContent);
  count.textContent = tasks;
}

function addTask() {
  let inputText = taskInput.value.trim();
  if (inputText.length < 1) {
    alert("Cannot be empty");
    return;
  }
  let toDo = document.createElement("li");
  let cancelButton = document.createElement("button");
  cancelButton.textContent = "X";

  taskList.append(toDo);

  
  cancelButton.classList.add("denyButton","dark");
  toDo.classList.add("listItem");
  toDo.innerHTML = `
     <p class="red"> Work-task <span>${inputText}</span></p>
  
  `;
  tasks++;
  updateTaskNumber();
  taskInput.value = "";
  toDo.append(cancelButton);
  cancelButton.addEventListener("click", removeTask);
}

function removeTask(event) {
  event.target.parentElement.remove();
  tasks--;
  updateTaskNumber();
  console.log(event.target);
}
