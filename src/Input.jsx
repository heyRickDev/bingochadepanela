import { HandleCardGenerator } from './HandleCardGenerator';
import style from'./input.module.css';

export function Input(){
    return (
        <header>
            <form action="">
                <label htmlFor="quantity">Número de cartelas</label>
                <input type="number" name="" id="quantity" />
                <button className="generateButton" onClick={HandleCardGenerator}>Gerar Cartelas</button>
            </form>
        </header>
    )
}