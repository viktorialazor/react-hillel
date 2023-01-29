import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTodoMessage, addTodo } from "../../store/actions/todo";
import "./TodoForm.css";

function TodoForm() {
  const todoMessage = useSelector((state) => state.todoMessage);
  const dispatch = useDispatch();

  const onMessageChange = (e) => {
    dispatch(setTodoMessage(e.target.value));
  };

  const onAddBtnClick = () => {
    if (!isFieldEmpty(todoMessage)) {
      return;
    }

    const newTodoItem = {
      id: Math.random(),
      text: todoMessage,
      isDone: false,
    };

    dispatch(addTodo(newTodoItem));
    dispatch(setTodoMessage(""));
  };

  const isFieldEmpty = (field) => {
    return field.trim() !== "";
  };

  return (
    <form className="form">
      <input
        className="form__input"
        type="text"
        name="task"
        value={todoMessage}
        onChange={onMessageChange}
        placeholder="Enter your task"
      />
      <button
        className="form__button button"
        type="button"
        onClick={onAddBtnClick}
      >
        Add to list
      </button>
    </form>
  );
}

export default TodoForm;
