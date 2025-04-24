import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://seu-backend-no-render.com/auth/login', {
        email,
        senha,
      });
      localStorage.setItem('token', response.data.token); // Salva o token no localStorage
      navigate('/home'); // Redireciona para a página inicial
    } catch (err) {
      setError('Email ou senha inválidos');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl mb-4">Login - Santa Cruz</h2>
        {error && <p className="text-red-500">{error}</p>}
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
          Entrar
        </button>
        <p className="mt-2">
          Não tem conta? <a href="/register" className="text-blue-500">Cadastre-se</a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;