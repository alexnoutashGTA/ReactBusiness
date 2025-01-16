'use server';

import React from 'react';
import UiButtonHook from "./UIComponents/ui_button_hook";
import BusinessRuleType from "./BusinessRules/BusinessRuleType";

const App =  () => {
  return <div>
    <div>
      <UiButtonHook accProps={{name: "n1"}} uiProps={{text: "t1"}}   businessRule={{logicalOperator:"And", filedNames:[]}}></UiButtonHook>
    </div>;
  </div>

};

export default App;
