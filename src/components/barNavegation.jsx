import { Link } from 'react-router-dom'
import './barNavegation.css'

export default function NavegationBar() {

    return(

        <div className="bar-navegationFull">

            <Link to='/'>
                <a href="">Início</a>
            </Link>

            <a href="">Turma</a>
            <a href="">Padrinhos</a>
            <a href="">Doe</a>            

        </div>

    );

}