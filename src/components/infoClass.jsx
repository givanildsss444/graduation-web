import './styles/infoClass.css'
import Turma from '../assets/turma3ano.jpg'

export default function InfoClass() {

    return(

        <div className='father-info-class scrollTarget' id='class'>

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
            

          </div>

      </div>

    )

}