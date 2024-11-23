import { useState } from 'react';
import './App.css';
import { Cell } from './cell';

const listItems = [
  'Afiador de faca',
  'Assadeiras antiaderentes',
  'Bacias',
  'Boleador',
  'Coadores',
  'Colheres',
  'Concha',
  'Copo medidor',
  'Cortador de pizza',
  'Cuscuzeira',
  'Escorredor',
  'Frigideiras',
  'Funil',
  'Leiteira',
  'Liquidificador',
  'Manteigueira',
  'Tigela',
  'Torradeira',
  'Canecas',
  'Pratos fundos',
  'Toalha',
  'Chaleira',
  'Vassoura',
  'Avental',
  'Tapetes',
  'Xícaras',
  'Saleiro',
  'Paliteiro',
  'Queijeira',
  'Jogos americanos',
  'Abridor',
  'Petisqueira',
  'Lixeiras',
  'Puxa-saco',
  'Rodinho de pia',
  'Rodo',
  'Pá',
  'Fernanda',
  'Henrique',
];

function App() {
  const [cuttedList, setCuttedList] = useState(listItems);

  const handleRandomize = () => {
    const shuffled = [...listItems];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[rand]] = [shuffled[rand], shuffled[i]];
    }
    setCuttedList(shuffled.slice(0, 16));
  };

  return (
    <>
      <div className="page">
          <button onClick={handleRandomize}>Randomize</button>
        <header>
          <img src="./src/assets/bingoBg.png" alt="" />
        </header>
        <div className="box">
          {cuttedList.map((item, index) => (
            <Cell key={index} value={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
