import React, { useState } from "react";
import Note from "./Note";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const { value } = event.target;
    setInputText(value);
  }

  function handleClick() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function mapData(data) {
    return <Note content={data} />;
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(mapData)}
          {/* {items.map((todoItem) => (
            <li>{todoItem}</li>
          ))} */}
        </ul>
      </div>
    </div>
  );
}

export default App;
