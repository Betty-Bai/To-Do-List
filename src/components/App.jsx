import React, { useState } from "react";
import Header from "./Header";
import InputArea from "./InputArea";
import TodoList from "./TodoList";

function App() {
  const [items, setItems] = useState([]);

  function addToList(newItem) {
    setItems((preValue) => {
      return [...preValue, newItem];
    });
  }

  function deleteItem(id) {
    setItems((preValue) => {
      return preValue.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <Header />
      <InputArea addFun={addToList} />
      <ul>
        {items.map((item, index) => {
          return (
            <TodoList
              key={index}
              id={index}
              value={item}
              deleteFun={deleteItem}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
