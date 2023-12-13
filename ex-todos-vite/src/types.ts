export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export type TodoWithoutId = Omit<Todo, "id">;
