import React, { useState } from "react";
import TaskList from "./TaskList";
import FormTodo from "./FormTodo";
const Container = () => {
  const [list, setList] = useState([]); // (B-1)
  // (A-2)
  const handleAddItem = (addItem) => {
    setList([...list, addItem]); // (B-2)
  };
  return (
    <div>
       

        <div>
        {/*(A-1)*/}
        <FormTodo handleAddItem={handleAddItem} />
        {/*(C)*/}
        <TaskList list={list} setList={setList} />
        </div>
    </div>
  );
};
export default Container;
