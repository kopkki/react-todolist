import React, { useState, useRef, useEffect } from "react";

function Todo(props) {
  const {
    id,
    title,
    isDone,
    isEdit,
    handleDelete,
    handleCheck,
    handleEdit,
    editTodo,
    editBlur,
  } = props;

  const editRef = useRef(null);

  useEffect(() => {
    if (isEdit) {
      editRef.current.focus();
    }
  }, [isEdit]);

  return (
    <li className="todo">
      <div className="todo-text">
        <input
          type="checkbox"
          name="done"
          id="done"
          checked={isDone}
          onChange={() => handleCheck(id)}
        />
        {isEdit ? (
          <input
            type="text"
            name="title"
            id="title"
            ref={editRef}
            value={title}
            onChange={(e) => editTodo(id, e.target.value)}
            onBlur={() => editBlur(id)}
          />
        ) : (
          <h3>{title}</h3>
        )}
      </div>
      <div className="btn-container">
        <button className="edit" onClick={() => handleEdit(id)}>
          編輯
        </button>
        <button className="delete" onClick={() => handleDelete(id)}>
          刪除
        </button>
      </div>
    </li>
  );
}

export default Todo;
