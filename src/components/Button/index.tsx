import { Link } from 'react-router-dom';
import './styles.css';

type Props = {
    text?: string;
}

export const Button = ({ text }: Props) => {
    return(
        <div className="btn-container">
            <button className="btn btn-primary">
                <Link to="/cars">
                    <h6>{text ? text : "ver catálogo"}</h6>
                </Link>
            </button>
        </div>
    )
}