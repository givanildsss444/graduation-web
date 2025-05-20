import './styles/barNavegation.css'

import { Link } from 'react-router-dom'

export default function NavegationBar() {

    return(

        <div className="bar-navegationFull">

            <Link to='/Home'>
                <a href="#date">Início</a>
            </Link>
            <a href="#class">Turma</a>
            <a href="#thanks">Agradecimentos</a>
            <a href="#qr-code">Doe</a>

        </div>

    );

}