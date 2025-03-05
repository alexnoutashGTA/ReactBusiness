'use server';

import React from 'react';
import UiButtonHook from "./UIComponents/ui_button_hook";
import BusinessRuleType, {businessRule} from "./BusinessRules/BusinessRuleType";
const theme = {
  blue: {
    default: "#3f51b5",
    hover: "#283593",
    disabled:"#ada6a9"
  },
  pink: {
    default: "#e91e63",
    hover: "#ad1457",
    disabled:"#ada6a9"
  },
};


const bizRule:businessRule ={logicalOperator:"&",
  filedNames:[["firstNameEdited",true], ["firstNameValidated",false]]};
// The button below will be enabled if the firstname is edited and validated
// The button below will be enabled if the firstname is edited and validated
// The button below will be enabled if the firstname is edited and validated
// The button below will be enabled if the firstname is edited and validated
// The button below will be enabled if the firstname is edited and validated
// The button below will be enabled if the firstname is edited and validated
// The button below will be enabled if the firstname is edited and validated
// The button below will be enabled if the firstname is edited and validated
// The button below will be enabled if the firstname is edited and validated
// The button below will be enabled if the firstname is edited and validated
const App =  () => {
  return <div>
    <div>
      <UiButtonHook accProps={{name: "b1"}} uiProps={{text: "disabled button example", theme:theme}} businessRules={[bizRule]}></UiButtonHook>
    </div>
  </div>
};

export default App;
