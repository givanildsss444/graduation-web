import './styles/InfoThanks.css'
import cris from '../assets/cris.jpg'
import lek from '../assets/lek.png'
import david from '../assets/david.jpg'
import pablo from '../assets/pablo.png'
import ifal from '../assets/ifal.jpeg'

export default function InfoThanks() {

    return(

        <div className='thanks scrollTarget' id='thanks'>

            <h1 style={{textAlign:'center'}}>Agradecimentos</h1>

            <div className='individual-even'>

                
                <img src={cris} alt="" className='photo-individual'/>
                <div>
                    <h1>Cristiano</h1>
                    <p>
                        Agradecemos de coração ao professor Cristiano, que com sua paixão pela Biologia e dedicação
                        ao ensino foi muito mais que um educador — foi um verdadeiro guia nessa caminhada. Sua presença,
                        conselhos e incentivo foram fundamentais para que seguíssemos firmes até aqui. Obrigado por
                        acreditar em nós, mesmo quando duvidamos de nós mesmos.
                    </p>
                </div>

            </div>

            
                <div className='individual-odd'>
                    
                    <img src={lek} alt="" className='photo-individual'/>
                    <div>
                        <h1>Alexsander</h1>
                        <p>
                            Nossa gratidão ao professor Alexsander, que, mesmo enfrentando desafios pessoais tão difíceis,
                            nunca deixou de nos inspirar com sua força, coragem e dedicação. Sua presença em sala de aula
                            foi um verdadeiro exemplo de superação e amor pelo que faz. Obrigado por nos mostrar, na prática,
                            o que significa não desistir.
                        </p>
                    </div>

                </div>
          
    

            <div className='individual-even'>
                
                <img src={david} alt="" className='photo-individual'/>
                <div>
                    <h1>David</h1>
                    <p>
                        Agradecemos imensamente ao professor Davi por todo o conhecimento compartilhado nas áreas de Banco de Dados
                        e Engenharia de Software. Sua forma clara e objetiva de ensinar nos guiou em momentos desafiadores e
                        despertou em muitos de nós o interesse profundo pela lógica e pela organização das ideias.
                        Obrigado por fazer parte dessa caminhada com tanta competência e dedicação!
                    </p>
                </div>

            </div>


            <div className='individual-odd'>
                
                <img src={pablo} alt="" className='photo-individual'/>
                <div>
                    <h1>Pablo</h1>
                    <p>
                        Nossa gratidão ao professor Pablo, que nos guiou com maestria pelos caminhos das redes e da
                        montagem e manutenção de computadores. Suas aulas práticas, suas explicações claras e seu apoio
                        constante tornaram o aprendizado mais leve e eficiente. Obrigado por sempre estar disposto 
                        a nos ajudar e incentivar.
                    </p>
                </div>

            </div>

                <img src={ifal} alt="" />

            <p>
                A todos que fazem parte do IFAL – Campus Rio Largo, nosso mais profundo agradecimento. Cada servidor, professor,
                 técnico, colaborador e funcionário contribuiu de maneira única para que nossa trajetória fosse possível. 
                 Em cada sala, laboratório, corredor ou simples gesto no dia a dia, sentimos o cuidado, o esforço e a dedicação 
                 de uma equipe que acreditou em nós desde o início. Vocês não apenas formaram estudantes, mas ajudaram a 
                 construir cidadãos. Levaremos cada lembrança, ensinamento e palavra com carinho e gratidão.
                 
                 <p style={{textAlign:'center'}}>
                    <p>para todos</p>
                    <strong>Um grande saravá!!</strong>
                </p>
            </p>

        </div>

    )

}