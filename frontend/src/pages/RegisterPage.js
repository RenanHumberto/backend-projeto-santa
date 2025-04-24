import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterPage = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://seu-backend-no-render.com/cadastro', {
        nome,
        email,
        senha,
      });
      navigate('/login'); // Redireciona para o login após o cadastro
    } catch (err) {
      setError('Erro ao cadastrar. Tente novamente.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleRegister} className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl mb-4">Cadastro - Santa Cruz</h2>
        {error && <p className="text-red-500">{error}</p>}
        <div className="mb-4">
          <label>Nome</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label>Senha</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">
          Cadastrar
        </button>
        <p className="mt-2">
          Já tem conta? <a href="/login" className="text-blue-500">Faça login</a>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;