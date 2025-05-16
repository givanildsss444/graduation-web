import TimerCount from './components/timerCount.jsx'
import NavegationBar from './components/barNavegation.jsx'
import AcknowLedge from './components/acknowLedge.jsx'
import Turma from './assets/turma3ano.jpg'

import { IoArrowDownCircleOutline } from "react-icons/io5";
import './App.css'

export default function Home() {

  return(

    <div className='containerFull'>

      <NavegationBar />


      <div className='info-date'>
        
        <TimerCount />
        <AcknowLedge />

      </div>

      {/* ---------------------------------------------------------------------------- */}
        <IoArrowDownCircleOutline  style={{height:'45px', width:'45px'}}/>

      <div className='info-graduation'>

        <p>É com imensa alegria que convidamos você para celebrar a nossa conquista!</p>
        
        <p>
          Depois de três anos de dedicação, aprendizado e muitas histórias vividas no IFAL – Campus Rio Largo, 
          chegou o grande momento de comemorarmos juntos nossa formatura!
        </p>

        <p>Local: Auditório Principal do IFAL – Campus Rio Largo</p>

        <p>Data: 20 de dezembro de 2025</p>

        <p>Horário: 18h00</p>

        <p>
          Sua presença tornará esse momento ainda mais especial. 
          Contamos com você para compartilhar essa vitória conosco!
        </p>


      </div>

      {/* ---------------------------------------------------------------------------- */}

      <div className='father-info-class'>

          <div className='info-class'>
            
            <span>
              <p>
                Ao longo desses três anos, a turma de Informática do IFAL Campus Rio Largo viveu uma jornada marcada 
                por aprendizados, amizades e muitas histórias que ficarão para sempre na memória. Desde os primeiros dias,
                com a ansiedade de quem começava uma nova etapa, até os momentos finais, carregados de saudade e realização,
                cada passo foi único.
              </p>

              <p>
                Entre códigos, redes, projetos e apresentações, crescemos não só como estudantes, mas como pessoas. 
                Foram madrugadas estudando para as provas, risadas nos corredores, desafios superados em grupo e conquistas que 
                só foram possíveis graças à união e ao esforço coletivo.
              </p>

              <p>
                Não foram apenas os conhecimentos técnicos que moldaram nossa trajetória, mas também os valores, os momentos 
                de companheirismo, os conselhos dos professores e as amizades verdadeiras construídas aqui. O IF de Rio Largo 
                se tornou nossa segunda casa, e cada sala, cada laboratório, carrega um pedacinho da nossa história.
              </p>

              <p>
                Agora, ao encerrarmos esse ciclo, levamos conosco a certeza de que estamos prontos para os próximos desafios. 
                A formatura não é um fim, mas o começo de novas jornadas. Que a mesma garra e espírito de equipe que nos trouxeram 
                até aqui continuem nos guiando para um futuro brilhante.
              </p>

            </span>

           
              <img src={Turma} alt="logo" />
            

          </div>{/* Fecha info-class */}

      </div>{/* Fecha father-info-class */}

      {/* ---------------------------------------------------------------------------- */}
























    </div>

  );
}


