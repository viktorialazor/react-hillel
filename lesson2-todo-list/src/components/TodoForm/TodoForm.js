import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  onMessageChange = (e) => {
    this.setState({inputValue: e.target.value});
  }

  onAddBtnClick = () => {
    if (!this.isFieldEmpty(this.state.inputValue)) {
      return;
    }

    this.props.getTodo(this.state.inputValue);
    this.setState({inputValue: ''});
  }

  isFieldEmpty(field) {
    return field.trim() !== '';
  }

  render() {
    return (
      <form className='form'>
        <input 
          className='form__input' 
          type="text" 
          name="task" 
          value={this.state.inputValue} 
          onChange={this.onMessageChange} 
          placeholder="Enter your task" 
        />
        <button 
          className='form__button button' 
          type="button" 
          onClick={this.onAddBtnClick}>Add to list
        </button>
      </form>
    );
  }
}

export default TodoForm;
