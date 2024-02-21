class TodoStorage {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem("myTodo")) || [];
  }

  addTodo(task) {
    this.tasks.push(task);
    this.saveTodo();
  }

  saveTodo() {
    localStorage.setItem("myTodo", JSON.stringify(this.tasks));
  }

  getTasks() {
    return this.tasks;
  }

  removeTask(id) {
    this.tasks = this.tasks.filter((eachTodo) => eachTodo.id !== id);
    this.saveTodo();
  }

  updateTask(id, completed) {
    this.tasks = this.tasks.map((task) =>
      task.id === id ? { ...task, completed: completed } : task
    );
    this.saveTodo();
  }
}

function taskDomElement({ id, text, completed }) {
  const allTasks = document.getElementById("allTasks");

  let li = document.createElement("li");
  let p = document.createElement("p");
  p.innerText = text;
  li.appendChild(p);

  let span = document.createElement("span");
  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fa-solid");
  deleteIcon.classList.add("fa-trash");
  span.appendChild(deleteIcon);
  li.appendChild(span);

  span.addEventListener("click", function () {
    li.remove();
    todoStorage.removeTask(id);
    renderTodoList();
  });

  let anchor = document.createElement("a");
  let Check = document.createElement("i");
  Check.classList.add("fa-solid");
  Check.classList.add("fa-circle-check");
  anchor.appendChild(Check);
  li.appendChild(anchor);

  anchor.addEventListener("click", function () {
    const updatedCompleted = !completed;
    todoStorage.updateTask(id, updatedCompleted);
    renderTodoList();
  });

  if (completed) {
    p.classList.add("completed_line_strike");
    anchor
      .querySelector(".fa-circle-check")
      .classList.add("completed_task_active");
  }

  allTasks.appendChild(li);
}

const todoStorage = new TodoStorage();

function checkTaskList() {
  const noTaskMsg = document.querySelector(".no_task_msg");
  if (todoStorage.getTasks().length === 0) {
    noTaskMsg.style.display = "block";
  } else {
    noTaskMsg.style.display = "none";
  }
}

function renderTodoList() {
  const allTasks = document.getElementById("allTasks");
  allTasks.innerHTML = "";
  todoStorage.getTasks().forEach((eachTodo) => {
    taskDomElement(eachTodo);
  });
  checkTaskList();
}

function generateRandomString(length) {
  return Math.random().toString(36).substr(2, length);
}

function addTask() {
  let inputVal = document.getElementById("input");
  if (inputVal.value === "") {
    alert("You must write something!");
    return;
  }

  const newTodo = {
    id: generateRandomString(10),
    text: inputVal.value,
    completed: false,
  };
  todoStorage.addTodo(newTodo);
  renderTodoList();

  inputVal.value = "";
}

window.addEventListener("DOMContentLoaded", () => renderTodoList());

const addTodoBtn = document.getElementById("button");
addTodoBtn.addEventListener("click", () => {
  addTask();
});
