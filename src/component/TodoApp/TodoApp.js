import React, { Component } from "react";
import "./TodoApp.css";
class TodoApp extends Component {
  render() {
    return (
      <div className="todo-container">
        <form className="input-section">
          <h1>TodoApp</h1>
          <input type="text" placeholder="Enter items here" />
        </form>

        <ul>
          <li>Items</li>
          <li>Items</li>
        </ul>
      </div>
    );
  }
}

export default TodoApp;
