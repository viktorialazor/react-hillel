import {
  ACTION_TODO_MESSAGE,
  ACTION_TODO_ADD,
  ACTION_TODO_UPDATE,
  ACTION_TODO_DELETE,
} from "../actions/todo";

const INITIAL_STATE = {
  todoList: [
    {
      id: 0,
      text: "todo 1",
      isDone: false,
    },
    {
      id: 1,
      text: "todo 2",
      isDone: true,
    },
    {
      id: 2,
      text: "todo 3",
      isDone: true,
    },
  ],
  todoMessage: "",
};

const savedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : INITIAL_STATE;

const rootReducer = (state = savedState, { type, payload }) => {
  switch (type) {
    case ACTION_TODO_MESSAGE:
      return { ...state, todoMessage: payload };
    case ACTION_TODO_ADD:
      return { ...state, todoList: [...state.todoList, payload] };
    case ACTION_TODO_UPDATE:
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id !== payload.id ? todo : payload
        ),
      };
    case ACTION_TODO_DELETE:
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== payload),
      };
    default:
      return state;
  }
};

export default rootReducer;
