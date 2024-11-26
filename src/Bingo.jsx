// import { useState } from "react";
import { Cell } from "./cell";

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
  

export function Bingo() {
//   const [cuttedList, setCuttedList] = useState(listItems);
const shuffled = listItems
const cuttedList = shuffled.slice(0, 16)

for (let i = shuffled.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[rand]] = [shuffled[rand], shuffled[i]];
  }

    return (
        <>
            <header>
                <img src="./src/assets/bingoBg.png" alt="" />
            </header>
            <div className="box">
                {cuttedList.map((item, index) => (
                    <Cell key={index} value={item} />
                ))}
            </div>
        </>
    )
}