import config from "./config.json";
import type { Todo, TodoWithoutId } from "./types";

const url = "http://localhost";

export async function fetchTodos(): Promise<Todo[]> {
  const res = await fetch(config.apiBaseUrl + "/todos");
  return await res.json();
}

export async function postTodo(todoDto: TodoWithoutId): Promise<Todo> {
  const res = await fetch(config.apiBaseUrl + "/todos", {
    method: "POST",
    body: JSON.stringify(todoDto),
    headers: {
      "Content-type": "application/json",
    },
  });

  return await res.json();
}
