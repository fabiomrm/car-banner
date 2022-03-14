import carImg  from 'assets/images/car-product.png';
import './styles.css';

export const CarCard = () => {
    return(
        <div className="base-card car-card">
        <div className="card-top-container">
            <img src={carImg} alt="foto do carro"/>
        </div>
        <div className="card-bottom-container">
            <h6>Audi Supra TT</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, optio!</p>
            <div className="card-bottom-container-button">
                <button className="standard-button card-button">COMPRAR</button>
            </div>
        </div>
    </div>
    )
}