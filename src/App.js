import React,{ Component } from "react";
import './App.css';

class Todo extends Component {
  
  constructor(){
    super()
    this.state = {
      nameOfList: "",
      lists: []
    };
  };
  render() {
     
    return (
      <div className="div">
        <h1>ToDo List</h1>
        <input
        className="input"
          type="text"
          value={this.state.nameOfList}
          onChange={this.handleChange.bind(this)}
          name="nameofList"
        />
        <button className="button" onClick={this.handleAddClick.bind(this)}> Add </button>
        <ul>
          {this.state.lists.map((data, key) => (
            <li key={key}>{data}</li>
          ))}
        </ul>
      </div>
    );
  }
  handleChange(e) {
    this.setState({
      nameOfList: e.target.value
    });
  }

  handleAddClick() {
    if (!this.state.nameOfList.length) {
      return;
    }
    this.setState({
      nameOfList: "",
      lists: [...this.state.lists, this.state.nameOfList]
    });
  }
}

export default Todo;


