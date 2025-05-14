import { Link } from 'react-router-dom';
import './acknowLedge.css'

export default function AcknowLedge() {

    return(

        <Link to = '/confirmPresence'>
            <a href="" className='acknowledge-link'>Confirme sua presença!</a>
        </Link>
    );
    
    

}