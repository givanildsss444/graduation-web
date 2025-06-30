import { useState } from 'react';
import './styles/InfoRegistration.css';

export default function FormRegistration() {
  const [formData, setFormData] = useState({
    Tipo: 'student',
    Nome: '',
    Telefone: '',
    Senha: ''
  });

  const correctPasswords = {
    student: 'aluno2025',
    guest: 'convidado2025',
    server: 'servidor2025'
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.Nome]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.Senha !== correctPasswords[formData.Tipo]) {
      alert('Senha incorreta para o tipo selecionado!');
      return;
    }

    const response = await fetch('/.netlify/functions/register', {
      method: 'POST',
      body: JSON.stringify({
        Tipo: formData.Tipo,
        Nome: formData.Nome,
        Telefone: formData.Telefone
      })
    });

    const text = await response.text();
    console.log("Resposta crua do servidor:", text);
    alert(text);
  };

  return (
    <div className='registration' id='registration'>
      <h1>Confirme sua presença!!</h1>

      <form className='myself-inscription' onSubmit={handleSubmit}>
        <select name="Tipo" value={formData.Tipo} onChange={handleChange}>
          <option value="student">Aluno</option>
          <option value="guest">Convidado</option>
          <option value="server">Servidor</option>
        </select>

        <label>
          Nome completo:
          <input
            type="text"
            name="Nome"
            value={formData.Nome}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Telefone:
          <input
            type="text"
            name="Telefone"
            value={formData.Telefone}
            onChange={handleChange}
            placeholder='(82) 9 9999-9999'
            required
          />
        </label>

        <label>
          Senha:
          <input
            type="password"
            name="password"
            value={formData.Senha}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Confirmar Inscrição</button>
      </form>
    </div>
  );
}
