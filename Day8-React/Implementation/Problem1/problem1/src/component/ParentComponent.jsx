import React, { useState } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

const ParentComponent = () => {
  // Step 1: Lift the state to the parent
  const [sharedState, setSharedState] = useState("Initial state");

  return (
    <div>
      <ComponentA sharedState={sharedState} setSharedState={setSharedState} />
      <ComponentB sharedState={sharedState} setSharedState={setSharedState} />
    </div>
  );
};

export default ParentComponent;
