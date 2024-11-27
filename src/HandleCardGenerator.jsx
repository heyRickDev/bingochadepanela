import React, { useState } from 'react';
import { Bingo } from './Bingo'; // Adjust the import path as needed

export function HandleCardGenerator() {
  const [generatedCards, setGeneratedCards] = useState([]);

  const handleCardGenerator = (event) => {
    event.preventDefault();
    
    // Get the quantity from the input
    const quantityInput = event.currentTarget.querySelector('#quantity');
    const quantity = quantityInput ? parseInt(quantityInput.value, 10) : 0;

    // Generate an array of Bingo components
    const cards = Array.from({ length: quantity }, (index) => (
      <Bingo key={index} />
    ));

    // Update state with generated cards
    setGeneratedCards(cards);
  };

  return (
    <form onSubmit={handleCardGenerator}>
      <div className="wrapper">
        <label htmlFor="quantity">Quantidade</label>
        <input 
          type="number" 
          id="quantity" 
          required 
        />
        <button type="submit">Gerar Cartelas</button>
      </div>
      <div className="page">
        {generatedCards}
      </div>
    </form>
  );
}