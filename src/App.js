import React from 'react';
import NewFormComponent from './components/NewFormComponent';
import { FormProvider } from './components/FormContext';

const App = () => {

  return (
      <FormProvider myValue="somsdsodsdssjhdksh">
        <div className="App">
          <NewFormComponent />
        </div>
      </FormProvider>
  );
}

export default App;
