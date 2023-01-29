import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../store/actions/todo";
import "./Todo.css";

function Todo() {
  const todoList = useSelector((state) => state.todoList);
  const dispatch = useDispatch();

  const onTodoClick = (item) => {
    const changedTodo = {
      ...item,
      isDone: !item.isDone,
    };
    dispatch(updateTodo(changedTodo));
  };

  const onTodoDeleteClick = (e, id) => {
    e.stopPropagation();
    dispatch(deleteTodo(id));
  };

  const getTodoList = () => {
    const todos = todoList.map((item) => {
      return (
        <li
          key={item.id}
          className={`list__item ${item.isDone ? "done" : ""}`}
          onClick={() => onTodoClick(item)}
        >
          <span className="list__text">{item.text}</span>
          <button
            className="list__button button"
            type="button"
            onClick={(e) => onTodoDeleteClick(e, item.id)}
          >
            Delete
          </button>
        </li>
      );
    });

    return todos;
  };

  return (
    <>
      <h1 className="title">Todo list</h1>
      <ul className="list">{getTodoList()}</ul>
    </>
  );
}

export default Todo;
