import { fetchTodos, postTodo } from "./api.js";
import { createTodoItem } from "./todos.js";

/** @type {HTMLFormElement} */
const formEl = document.querySelector(".todo-form");

/** @type {HTMLInputElement} */
const checkboxEl = document.querySelector(".todo-checkall");

/** @type {HTMLInputElement} */
const inputEl = document.querySelector(".todo-input");

/** @type {HTMLDivElement} */
const divEl = document.querySelector(".todo-list");

formEl.addEventListener("submit", async (event) => {
  event.preventDefault();

  // const { createTodoItem } = await import('./todos.js');
  // const { postTodo } = await import('./api.js');

  inputEl.classList.remove("invalid");

  if (!inputEl.value.match(/^[\p{Alphabetic}0-9\- ]+$/u)) {
    inputEl.classList.add("invalid");
    return;
  }

  const todo = await postTodo({
    title: inputEl.value,
    completed: false,
  });

  const todoItemEl = createTodoItem(todo);
  divEl.prepend(todoItemEl);
  inputEl.value = "";
  inputEl.focus();
});

checkboxEl.addEventListener("click", () => {
  /** @type {NodeListOf<HTMLInputElement>} */
  const completedList = divEl.querySelectorAll(".todo-completed");

  for (const completedEl of completedList) {
    completedEl.checked = checkboxEl.checked;
  }
});

divEl.addEventListener("click", (event) => {
  /** @type {HTMLElement} */
  const target = event.target;

  if (target.matches(".todo-btn-delete")) {
    target.closest(".todo-item").remove();
  }
});

divEl.addEventListener("dblclick", (event) => {
  /** @type {HTMLElement} */
  const target = event.target;

  if (target.matches(".todo-title")) {
    const inputEl = document.createElement("input");
    inputEl.className = "todo-title-edit";
    inputEl.value = target.innerText;
    target.replaceWith(inputEl);
  }
});

divEl.addEventListener("keydown", (event) => {
  /** @type {HTMLElement} */
  const target = event.target;

  if (target.matches(".todo-title-edit")) {
    if (event.code === "Enter") {
      const spanEl = document.createElement("span");
      spanEl.className = "todo-title";
      spanEl.innerText = target.value;

      target.replaceWith(spanEl);
    }
  }
});

window.addEventListener("click", (event) => {
  /** @type {HTMLElement} */
  const target = event.target;

  const inputEl = document.querySelector(".todo-title-edit");

  if (!inputEl || target === inputEl) {
    return;
  }

  const spanEl = document.createElement("span");
  spanEl.className = "todo-title";
  spanEl.innerText = inputEl.value;

  inputEl.replaceWith(spanEl);
});

const valueFromStorage = localStorage.getItem("value-todo") ?? "";
inputEl.value = valueFromStorage;

inputEl.addEventListener("input", () => {
  localStorage.setItem("value-todo", inputEl.value);
});

// async function load() {
//   const todos = await fetchTodos();

//   for (const todo of todos.slice(0, 10)) {
//     const todoItemEl = createTodoItem(todo);
//     divEl.append(todoItemEl);
//   }
// }

// load();
