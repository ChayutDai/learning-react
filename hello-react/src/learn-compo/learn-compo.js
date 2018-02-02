import React, { Component } from 'react';
import './learn-compo.css';

class Learncompo extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: props.name,
      elements: [] 
      // set value  ที่ App.js <Learncompo name='ame form App.js' 
      // เวลาเรียนตอนแรก this.props.name => this.state.name
    };
  }
  changeName2() {
     this.setState({
       name: 'this.state.name is Change'
     });
  }

  addElement(event){
    const oldElement = this.state.elements;
    console.log(this.refs.todo.value);
    this.setState({
      elements: oldElement.concat(this.refs.todo.value)
    });
    this.refs.todo.value = '';
  }

  removeElement(list){
     
     const oldElement = this.state.elements;
     const position = oldElement.indexOf(list);
     this.setState({
      elements: oldElement.filter(
          (el, index) => { return index !== position}
        )
     });

  }

  render() { 
    let updateParagraph = '';
    if(this.state.name !== this.props.name){
      updateParagraph = <p>Name updated!</p>
    }
    let list = this.state.elements.map(
      (el, index) => {
        return <li key={index}>{el} <a href='#' onClick= { () => {this.removeElement(el)} }>remove</a> </li> 
        // ใช้ () => {this.removeElement(el) } เพราะ ทำงานเมื่อ Clcik ใช้ Bind
      }
    );

    let stylelenght = {
      color : this.state.elements.length > 3 ? 'green' : 'red'
    };
    
    const hobbyCounterClass = this.state.elements.length > 3 ? 'multiple-elements' : '';

    return (
      <div className="leancompo">
        <p>Learn-component Working . {this.state.name}</p>
        {updateParagraph}
        <p style={stylelenght} className={hobbyCounterClass} > Count To-do list : { this.state.elements.length}</p>
        <input type='text' name='todo' ref='todo'/>
        <button onClick={this.changeName2.bind(this)}>Change Name</button>
        <button onClick={this.addElement.bind(this)}>Add</button>
        <ul>
           {list}
        </ul>
      </div> 
    );
  }
}

export default Learncompo;
