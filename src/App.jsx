import { useState } from 'react';
import './App.css';
import { Cell } from './cell';
import { Bingo } from './Bingo';
import { Input } from './Input';
import { HandleCardGenerator } from './HandleCardGenerator';

function App() {

  return (
    <>
      <HandleCardGenerator />
    </>
  );
}

export default App;
