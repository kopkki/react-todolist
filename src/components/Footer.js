import React, { useState, useEffect } from "react";

function Footer({ todos, clearAllTodos }) {
  return (
    <footer className="todo-footer">
      <h4>
        已完成 {todos.filter((todo) => todo.isDone === true).length}/
        {todos.length}
      </h4>
      <button onClick={() => clearAllTodos()}>清除已完成</button>
    </footer>
  );
}

export default Footer;
