import { useState } from 'react'
import './ConfirmPresence.css'
import NavegationBar from '../components/barNavegation'

export default function ConfirmPresence() {



    return(

            <div>

                <NavegationBar />

                <div className='container-invite'>

                    <h2>Junte-se a nós nessa linda formatura <br/>e celebre a conquista de um sonho!</h2>

                    <label>

                        <span>Nome</span>
                        <input type="text"/>

                    </label>

                    <label>

                        <span>Telefone</span> 
                        <input type='number'/>

                    </label>

                    <button>Confirmar</button>

                </div>

                
            </div>
    )

}