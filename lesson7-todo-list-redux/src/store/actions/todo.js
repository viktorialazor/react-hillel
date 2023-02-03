export const ACTION_TODO_MESSAGE = "ACTION_TODO_MESSAGE";
export const ACTION_TODO_ADD = "ACTION_TODO_ADD";
export const ACTION_TODO_UPDATE = "ACTION_TODO_UPDATE";
export const ACTION_TODO_DELETE = "ACTION_TODO_DELETE";

export const setTodoMessage = (message) => {
  return { type: ACTION_TODO_MESSAGE, payload: message };
};

export const addTodo = (todo) => {
  return { type: ACTION_TODO_ADD, payload: todo };
};

export const updateTodo = (todo) => {
  return { type: ACTION_TODO_UPDATE, payload: todo };
};

export const deleteTodo = (id) => {
  return { type: ACTION_TODO_DELETE, payload: id };
};
