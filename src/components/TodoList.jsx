import React from "react";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";

function TodoList(props) {
  function handleDelete() {
    props.deleteFun(props.id);
  }
  return (
    <div>
      <li>{props.value}</li>
      <button onClick={handleDelete}>
        <DeleteOutlineRoundedIcon />
      </button>
    </div>
  );
}

export default TodoList;
