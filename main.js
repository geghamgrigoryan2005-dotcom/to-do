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
  if (taskInput.value.trim().length < 1) {
    alert("Cannot be empty");
    return;
  }
  let toDo = document.createElement("li");
  let cancelButton = document.createElement("button");
  cancelButton.textContent = "X";
  cancelButton.addEventListener("click", removeTask);
  taskList.append(toDo, cancelButton);
  cancelButton.classList.add("denyButton");
  toDo.classList.add("listItem");
  toDo.textContent = taskInput.value;
  tasks++;
  updateTaskNumber();
  taskInput.value = "";
}

function removeTask() {
  let toDo = document.querySelector(".listItem");
  let cancelButton = document.querySelector(".denybutton");
  tasks--;
  count.textContent = tasks;
  toDo.remove();
  cancelButton.remove();
}
