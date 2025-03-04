'use server';

import React from 'react';
import UiButtonHook from "./UIComponents/ui_button_hook";
import BusinessRuleType from "./BusinessRules/BusinessRuleType";
const theme = {
  blue: {
    default: "#3f51b5",
    hover: "#283593",
  },
  pink: {
    default: "#e91e63",
    hover: "#ad1457",
  },
};


const bizRule =[{logicalOperator:"And", filedNames:["firstName", "lastName"]}];
const App =  () => {
  return <div>
    <div>
      <UiButtonHook accProps={{name: "n1"}} uiProps={{text: "t1", theme:theme}} businessRules={bizRule}></UiButtonHook>
    </div>;
  </div>
};

export default App;
