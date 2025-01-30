import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import Airdrop from './screens/Airdrop';
import Daily from './screens/Daily';
import Earn from './screens/Earn';
import Referrals from './screens/Referrals'; // Nuevo componente Referrals
import supabase from './supabaseClient';  // Importa el cliente de Supabase

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let { data, error } = await supabase
      .from('mi_tabla')  // Reemplaza 'mi_tabla' con el nombre de tu tabla en Supabase
      .select('*');

    if (error) console.error(error);
    else setData(data);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/airdrop" element={<Airdrop />} />
        <Route path="/daily" element={<Daily />} />
        <Route path="/earn" element={<Earn />} />
        <Route path="/referrals" element={<Referrals />} />
      </Routes>
      {data && data.map(item => (
        <div key={item.id}>
          <p>{item.nombre}</p>  {/* Asegúrate de que 'nombre' es una columna en tu tabla */}
        </div>
      ))}
    </div>
  );
}

export default App;
