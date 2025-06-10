import './styles/InfoRegistration.css'

export default function FormRegistration() {

    return(

        <div className='registration' id='registration'>

            <h1>Confirme sua presença!!</h1>

            <div className='myself-inscription'>

                <select name="type" id="">
                    <option value="student">Aluno</option>
                    <option value="guest">Convidado</option>
                    <option value="server">Servidor</option>
                </select>

                <label>
                    Nome completo: 
                    <input type="text" />
                </label>
                
                <label>
                    Telefone: 
                    <input type="number" />
                </label>
                
            </div>

        </div>

    )

}