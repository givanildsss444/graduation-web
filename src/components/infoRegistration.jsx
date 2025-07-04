import React, { useState } from 'react';
import Modal from 'react-modal';
import './styles/InfoRegistration.css';
import './styles/modal.css';

import { GoAlertFill } from "react-icons/go";
import { FaCheck } from "react-icons/fa";

Modal.setAppElement('#root');

export default function FormRegistration() {
  const [formData, setFormData] = useState({
    type: 'student',
    name: '',
    phone: '',
    password: ''
  });

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState(''); 

  const correctPasswords = {
    student: 'aluno2025',
    guest: 'convidado2025',
    server: 'servidor2025'
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.password !== correctPasswords[formData.type]) {
    setModalMessage('erro');
    setIsPopupOpen(true);
    return;
  }

  try {
    const response = await fetch('/.netlify/functions/register', {
      method: 'POST',
      body: JSON.stringify({
        type: formData.type,
        name: formData.name,
        phone: formData.phone
      })
    });

    const text = await response.text();
    console.log("Resposta do servidor:", text);

    // Mostra pop-up de sucesso
    setModalMessage('sucesso');
    setIsPopupOpen(true);

    // Se quiser limpar o formulário após sucesso:
    setFormData({
      type: 'student',
      name: '',
      phone: '',
      password: ''
    });

  } catch (error) {
    console.error("Erro ao enviar:", error);
    setModalMessage('erro');
    setIsPopupOpen(true);
  }
};

  return (
    <div className='registration-father'>

      <div className='design'>

        <div className='registration' id='registration'>

          <h1>Confirme sua presença!!</h1>

          <form className='myself-inscription' onSubmit={handleSubmit}>

            <select name="type" value={formData.type} onChange={handleChange}>
              <option value="student">Aluno</option>
              <option value="guest">Convidado</option>
              <option value="server">Servidor</option>
            </select>

            <label>

              Nome completo:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

            </label>

            <label>

              Telefone:
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(99) 9 9999-9999"
                required
              />

            </label>

            <label>

              Senha:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />

            </label>

            <label id='accept-button'>
              <button className='acknowledge-link' type="submit">Confirmar Inscrição</button>
            </label>

          </form>

        </div>

      </div>


      {/* Modal para senha incorreta */}
      <Modal
        isOpen={isPopupOpen}
        onRequestClose={() => setIsPopupOpen(false)}
        className={`modal-content ${modalMessage}`}
        overlayClassName="modal-overlay"
        contentLabel="Resultado da Inscrição"
      >
      
        {modalMessage === 'erro' ? (
          <>
            <GoAlertFill style={{height:'20%', width:'20%'}}/>
            <h2>Senha Incorreta</h2>
            <p>Verifique se a senha corresponde ao tipo de usuário selecionado.</p>
          </>
        ) : (
          <>
          <FaCheck style={{height:'20%', width:'20%'}}/>
            <h2> Inscrição Confirmada</h2>
            <p>Seu nome foi registrado com sucesso!</p>
          </>
        )}
        
        <button className="close-button" onClick={() => setIsPopupOpen(false)}>
          Fechar
        </button>

      </Modal>

    </div>

  );

}
