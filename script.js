const container = document.querySelector(".container");
const newTaskInput = document.querySelector("#newtask");
const addTaskButton = document.querySelector("#addtask");
const taskList = document.querySelector("#tasklist");

let tasks = [];

addTaskButton.addEventListener("click", () => {
  const task = newTaskInput.value;
  tasks.push(task);
  taskList.innerHTML = tasks.map(task => `<li>${task}</li>`).join("");
  newTaskInput.value = "";
});

taskList.addEventListener("click", (event) => {
  const li = event.target.closest("li");
  if (li.classList.contains("completed")) {
    li.classList.remove("completed");
  } else {
    li.classList.add("completed");
  }
});
