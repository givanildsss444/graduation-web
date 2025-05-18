import './styles/donate.css'
import QrCode from '../assets/qrcodepix.jpg'

export default function Donate() {

    return(

        <div className='father-donate'>

          <div className='donate'>

            <img src={QrCode} alt="" id='qr-code' />

            <div className='info-donate'>


              <span>Ajude a tornar esse sonho possível! </span>
              <p>A sua contribuição faz a diferença!</p>
              <p>
                Estamos organizando nossa formatura com muito carinho, e 
                toda ajuda é bem-vinda para tornar esse momento ainda mais especial.
              </p>
              <p>Você pode contribuir com qualquer valor via Pix usando a chave abaixo ou escaneando o QR Code:</p>
              
              <p><strong>ifalrlformatura2025@gmail.com</strong></p>


            </div>

          </div>

      </div>

    )

}