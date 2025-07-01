import './styles/barNavegation.css'
import { Link } from 'react-router-dom'

export default function NavegationBar() {

    return(

        <div className="bar-navegationFull">

            <Link to='/'>
                <a>Início</a>
            </Link>
            
            
            <Link to='/class'>
                <a>Turma</a>
            </Link>
           
            <Link to='/thanks'>
                <a>Agradecimentos</a>
            </Link>

            <Link to='/gallery'>
                <a>Galeria</a>
            </Link>


            {/*<a href="#qr-code">Doe</a> */}

        </div>

    );

}