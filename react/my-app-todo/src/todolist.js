import React, { Component } from 'react';
import Todoitem from './todoitem.js'
class Todolist extends Component {
  render() {
      let {items} = this.props
    return (
        <div>
        <ul>
          { items.map((todo,i) => <li key={i}><Todoitem text={todo}/></li>)}
        </ul>
        </div>
    );
  }
}

export default Todolist;
