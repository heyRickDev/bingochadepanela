import { HandleCardGenerator } from './HandleCardGenerator';

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