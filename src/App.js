import React from "react";

import BasicExample from "./BasicExample/BasicExample";
import ComplexExamples from "./ComplexExamples/ComplexExamples";
import { VerticalContainer } from "./common/styles";

const App = () => {
  return (
    <VerticalContainer>
      <BasicExample />
      <ComplexExamples />
    </VerticalContainer>
  );
};

export default App;
