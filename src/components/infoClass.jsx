import './styles/infoClass.css'
import Turma from '../assets/turma3ano.jpg'
import maladragem from '../assets/maladragem.mp4'
import tempo from '../assets/tempo.mp4'
 


export default function InfoClass() {

    return(

        <div className='father-info-class scrollTarget' id='class'>

          <div className='info-class'>
            


              <h1 style={{textAlign:'center'}}>Onde tudo começou.</h1>

              <img src={Turma} alt="logo" width={300} height={200} />

              <p>
                Ao longo desses três anos, a turma de Informática do IFAL Campus Rio Largo viveu uma jornada marcada 
                por aprendizados, amizades e muitas histórias que ficarão para sempre na memória. Desde os primeiros dias,
                com a ansiedade de quem começava uma nova etapa, até os momentos finais, carregados de saudade e realização,
                cada passo foi único.
              </p>

              

              <video controls src={maladragem} type='video/mp4' width={320} height={200}/>

              <h1 style={{textAlign:'center'}}>Nosso chão, nosso voo.</h1>

              <p>
                Entre códigos, redes, projetos e apresentações, crescemos não só como estudantes, mas como pessoas. 
                Foram madrugadas estudando para as provas, risadas nos corredores, desafios superados em grupo e conquistas que 
                só foram possíveis graças à união e ao esforço coletivo.
              </p>

              <h1 style={{textAlign:'center'}}>Fomos felizes aqui.</h1>

              <video controls src={tempo} type='video/mp4' width={320} height={200}/>

              <p>
                Não foram apenas os conhecimentos técnicos que moldaram nossa trajetória, mas também os valores, os momentos 
                de companheirismo, os conselhos dos professores e as amizades verdadeiras construídas aqui. O IF de Rio Largo 
                se tornou nossa segunda casa, e cada sala, cada laboratório, carrega um pedacinho da nossa história.
              </p>

              <h1 style={{textAlign:'center'}}>Para sempre, IFAL</h1>

              <p>
                Agora, ao encerrarmos esse ciclo, levamos conosco a certeza de que estamos prontos para os próximos desafios. 
                A formatura não é um fim, mas o começo de novas jornadas. Que a mesma garra e espírito de equipe que nos trouxeram 
                até aqui continuem nos guiando para um futuro brilhante.
              </p>
            

          </div>

      </div>

    )

}