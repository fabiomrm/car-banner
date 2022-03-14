import './styles.css';

export const Input = () => {
    return (
        <div className= "input-container">
            <input type="text" placeholder="Digite sua busca"/>
            <button className="standard-button input-button">BUSCAR</button>
        </div>
    );
}