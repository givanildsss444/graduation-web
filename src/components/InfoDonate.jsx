import './styles/donate.css';
import './styles/modal.css';
import QrCode from '../assets/qrcodepix.jpg';
import { useState } from 'react';
import Modal from 'react-modal';

import { FaCheck } from "react-icons/fa";

Modal.setAppElement('#root');

export default function Donate() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pixKey = 'ifalrlformatura2026@gmail.com';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(pixKey);
      setIsModalOpen(true);

      // Fechar o modal automaticamente após 2 segundos
      setTimeout(() => {
        setIsModalOpen(false);
      }, 10000);
    } catch (err) {
      console.error('Erro ao copiar:', err);
    }
  };

  return (
    <div className='father-donate'>
      <div className='donate'>
        <img src={QrCode} alt="QR Code para Pix" id='qr-code' />

        <div className='info-donate'>
          <span>Ajude a tornar esse sonho possível! </span>
          <p>A sua contribuição faz a diferença!</p>
          <p>
            Estamos organizando nossa formatura com muito carinho, e 
            toda ajuda é bem-vinda para tornar esse momento ainda mais especial.
          </p>
          <p>
            Você pode contribuir com qualquer valor via Pix usando o QR Code ou a chave pix abaixo:
          </p>
          <p>Clique para copiar!</p>

          <p 
            className="pix-key" 
            onClick={copyToClipboard}
            title="Clique para copiar a chave Pix"
          >
            <strong>{pixKey}</strong>
          </p>
        </div>
      </div>

      {/* Modal para feedback de cópia */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="modal-content"
        overlayClassName="modal-overlay"
       
      >
        <FaCheck style={{height:'20%', width:'20%'}}/>
        <h2> Chave Pix copiada!</h2>
        <p>Agora é só colar no app do banco para fazer sua contribuição ❤️</p>
      </Modal>
    </div>
  );
}
