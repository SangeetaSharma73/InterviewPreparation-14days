import React from "react";
import ListItem from "./ListItem";

const List = ({ items }) => {
  console.log("Rendering List");
  return (
    <ul>
      All tasks
      {items.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </ul>
  );
};

export default List;
