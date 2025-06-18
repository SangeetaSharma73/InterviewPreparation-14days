import React from "react";

const ListItem = React.memo(
  ({ item }) => {
    console.log("Rendering ListItem:", item);
    return (
      <li>
        {/* Render properties of the task object */}
        <span>{item.task}</span>
        <span>{item.isCompleted ? "Completed" : "Incomplete"}</span>
      </li>
    );
  },
  (prevProps, nextProps) => {
    // Custom comparison logic
    return prevProps.item.id === nextProps.item.id; // Only re-render if the id of the task changes
  }
);

export default ListItem;
