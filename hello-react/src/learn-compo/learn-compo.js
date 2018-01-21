import React, { Component } from 'react';
import ReactDOM  from 'react-dom';

class Learncompo extends Component {
  render() {
    //const element = React.render(element,document.querySelector('#app'));
   
    return (
      /*<div className="leancompo">
        <p>Learn-component Working</p>
      </div>*/
      ReactDOM.render(<p>MAX</p>,document.querySelector('#app'))
    
    );
  }
}

export default Learncompo;
