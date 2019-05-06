import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Chloe', age: 14 },
      { name: 'Miles', age: 13 },
      { name: 'Cristobal', age: 2 }
    ]
  }

  switchNameHandler = (newName) => {
    // console.log("was clicked");
    this.setState({
      persons: [
        { name: newName, age: 14 },
        { name: 'Miles', age: 13 },
        { name: 'Cristobal Andres', age: 2 }

      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hello, I am Leenah!</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler.bind(this, 'Beautiful Crystal')}>Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}></Person>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}></Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}
        click={this.switchNameHandler.bind(this, 'Cristobalito!!!!')}>My hobbies are running around with my monster truck</Person>
      </div>
    );
  }
}

export default App;
