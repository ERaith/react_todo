import React, {Component} from 'react';
import Todos from "./components/Todos";

import './App.css';

class App extends Component {
  state = {
    todos: [{
        id: 1,
        title: 'Take out Trash',
        completed: false
      }, {
        id: 1,
        title: 'Take out Trash',
        completed: false
      }, {
        id: 1,
        title: 'Take out Trash',
        completed: false
      }
    ]
  }
  render(){
    return (
      <div className="App">
        <Todos todos = {this.state.todos}/>
      </div>
    );
  }
}

export default App;
