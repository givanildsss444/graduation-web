import './styles/Class.css'

import { Link } from 'react-router-dom'
import NavegationBar from '../components/barNavegation'
import InfoClass from '../components/infoClass'

export default function Class() {

    return(

        <div className='containerFull'> 

                <NavegationBar />
           
           <div>

                <InfoClass />


           </div>



        </div>
        

    )

}