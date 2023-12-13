import styles from './main.module.scss';
import { fetchTodos, postTodo } from "./api.js";
import { createTodoItem } from "./todos.js";

const formEl = document.querySelector(".todo-form") as HTMLFormElement;

const checkboxEl = document.querySelector(".todo-checkall") as HTMLInputElement;

const inputEl = document.querySelector(".todo-input") as HTMLInputElement;

const divEl = document.querySelector(".todo-list") as HTMLDivElement;


formEl.addEventListener("submit", async (event) => {
  event.preventDefault();

  // const { createTodoItem } = await import('./todos.js');
  // const { postTodo } = await import('./api.js');

  inputEl.classList.remove(styles.invalid);

  if (!inputEl.value.match(/^[\p{Alphabetic}0-9\- ]+$/u)) {
    inputEl.classList.add(styles.invalid);
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
  const completedList = divEl.querySelectorAll<HTMLInputElement>(".todo-completed");

  for (const completedEl of completedList) {
    completedEl.checked = checkboxEl.checked;
  }
});

divEl.addEventListener("click", (event) => {
  const target = event.target as HTMLElement;

  if (target.matches(".todo-btn-delete")) {
    target.closest(".todo-item")?.remove();
  }
});

divEl.addEventListener("dblclick", (event) => {
  const target = event.target as HTMLElement;

  if (target.matches(".todo-title")) {
    const inputEl = document.createElement("input");
    inputEl.className = "todo-title-edit";
    inputEl.value = target.innerText;
    target.replaceWith(inputEl);
  }
});

divEl.addEventListener("keydown", (event) => {
  const target = event.target as HTMLElement;

  if (target.matches(".todo-title-edit")) {
    if (event.code === "Enter") {
      const spanEl = document.createElement("span");
      spanEl.className = "todo-title";
      spanEl.innerText = (target as HTMLInputElement).value;

      target.replaceWith(spanEl);
    }
  }
});

window.addEventListener("click", (event) => {
  /** @type {HTMLElement} */
  const target = event.target;

  const inputEl = document.querySelector(".todo-title-edit") as HTMLInputElement;

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

async function load() {
  const todos = await fetchTodos();

  for (const todo of todos.slice(0, 10)) {
    const todoItemEl = createTodoItem(todo);
    divEl.append(todoItemEl);
  }
}

load();
