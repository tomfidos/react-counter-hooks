import React from 'react';
import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Licznik React</h1>
      </header>
      <Counter initValue={5}/>
    </div>
  );
}

export default App;
