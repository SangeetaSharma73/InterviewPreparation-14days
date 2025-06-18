import React from "react";

const ComponentB = ({ sharedState, setSharedState }) => {
  return (
    <div>
      <h1>Component B</h1>
      <p>{sharedState}</p>
      <button onClick={() => setSharedState("Updated by Component B")}>
        Update from B
      </button>
    </div>
  );
};

export default ComponentB;
