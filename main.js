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

  toDo.append(taskInput.value)
  cancelButton.classList.add("denyButton","dark");
  toDo.classList.add("listItem");
  tasks++;
  updateTaskNumber();
  taskInput.value = "";
  toDo.append(cancelButton);
  cancelButton.addEventListener("click", removeTask);
  let checkbox = document.createElement('input')
  checkbox.setAttribute('type', "checkbox")
  toDo.prepend(checkbox)
checkbox.addEventListener("changed", () => {
    if (checkbox.checked){
      checkbox.classList.add("checked")} else{
        checkbox.classList.remove('checked')
    }
  })
}
function removeTask(event) {
  event.target.parentElement.remove();
  tasks--;
  updateTaskNumber();
  console.log(event.target);}