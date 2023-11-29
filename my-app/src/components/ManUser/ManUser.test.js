import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ManUser from './ManUser';
 
function App() {
  const manUser = "Hola mundo";
 
  return (
    <div className="App">
      <manUser manUser={manUser} />
    </div>
  );
}
 
export default App;