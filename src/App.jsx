import { useState } from 'react';
import './App.css';
import { Cell } from './cell';
import { Bingo } from './Bingo';
import { Input } from './Input';



function App() {

  return (
    <>
          <Input />
      <div className="page">
          <Bingo />
      </div>
    </>
  );
}

export default App;
