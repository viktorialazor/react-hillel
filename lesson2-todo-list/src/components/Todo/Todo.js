import React from "react";

class Todo extends React.Component {
  onTodoClick = (item) => {
    const changedTodo = {
      ...item,
      isDone: !item.isDone,
    }
    this.props.changeStatus(changedTodo);
  }

  onTodoDeleteClick = (item) => {
    this.props.deleteTodo(item);
  }

  render() {
    const todoList = this.props.todoList.map((item) => {
      return <li 
        key={item.id} 
        className={`list__item ${item.isDone ? 'done' : ''}`} 
        onClick={() => this.onTodoClick(item)}>
          <span 
            className='list__text'>{item.text}
          </span>
          <button
            className='list__button button'
            type='button' 
            onClick={() => this.onTodoDeleteClick(item)}>Delete
          </button>
        </li>
    })

    return (
      <>
        <h1 className='title'>Todo list</h1>
        <ul className='list'>{todoList}</ul>
      </>

    );
  }
};

export default Todo;
