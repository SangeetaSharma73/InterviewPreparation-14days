import React from "react";

const ComponentA = ({ sharedState, setSharedState }) => {
  return (
    <div>
      <h1>Component A</h1>
      <p>{sharedState}</p>
      <button onClick={() => setSharedState("Updated by Component A")}>
        Update from A
      </button>
    </div>
  );
};

export default ComponentA;
