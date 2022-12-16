import React from 'react';
import './App.css';
import Todo from './components/Todo/Todo';
import TodoForm from './components/TodoForm/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newToto: '',
      todoList: [
        {
          id: 0,
          text: 'todo 1',
          isDone: false,
        },
        {
          id: 1,
          text: 'todo 2',
          isDone: true,
        },
        {
          id: 2,
          text: 'todo 3',
          isDone: true,
        },
      ],
    };
  }

  getTodo = (todoMessage) => {
    const newTodoItem = {
      id: Math.random(),
      text: todoMessage,
      isDone: false,
    }

    this.setState({newToto: todoMessage});
    this.setState({todoList: [...this.state.todoList, newTodoItem]});
  }

  changeStatus = (chanchedItem) => {
    this.setState((state) => {
      return {
        todoList: state.todoList.map(item => item.id === chanchedItem.id ? chanchedItem : item)
      }})
  }

  deleteTodo = (deletedTodo) => {
    this.setState((state) => {
      return {
        todoList: state.todoList.filter(item => item.id !== deletedTodo.id)
      }})
  }

  render() {
    return (
      <div className='container'>
        <Todo 
          todoList={this.state.todoList} 
          changeStatus={this.changeStatus} 
          deleteTodo={this.deleteTodo} 
        />
        <TodoForm 
          getTodo={this.getTodo} 
        />
      </div>
    )
  }
}

export default App;
