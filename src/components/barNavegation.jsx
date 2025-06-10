import './styles/barNavegation.css'
import { Link } from 'react-router-dom'

export default function NavegationBar() {

    return(

        <div className="bar-navegationFull">

            <Link to='/home'>
                <a>Início</a>
            </Link>
            
            
            <Link to='/class'>
                <a>Turma</a>
            </Link>
           

            <a href="#thanks">Agradecimentos</a>
            <a href="#qr-code">Doe</a>

        </div>

    );

}