import React from "react";

function ToDoItem(props) {
  return (
    <li
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      {props.content}
    </li>
  );
}

export default ToDoItem;
