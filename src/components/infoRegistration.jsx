import { useState } from 'react';
import './styles/InfoRegistration.css';


export default function FormRegistration() {
  const [formData, setFormData] = useState({
    type: 'student',
    name: '',
    phone: '',
    password: ''
  });

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
      alert('Senha incorreta para o tipo selecionado!');
      return;
    }

    const response = await fetch('/.netlify/functions/register', {
      method: 'POST',
      body: JSON.stringify({
        type: formData.type,
        name: formData.name,
        phone: formData.phone
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

        <button type="submit">Confirmar Inscrição</button>
      </form>
    </div>
  );
}
