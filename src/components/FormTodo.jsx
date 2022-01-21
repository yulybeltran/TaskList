import React, { useState } from "react";

const FormTodo = (props) => {
  const { handleAddItem } = props;
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    handleAddItem({
      done: false,
      id: (+new Date()).toString(),
      description,
    });

    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="todo-list">
        <div className="file-input">
          <input
            type="text"
            value={description}
            className="text"
            onChange={(e) => setDescription(e.target.value)}
          />

          <button
            className="button blue"
            disabled={description ? "" : "disabled"}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormTodo;
