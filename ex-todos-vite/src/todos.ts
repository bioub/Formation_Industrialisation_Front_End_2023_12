import { Todo } from "./types";

export function createTodoItem(todo: Todo): HTMLDivElement {
  /*
  <div class="todo-item" data-todo-id="123">
    <input type="checkbox" class="todo-completed">
    <span class="todo-title">Acheter du pain</span>
    <button class="todo-btn-delete">-</button>
  </div>
  */
  const divEl = document.createElement('div');
  divEl.className = "todo-item";
  divEl.dataset.todoId = String(todo.id);

  const checkboxEl = document.createElement('input');
  checkboxEl.type = 'checkbox';
  checkboxEl.className = 'todo-completed';
  checkboxEl.checked = todo.completed;

  const spanEl = document.createElement('span');
  spanEl.className = 'todo-title';
  spanEl.innerText = todo.title;

  const buttonEl = document.createElement('button');
  buttonEl.className = "todo-btn-delete";
  buttonEl.innerText = '-';

  divEl.append(checkboxEl, ' ', spanEl, ' ', buttonEl);

  return divEl;
}
