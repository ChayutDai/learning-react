import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();

ReactDOM.render(<App />, document.getElementById('root'));

 //normal
ReactDOM.render(<p>MAX</p>,document.getElementById('app'));

// JSX
var element = <p>MAX</p>;
ReactDOM.render(element,document.getElementById('app'));

//Dynamic Content
var name = 'MAX 2 JSX Dynamic';
element = <p>{name}</p>;
ReactDOM.render(element,document.getElementById('app'));

//Multi Line / Use function
// Tip? React ต้องสั่งให้ render code html ใหม่
let changename = 'Max';

function changeName(){
    changename = 'Anna';
    element = (<div>
        <p>{changename}</p>
        <button onClick={changeName}>Change Name</button>
     </div>);
     ReactDOM.render(element,document.getElementById('app'));
    
}

element = (<div>
   <p>{name}</p>
   <button onClick={changeName}>Change Name</button>
</div>);
ReactDOM.render(element,document.getElementById('app'));

//Render by Funtion + Props
function Appz(props){
    return(
     <div>
        <p>{props.name} Function </p>
        <button onClick={changeName}>Change Name</button>
     </div>
    );
}
ReactDOM.render(<Appz name="Max props"/>,document.querySelector('#app'));


