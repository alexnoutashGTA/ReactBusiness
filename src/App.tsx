'use server';

import React from 'react';
import UiButtonHook from "./UIComponents/ui_button_hook";

const App =  () => {
  return <div>
    <div>
      <UiButtonHook  accProps={{name:"n1"}} uiProps={{text:"t1"}}></UiButtonHook>
    </div>;
  </div>

};

export default App;
