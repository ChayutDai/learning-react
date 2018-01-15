import React, { Component } from 'react';
import './App.css';
import Todoinput from './todoinput.js';
import Todolist from './todolist.js';

class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      todoItems: ["hello","world"]
    }
    this.addTodo = this.addTodo.bind(this)
  }

  addTodo(newTodo){
    this.setState({
        todoItems: this.state.todoItems.concat(newTodo)
    })

  }
 

  render() {
    let { todoItems} = this.state;
    return (
      
      <div>
        <Todoinput onAddTodo={this.addTodo}/>
        <br/>
        <Todolist items={todoItems}/>
      </div>
      
    );
  }
}

export default App;
