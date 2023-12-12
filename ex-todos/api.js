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
async function fetchTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  return await res.json();
}

/**
 * @param {TodoWithoutId} todoDto
 * @returns {Promise<Todo>}
 */
async function postTodo(todoDto) {
  await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify(todoDto),
    headers: {
      "Content-type": "application/json",
    },
  });

  return await res.json();
}
