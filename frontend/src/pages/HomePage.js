import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [usuario, setUsuario] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsuario = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const response = await axios.get('https://seu-backend-no-render.com/auth/usuario', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsuario(response.data);
      } catch (err) {
        setError('Erro ao carregar dados do usuário.');
        localStorage.removeItem('token');
        navigate('/login');
      }
    };

    fetchUsuario();
  }, [navigate]);

  if (!usuario) return <div>Carregando...</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Bem-vindo, {usuario.nome}!</h2>
      <p>Email: {usuario.email}</p>
      <p>Plano: {usuario.plano}</p>
      <button
        onClick={() => {
          localStorage.removeItem('token');
          navigate('/login');
        }}
        className="bg-red-500 text-white p-2 mt-4"
      >
        Sair
      </button>
    </div>
  );
};

export default HomePage;