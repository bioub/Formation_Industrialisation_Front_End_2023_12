import config from './config.json';

/**
 * @typedef {object} Todo
 * @property {number} todo.id
 * @property {string} todo.title
 * @property {boolean} todo.completed
 */

/**
 * @typedef {object} TodoWithoutId
 * @property {string} todo.title
 * @property {boolean} todo.completed
 */

/**
 * @returns {Promise<Todo[]>}
 */
export async function fetchTodos() {
  const res = await fetch(config.apiBaseUrl + "/todos");
  return await res.json();
}

/**
 * @param {TodoWithoutId} todoDto
 * @returns {Promise<Todo>}
 */
export async function postTodo(todoDto) {
  const res = await fetch(config.apiBaseUrl + "/todos", {
    method: "POST",
    body: JSON.stringify(todoDto),
    headers: {
      "Content-type": "application/json",
    },
  });

  return await res.json();
}
