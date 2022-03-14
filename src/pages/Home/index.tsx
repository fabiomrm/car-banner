import carImg from 'assets/images/car.png';
import { Button } from 'components/Button';

import './styles.css';

export const Home = () => {
    return(
        <div className="home-container">
            <div className="base-card home-card">
                <div className="card-image-container">
                   <img src={carImg} alt="Imagem de carro"/>
                </div>
                <div className="card-content-container">
                    <h1>O carro perfeito para você</h1>
                    <p>Conheça nossos carros e dê mais um passo na realização do seu sonho</p>
                </div>
            </div>
            <div className="base-card catalog-card"> 
                <Button />
                <p>Comece agora a comprar</p>
            </div>
        </div>
    )
}